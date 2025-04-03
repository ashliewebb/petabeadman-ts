import React from 'react';
import '@/styles/globals.css';
import styles from './Text.module.scss';

type TextProps = {
    copy: React.ReactNode;
    bgColour?: string;
}

export const Text = ({copy, bgColour}: TextProps) => {
    return (
        <div className={`section`} style={{ backgroundColor: bgColour }}>
            <div className={`sectionInner`}>
                <div className={styles.text}>{copy}</div>
            </div>
        </div>
    )
}
