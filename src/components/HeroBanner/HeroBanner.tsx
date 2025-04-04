import React from 'react';
import '@/styles/globals.css';
import styles from './HeroBanner.module.scss';

type CTA = {
    href: string;
    label: string;
    target?: string;
    variant? : string;

};

type HeroBannerProps = {
    title: string;
    description: React.ReactNode;
    links: CTA[];
    backgroundImage: string;
    overlayColour: string;
    overlayOpacity: string;
    hashid: string;
}

export const HeroBanner = ({title, description, links = [], backgroundImage, overlayColour, overlayOpacity, hashid}: HeroBannerProps) => {
    return (
        <div id={hashid} className={styles.heroBanner} style={{ backgroundImage: `url(${backgroundImage}`}}>
            <div className={styles.heroBannerOverlay} style={{backgroundColor: `rgba(from ${overlayColour} r g b / ${overlayOpacity})`}}>
                <div className={styles.heroBannerContent}>
                    <h1 className={`heading heading1`}>{title}</h1>
                    {description}
                    <div className={styles.heroBannerCTAs}>
                        {Array.isArray(links) && links.length > 0 && links.map((link, i) => (
                            <a key={i} href={link.href} target={link.target} className={`button${link.variant}`}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
