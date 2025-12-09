import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

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
    
    // Tracking Google Ads conversion (sera géré côté client)
    
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
