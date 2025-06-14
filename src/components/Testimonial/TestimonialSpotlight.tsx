import React from 'react';
import Link from 'next/link';
import styles from "@/components/Testimonial/Testimonial.module.scss";

type TestimonialProps = {
    bgColour?: string;
    heading?: string;
    children: React.ReactNode;
}

export const TestimonialSpotlight = ({heading, children, bgColour}: TestimonialProps) => {
    return (
        <div className={`section ${styles.testimonialSpotlight}`} style={{ backgroundColor: bgColour }}>
            <div className={`sectionInner`}>
                {heading && <h2 className={`heading heading2`}>{heading}</h2>}
                {children}
                <Link href="/testimonials" className={styles.testimonialLink}>View more testimonials</Link>
            </div>
        </div>
    )
}
