import React from 'react';
import '@/styles/globals.css';
import styles from './CallToAction.module.scss';

type CallToActionProps = {
    subtext?: React.ReactNode;
    bgColour?: string;
    paddingClass?: string;
    children: React.ReactNode;
}

export const CallToAction = ({subtext, bgColour, paddingClass, children}: CallToActionProps) => {
    return (
        <div className={`${paddingClass}${bgColour ? ` sectionBg${bgColour}` : ''}`}>
            <div className={`sectionInner`}>
                {children}
                <p className={styles.callToActionSubtext}>{subtext}</p>
            </div>
        </div>
    )
}
