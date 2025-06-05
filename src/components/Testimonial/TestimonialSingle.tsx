import React from 'react';
import styles from "@/components/Testimonial/Testimonial.module.scss";

type TestimonialProps = {
    bgColour?: string;
    heading?: string;
    children: React.ReactNode;
}

export const TestimonialSingle = ({heading, children, bgColour}: TestimonialProps) => {
    return (
        <div className={`section ${styles.testimonialSingle}`} style={{ backgroundColor: bgColour }}>
            <div className={`sectionInner`}>
                {heading && <h2 className={`heading heading2`}>{heading}</h2>}
                {children}
            </div>
        </div>
    )
}
