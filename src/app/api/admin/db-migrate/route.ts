import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Vérification du mot de passe
    if (password !== 'marSoso04') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    // Exécuter prisma db push
    const { stdout, stderr } = await execAsync('npx prisma db push --accept-data-loss --skip-generate');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Migration effectuée',
      stdout,
      stderr 
    }, { status: 200 });
  } catch (error: any) {
    console.error('Erreur lors de la migration:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la migration',
        details: error.message,
        stdout: error.stdout,
        stderr: error.stderr
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
