'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formCreated = useRef(false);

  useEffect(() => {
    if (formCreated.current) return;

    const createForm = () => {
      if (window.hbspt && containerRef.current) {
        formCreated.current = true;
        window.hbspt.forms.create({
          portalId: '20396287',
          formId: 'c4228166-c0cf-4215-b4d6-f345254e2225',
          region: 'na1',
          target: '#hubspot-form-container',
        });
      }
    };

    if (window.hbspt) {
      createForm();
      return;
    }

    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      setTimeout(createForm, 100);
    };
    document.head.appendChild(script);

    return () => {
      formCreated.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hubspot-form-container"
      className="min-h-[300px]"
    />
  );
}
