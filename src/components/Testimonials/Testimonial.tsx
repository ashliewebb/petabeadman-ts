import React from 'react';
import styles from '@/app/components/Testimonials/Testimonials.module.scss';

type TestimonialProps = {
    quote: string;
    quotee: string;
}

export const Testimonial = ({quote, quotee}: TestimonialProps) => {
    return (
        <div className={styles.testimonial}>
            <q className={styles.quote} dangerouslySetInnerHTML={{ __html: quote }}></q>
            <cite className={styles.quotee}>{quotee}</cite>
        </div>
    )
}
