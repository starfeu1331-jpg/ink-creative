import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';
import ContactNotification from '@/emails/ContactNotification';
import { render } from '@react-email/components';

// Initialiser Resend uniquement si la clé API existe
const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
};

// Schéma de validation Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  company: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const validatedData = contactSchema.parse(body);
    
    // Enregistrement dans la base de données
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company || null,
        message: validatedData.message,
        source: 'website_form',
      },
    });
    
    // Envoi de l'email de notification avec template stylisé
    const resend = getResendClient();
    if (resend) {
      try {
        const emailDate = new Date().toLocaleString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const emailHtml = render(
          ContactNotification({
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            company: validatedData.company,
            message: validatedData.message,
            date: emailDate,
          })
        );

        await resend.emails.send({
          from: 'Ink Creative <onboarding@resend.dev>',
          to: process.env.NOTIFICATION_EMAIL || 'starfeu1331@gmail.com',
          subject: '🎯 Nouvelle demande de contact - Ink Creative',
          html: emailHtml,
        });
      } catch (emailError) {
        // Ne pas bloquer la réponse si l'email échoue
        console.error('Erreur envoi email:', emailError);
      }
    } else {
      console.warn('Resend non configuré - email de notification non envoyé');
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement.',
        contactId: contact.id 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Erreur API contact:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Données invalides',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Une erreur est survenue. Veuillez réessayer.' 
      },
      { status: 500 }
    );
  }
}
