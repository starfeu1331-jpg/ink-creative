import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from '@react-email/components';

interface ContactNotificationProps {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  date: string;
}

export default function ContactNotification({
  name,
  email,
  phone,
  company,
  message,
  date,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de contact de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header avec logo stylisé */}
          <Section style={header}>
            <div style={logo}>
              <span style={logoText}>Ink</span>
              <span style={logoDot}>.</span>
            </div>
            <Heading style={h1}>Nouvelle demande de contact</Heading>
          </Section>

          {/* Badge "Nouveau" */}
          <Section style={badgeSection}>
            <div style={badge}>🎯 Nouveau lead</div>
          </Section>

          {/* Informations du contact */}
          <Section style={infoCard}>
            <div style={infoRow}>
              <span style={infoLabel}>👤 Nom</span>
              <Text style={infoValue}>{name}</Text>
            </div>

            <Hr style={divider} />

            <div style={infoRow}>
              <span style={infoLabel}>📧 Email</span>
              <Link href={`mailto:${email}`} style={infoLink}>
                {email}
              </Link>
            </div>

            <Hr style={divider} />

            <div style={infoRow}>
              <span style={infoLabel}>📞 Téléphone</span>
              <Link href={`tel:${phone}`} style={infoLink}>
                {phone}
              </Link>
            </div>

            {company && (
              <>
                <Hr style={divider} />
                <div style={infoRow}>
                  <span style={infoLabel}>🏢 Entreprise</span>
                  <Text style={infoValue}>{company}</Text>
                </div>
              </>
            )}
          </Section>

          {/* Message */}
          <Section style={messageSection}>
            <Text style={messageLabel}>💬 Message</Text>
            <div style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </div>
          </Section>

          {/* Métadonnées */}
          <Section style={metaSection}>
            <Text style={metaText}>📊 Source : Site web Ink Creative</Text>
            <Text style={metaText}>📅 Reçu le : {date}</Text>
          </Section>

          {/* CTA - Bouton de réponse */}
          <Section style={ctaSection}>
            <Link href={`mailto:${email}?subject=Re: Votre demande de contact Ink Creative`} style={button}>
              Répondre maintenant
            </Link>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={footerDivider} />
            <Text style={footerText}>
              Cet email a été envoyé automatiquement depuis votre site{' '}
              <Link href="https://ink-creative.fr" style={footerLink}>
                ink-creative.fr
              </Link>
            </Text>
            <Text style={footerTextSmall}>
              Ink Creative - Stratégie d'Influence Marketing pour PME
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles inspirés du design Ink Creative
const main = {
  backgroundColor: '#0a0a0a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const header = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const logo = {
  marginBottom: '24px',
};

const logoText = {
  fontSize: '32px',
  fontWeight: '300',
  color: '#ffffff',
  letterSpacing: '-0.02em',
};

const logoDot = {
  fontSize: '32px',
  fontWeight: '300',
  color: '#22c55e',
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '300',
  margin: '0',
  letterSpacing: '-0.01em',
};

const badgeSection = {
  textAlign: 'center' as const,
  marginBottom: '24px',
};

const badge = {
  display: 'inline-block',
  backgroundColor: 'rgba(34, 197, 94, 0.1)',
  border: '1px solid rgba(34, 197, 94, 0.3)',
  borderRadius: '12px',
  padding: '8px 16px',
  color: '#22c55e',
  fontSize: '14px',
  fontWeight: '500',
};

const infoCard = {
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: '24px',
  marginBottom: '24px',
  backdropFilter: 'blur(10px)',
};

const infoRow = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '4px',
};

const infoLabel = {
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '14px',
  fontWeight: '500',
  marginBottom: '4px',
};

const infoValue = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '400',
  margin: '0',
};

const infoLink = {
  color: '#22c55e',
  fontSize: '16px',
  fontWeight: '400',
  textDecoration: 'none',
};

const divider = {
  borderColor: 'rgba(255, 255, 255, 0.1)',
  margin: '16px 0',
};

const messageSection = {
  marginBottom: '24px',
};

const messageLabel = {
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '14px',
  fontWeight: '500',
  marginBottom: '12px',
};

const messageBox = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: '20px',
};

const messageText = {
  color: '#ffffff',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const metaSection = {
  marginBottom: '32px',
};

const metaText = {
  color: 'rgba(255, 255, 255, 0.4)',
  fontSize: '13px',
  margin: '4px 0',
};

const ctaSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#22c55e',
  borderRadius: '12px',
  color: '#0a0a0a',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
  transition: 'all 0.2s ease',
};

const footer = {
  marginTop: '40px',
};

const footerDivider = {
  borderColor: 'rgba(255, 255, 255, 0.1)',
  margin: '32px 0 24px 0',
};

const footerText = {
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '13px',
  lineHeight: '1.6',
  textAlign: 'center' as const,
  margin: '8px 0',
};

const footerLink = {
  color: '#22c55e',
  textDecoration: 'none',
};

const footerTextSmall = {
  color: 'rgba(255, 255, 255, 0.3)',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '4px 0',
};
