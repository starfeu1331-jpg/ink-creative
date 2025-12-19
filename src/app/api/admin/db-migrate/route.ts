import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Vérification du mot de passe
    if (password !== 'marSoso04') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    // Créer la table clicks directement via SQL
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "clicks" (
        "id" TEXT NOT NULL,
        "source" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        
        CONSTRAINT "clicks_pkey" PRIMARY KEY ("id")
      );
    `);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Table "clicks" créée avec succès !'
    }, { status: 200 });
  } catch (error: any) {
    console.error('Erreur lors de la migration:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la migration',
        details: error.message
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Utilisez POST avec { "password": "..." } pour exécuter la migration' 
  }, { status: 200 });
}
