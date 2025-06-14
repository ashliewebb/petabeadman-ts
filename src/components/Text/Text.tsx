import React from 'react';
import '@/styles/globals.css';
import styles from './Text.module.scss';

type TextProps = {
    copy: React.ReactNode;
    bgColour?: string;
    paddingClass?: string;
}

export const Text = ({copy, bgColour, paddingClass}: TextProps) => {
    return (
        <div className={paddingClass} style={{ backgroundColor: bgColour }}>
            <div className={`sectionInner`}>
                <div className={styles.text}>{copy}</div>
            </div>
        </div>
    )
}
