'use client';

import { useEffect } from 'react';

export default function ClickTracker() {
  useEffect(() => {
    // Vérifier si l'URL contient le paramètre ref=email-signature
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    
    console.log('[ClickTracker] URL params:', window.location.search);
    console.log('[ClickTracker] ref:', ref);
    
    if (ref === 'email-signature') {
      console.log('[ClickTracker] Tracking click...');
      // Enregistrer le clic
      fetch('/api/track-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source: 'email-signature' }),
      })
      .then(response => {
        console.log('[ClickTracker] Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('[ClickTracker] Response data:', data);
      })
      .catch(error => {
        console.error('[ClickTracker] Erreur lors du tracking:', error);
      });
      
      // Nettoyer l'URL pour éviter de tracker plusieurs fois
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  return null;
}
