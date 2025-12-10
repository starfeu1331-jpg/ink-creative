import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';

// Initialiser Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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
    
    // Envoi de l'email de notification
    try {
      const emailDate = new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      await resend.emails.send({
        from: 'Ink Creative <onboarding@resend.dev>',
        to: process.env.NOTIFICATION_EMAIL || 'starfeu1331@gmail.com',
        subject: '🎯 Nouvelle demande de contact - Ink Creative',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #22c55e;">Nouvelle demande de contact</h2>
            <p>Vous avez reçu une nouvelle demande depuis votre site web :</p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>👤 Nom :</strong> ${validatedData.name}</p>
              <p><strong>📧 Email :</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              <p><strong>📞 Téléphone :</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>
              ${validatedData.company ? `<p><strong>🏢 Entreprise :</strong> ${validatedData.company}</p>` : ''}
              <p><strong>💬 Message :</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${validatedData.message}</p>
            </div>
            
            <div style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              <p>📊 Source : Site web</p>
              <p>📅 Date : ${emailDate}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px;">
                Cet email a été envoyé automatiquement depuis votre site Ink Creative.<br>
                Pour répondre au client, utilisez directement son email : ${validatedData.email}
              </p>
            </div>
          </div>
        `
      });
    } catch (emailError) {
      // Ne pas bloquer la réponse si l'email échoue
      console.error('Erreur envoi email:', emailError);
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
