"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactFormProps {
  variant?: 'default' | 'compact';
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        
        // Google Ads Conversion Tracking
        if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) {
          window.gtag('event', 'conversion', {
            'send_to': `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}`,
            'value': 1.0,
            'currency': 'EUR',
            'event_callback': () => {
              console.log('Conversion Google Ads trackée');
            }
          });
        }
        
        // Event Analytics - Tracking formulaire de contact
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submission', {
            event_category: 'conversion',
            event_label: 'influence_marketing_inquiry',
            value: 1
          });
        }
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Impossible de soumettre le formulaire. Veuillez réessayer.');
      console.error('Erreur:', error);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-white/70 mb-2";

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prêt à booster votre visibilité ?
          </h2>
          <p className="text-xl text-white/60">
            Discutons de votre projet d'influence marketing
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClasses}
                placeholder="Jean Dupont"
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            <div>
              <label htmlFor="company" className={labelClasses}>
                Entreprise
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={inputClasses}
                placeholder="Votre entreprise"
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email professionnel *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClasses}
                placeholder="contact@entreprise.fr"
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClasses}>
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClasses}
                placeholder="+33 6 12 34 56 78"
                disabled={status === 'loading' || status === 'success'}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className={labelClasses}>
              Votre projet en quelques mots *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={inputClasses}
              placeholder="Parlez-nous de vos objectifs, de votre cible et de votre budget approximatif..."
              disabled={status === 'loading' || status === 'success'}
            />
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-400 font-medium">Erreur</p>
                <p className="text-red-300/80 text-sm">{errorMessage}</p>
              </div>
            </motion.div>
          )}

          {/* Success Message */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-6 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-green-400 font-bold text-lg">Message envoyé !</p>
                <p className="text-green-300/80 mt-1">
                  Merci pour votre demande. Nous vous recontactons sous 24h pour discuter de votre projet.
                </p>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            whileHover={{ scale: status === 'idle' || status === 'error' ? 1.02 : 1 }}
            whileTap={{ scale: status === 'idle' || status === 'error' ? 0.98 : 1 }}
            className={`
              w-full py-4 px-6 rounded-xl font-semibold text-lg
              flex items-center justify-center gap-3
              transition-all duration-300
              ${status === 'success' 
                ? 'bg-green-500 text-white cursor-not-allowed' 
                : status === 'loading'
                ? 'bg-green-500/50 text-white cursor-wait'
                : 'bg-gradient-to-r from-green-400 to-emerald-500 text-black hover:shadow-lg hover:shadow-green-400/20'
              }
            `}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Envoi en cours...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Message envoyé
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Envoyer ma demande
              </>
            )}
          </motion.button>

          <p className="text-center text-white/40 text-sm mt-6">
            Réponse garantie sous 24h • Sans engagement
          </p>
        </motion.form>
      </div>
    </section>
  );
}
