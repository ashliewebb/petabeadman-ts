import React from 'react';
import styles from './Testimonial.module.scss';

type TestimonialProps = {
    quote_title: string;
    quote: React.ReactNode;
    quotee: string;
    source?: string;
    source_name?: string;
}

export const Testimonial = ({quote_title, quote, quotee, source, source_name}: TestimonialProps) => {
    return (
        <div className={styles.testimonial}>
            {quote_title && <h3 className={styles.testimonialTitle}>{quote_title}</h3>}
            {quote && <div className={styles.testimonialQuote}>{quote}</div>}
            {quotee && <cite className={styles.testimonialQuotee}>{quotee}</cite>}
            {source && <a href={source} target="_blank" className={styles.testimonialSource}>{source_name}</a>}
        </div>
    )
}
