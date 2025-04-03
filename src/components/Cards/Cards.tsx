import React from 'react';
import '@/styles/globals.css';
import styles from './Cards.module.scss';

type CardsProps = {
    heading?: string;
    copy?: string;
    bgColour?: string;
    children: React.ReactNode;
}

export const Cards = ({heading, copy, bgColour, children}: CardsProps) => {
    return (
        <div className={`section ${styles.cards}`} style={{ backgroundColor: bgColour }}>
            {heading && <h2 className={`heading heading2`}>{heading}</h2>}
            {copy && (<p>{copy}</p>)}
            <div className={styles.cardsContent}>
                {children}
            </div>
        </div>
    )
}
