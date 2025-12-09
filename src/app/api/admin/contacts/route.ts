import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Récupérer toutes les demandes
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error('Erreur récupération contacts:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer une demande
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID manquant' },
        { status: 400 }
      );
    }

    await prisma.contact.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'Contact supprimé',
    });
  } catch (error) {
    console.error('Erreur suppression contact:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
