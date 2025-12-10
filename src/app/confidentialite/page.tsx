import { Metadata } from 'next';
import ConfidentialiteClient from './ConfidentialiteClient';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Ink Creative',
  description: 'Politique de confidentialité et protection des données personnelles d\'Ink Creative. Conformité RGPD, droits des utilisateurs et traitement des données.',
  robots: 'noindex, follow',
};

export default function ConfidentialitePage() {
  return <ConfidentialiteClient />;
}
