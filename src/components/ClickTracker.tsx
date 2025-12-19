'use client';

import { useEffect } from 'react';

export default function ClickTracker() {
  useEffect(() => {
    // Vérifier si l'URL contient le paramètre ref=email-signature
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    
    if (ref === 'email-signature') {
      // Enregistrer le clic
      fetch('/api/track-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source: 'email-signature' }),
      }).catch(error => {
        console.error('Erreur lors du tracking:', error);
      });
      
      // Nettoyer l'URL pour éviter de tracker plusieurs fois
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  return null;
}
