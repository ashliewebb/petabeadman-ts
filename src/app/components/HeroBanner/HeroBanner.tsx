import React from 'react';
import stylesGlobal from '@/app/page.module.scss';
import styles from './HeroBanner.module.scss';
import Link from "next/link";

type HeroBannerProps = {
    title: string;
    description: string;
    ctaLink: string;
    ctaLabel: string;
    ctaLink2: string;
    ctaLabel2: string;
}

export const HeroBanner = ({title, description, ctaLink, ctaLabel, ctaLink2, ctaLabel2}: HeroBannerProps) => {
    return (
        <div className={styles.heroBanner}>
            <div className={styles.heroBannerOverlay}>
                <div className={styles.heroBannerContent}>
                    <h1 className={`${stylesGlobal.heading} ${stylesGlobal.heading1}`}>{title}</h1>
                    <p>{description}</p>
                    <div className={styles.heroBannerCTAs}>
                        <Link className={stylesGlobal.buttonSecondary} href={ctaLink}>{ctaLabel}</Link>
                        <Link className={stylesGlobal.buttonPrimary} href={ctaLink2}>{ctaLabel2}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}