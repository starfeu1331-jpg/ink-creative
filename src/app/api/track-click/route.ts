import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { source } = await request.json();
    
    if (!source) {
      return NextResponse.json({ error: 'Source manquante' }, { status: 400 });
    }

    await prisma.click.create({
      data: {
        source,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du clic:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'enregistrement du clic' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Récupérer les stats agrégées
    const clickStats = await prisma.click.groupBy({
      by: ['source'],
      _count: {
        source: true,
      },
    });

    // Récupérer tous les clics avec leurs dates
    const allClicks = await prisma.click.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ 
      clicks: clickStats,
      history: allClicks
    }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des clics:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des clics' },
      { status: 500 }
    );
  }
}
