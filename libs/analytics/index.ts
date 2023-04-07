import { EventType } from './types';

export function setGlobalTrackerProperties() {
  if (typeof window.gtag !== 'undefined') {
    // window.gtag('set', 'user_properties', properties);
    window.gtag('js', new Date());
    window.gtag('config', 'G-CT02BVNW7G', {
      user_unique_id: 'test2',
      user_properties: {
        user_unique_id: 'test1',
      },
    });
  }
}

export function trackEvent(event: EventType) {
  if (typeof window.gtag !== 'undefined') {
    const { name, ...properties } = event;
    window.gtag('event', name, properties);
  }
}
