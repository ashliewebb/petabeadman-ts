import React from 'react';
import '@/styles/globals.css';
import styles from './CallToAction.module.scss';
import Link from "next/link";

type CallToActionProps = {
    subtext: string;
    bgColour?: string;
    ctaLink: string;
    ctaLabel: string;
}

export const CallToAction = ({subtext, bgColour, ctaLink, ctaLabel}: CallToActionProps) => {
    return (
        <div className={`section${bgColour ? ` sectionBg${bgColour}` : ''}`}>
            <div className={`sectionInner`}>
                <div className={styles.callToActionButtons}>
                    <Link className={`buttonPrimary`} href={ctaLink}>{ctaLabel}</Link>
                </div>
                <p className={styles.callToActionSubtext}>{subtext}</p>
            </div>
        </div>
    )
}
