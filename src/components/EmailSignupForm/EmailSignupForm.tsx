'use client';

import React, { useEffect } from 'react';
import '@/styles/globals.css';
import styles from './EmailSignupForm.module.scss';

type EmailSignupFormProps = {
    heading: string;
    description?: string;
    bgColour?: string;
    formId: string; // e.g., "klaviyo-form-XYZ123"
};

export const EmailSignupForm = ({ heading, description, bgColour, formId }: EmailSignupFormProps) => {
    useEffect(() => {
        const existingScript = document.querySelector('script[src*="klaviyo_subscribe.js"]');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://www.klaviyo.com/media/js/public/klaviyo_subscribe.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className={`section`} style={{ backgroundColor: bgColour }}>
            <div className={`sectionInner`}>
                {heading && <h2 className={`heading heading2`}>{heading}</h2>}
                {description && <p className={styles.copy}>{description}</p>}

                <div className={styles.klaviyoEmbed}>
                    <div className={formId} />
                </div>
            </div>
        </div>
    );
};
