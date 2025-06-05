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
            {quote_title && <h3>{quote_title}</h3>}
            {quote}
            {quotee && <cite className={styles.quotee}>{quotee}</cite>}
            {source && <a href={source} target="_blank">{source_name}</a>}
        </div>
    )
}
