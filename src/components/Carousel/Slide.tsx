import React from 'react';
import styles from './Slide.module.scss';

type SlideProps = {
    quote_title: string;
    quote: string;
    quotee: string;
}

export const Slide = ({quote_title, quote, quotee}: SlideProps) => {
    return (
        <div className={styles.slide}>
            <div className={styles.quote}>
                {quote_title && <h3>{quote_title}</h3>}
                {quote}
            </div>
            <cite className={styles.quotee}>{quotee}</cite>
        </div>
    )
}
