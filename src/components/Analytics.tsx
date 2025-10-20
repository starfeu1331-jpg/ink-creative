'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Déclaration du type global pour gtag
declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

// Configuration Analytics
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-LXKM95N6VX';

// Fonction pour tracker les pages vues
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_location: url,
      page_title: title || document.title,
    });
  }
};

// Fonction pour tracker les événements personnalisés
export const trackEvent = (action: string, category: string, label?: string, value?: number, customData?: object) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...customData
    });
  }
};

// Événements business spécifiques
export const trackServiceView = (serviceType: 'montage-video' | 'identite-visuelle' | 'communication-influence') => {
  trackEvent('service_view', 'engagement', serviceType, undefined, {
    service_type: serviceType,
    user_journey_stage: 'discovery'
  });
};

export const trackContactIntent = (source: string, serviceType?: string) => {
  trackEvent('contact_intent', 'conversion', source, undefined, {
    contact_source: source,
    service_type: serviceType,
    user_journey_stage: 'consideration'
  });
};

export const trackProjectView = (projectCategory: string) => {
  trackEvent('project_view', 'engagement', projectCategory, undefined, {
    project_category: projectCategory,
    user_journey_stage: 'discovery'
  });
};

export const trackQuoteRequest = (serviceType: string) => {
  trackEvent('quote_request', 'conversion', serviceType, undefined, {
    service_type: serviceType,
    user_journey_stage: 'decision'
  });
};

export const trackTimelineInteraction = (action: 'drag' | 'click' | 'filter') => {
  trackEvent('timeline_interaction', 'engagement', action, undefined, {
    interaction_type: action,
    feature: 'project_timeline'
  });
};

// Hook pour tracker automatiquement les changements de page
export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Tracker la page vue
    trackPageView(window.location.href);
    
    // Tracker les vues de services spécifiques
    if (pathname === '/montage-video') {
      trackServiceView('montage-video');
    } else if (pathname === '/identite-visuelle') {
      trackServiceView('identite-visuelle');
    } else if (pathname === '/communication-influence') {
      trackServiceView('communication-influence');
    }
    
    // Tracker les pages importantes
    if (pathname === '/contact') {
      trackEvent('contact_page_view', 'navigation', 'direct');
    } else if (pathname === '/projets') {
      trackEvent('portfolio_view', 'engagement', 'projects_page');
    }
    
  }, [pathname]);
}

// Composant Analytics à inclure dans le layout
export default function Analytics() {
  useAnalytics();
  return null;
}