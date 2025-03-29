import React from 'react';
import stylesGlobal from '@/app/page.module.scss';
import styles from './CallToAction.module.scss';
import Link from "next/link";

type CallToActionProps = {
    subtext: string;
    bg_alt?: boolean;
    ctaLink: string;
    ctaLabel: string;
}

export const CallToAction = ({subtext, bg_alt, ctaLink, ctaLabel}: CallToActionProps) => {
    return (
        <div className={`${stylesGlobal.section} ${bg_alt ? stylesGlobal.sectionBgHighlight : stylesGlobal.sectionBgNone}`}>
            <div className={stylesGlobal.sectionInner}>
                <div className={styles.callToActionButtons}>
                    <Link className={stylesGlobal.buttonPrimary} href={ctaLink}>{ctaLabel}</Link>
                </div>
                <p className={styles.callToActionSubtext}>{subtext}</p>
            </div>
        </div>
    )
}
