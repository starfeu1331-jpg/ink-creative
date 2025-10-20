'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import { trackContactIntent, trackEvent } from '@/components/Analytics';
import { Linkedin, Dribbble, Instagram, Smartphone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    budget: '',
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Tracker l'intention de contact avec le type de service
    trackContactIntent('contact_form', formData.type);
    trackEvent('form_submission', 'conversion', 'contact_form', undefined, {
      service_type: formData.type,
      budget_range: formData.budget,
      has_company: formData.entreprise ? 'yes' : 'no'
    });
    
    try {
      // Envoi réel via Formspree (remplacez YOUR_FORM_ID par votre ID Formspree)
  const response = await fetch('https://formspree.io/f/xwprzgzk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Merci ! Votre message a été envoyé avec succès.');
        // Reset form
        setFormData({
          nom: '',
          email: '',
          entreprise: '',
          budget: '',
          type: '',
          message: ''
        });
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionReveal>
            <motion.h1 
              className="text-6xl md:text-8xl font-light mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Contact
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transformons votre vision en réalité créative. Parlons de votre projet.
            </motion.p>
          </SectionReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <SectionReveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                  Discutons de votre projet
                </h2>
                <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                  Chaque projet commence par une conversation. Partagez-moi votre vision, 
                  vos objectifs et vos contraintes. Ensemble, nous trouverons la solution 
                  créative parfaite pour votre marque.
                </p>
              </div>

              {/* Méthodes de contact */}
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/15 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/60 text-sm">hello@inkportfolio.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/15 transition-colors">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Téléphone</p>
                    <p className="text-white/60 text-sm">+33 6 12 34 56 78</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/15 transition-colors">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Localisation</p>
                    <p className="text-white/60 text-sm">Paris, France</p>
                  </div>
                </motion.div>
              </div>

              {/* Réseaux sociaux */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">Suivez-moi</p>
                <div className="flex gap-4">
                  {[
                    { nom: 'LinkedIn', icon: 'linkedin' },
                    { nom: 'Behance', icon: 'behance' },
                    { nom: 'Instagram', icon: 'instagram' },
                    { nom: 'Dribbble', icon: 'dribbble' }
                  ].map((social) => (
                    <motion.div
                      key={social.nom}
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/15 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon === 'linkedin' && <Linkedin className="w-4 h-4 text-white" />}
                      {social.icon === 'behance' && <Dribbble className="w-4 h-4 text-white" />}
                      {social.icon === 'instagram' && <Instagram className="w-4 h-4 text-white" />}
                      {social.icon === 'dribbble' && <Dribbble className="w-4 h-4 text-white" />}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Disponibilité */}
              <div className="bg-green-400/10 backdrop-blur-xl rounded-2xl p-6 border border-green-400/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Disponible pour de nouveaux projets</span>
                </div>
                <p className="text-white/60 text-sm">
                  Délai moyen de réponse : 24h
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Formulaire */}
          <SectionReveal delay={0.2}>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-white/80 text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors backdrop-blur-xl"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors backdrop-blur-xl"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="entreprise" className="block text-white/80 text-sm font-medium mb-2">
                    Entreprise (optionnel)
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors backdrop-blur-xl"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="type" className="block text-white/80 text-sm font-medium mb-2">
                      Type de projet
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors backdrop-blur-xl"
                    >
                      <option value="" className="bg-gray-900">Sélectionner</option>
                      <option value="motion" className="bg-gray-900">Montage Vidéo</option>
                      <option value="identite" className="bg-gray-900">Identité Visuelle</option>
                      <option value="infographie" className="bg-gray-900">Infographie</option>
                      <option value="social" className="bg-gray-900">Social Media</option>
                      <option value="autre" className="bg-gray-900">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-white/80 text-sm font-medium mb-2">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors backdrop-blur-xl"
                    >
                      <option value="" className="bg-gray-900">Sélectionner</option>
                      <option value="< 1k" className="bg-gray-900">Moins de 1k€</option>
                      <option value="1k-3k" className="bg-gray-900">1k€ - 3k€</option>
                      <option value="3k-5k" className="bg-gray-900">3k€ - 5k€</option>
                      <option value="> 5k" className="bg-gray-900">Plus de 5k€</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors backdrop-blur-xl resize-none"
                    placeholder="Parlez-moi de votre projet, vos objectifs, votre timeline..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 text-white font-medium hover:bg-white/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </motion.button>
              </form>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}