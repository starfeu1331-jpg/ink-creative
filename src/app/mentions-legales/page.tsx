import { Metadata } from 'next';
import MentionsLegalesClient from './MentionsLegalesClient';

export const metadata: Metadata = {
  title: 'Mentions Légales | Ink Creative',
  description: 'Mentions légales du site Ink Creative - Agence d\'influence marketing pour PME. Informations légales, éditeur, hébergement et propriété intellectuelle.',
  robots: 'noindex, follow',
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />;
}
