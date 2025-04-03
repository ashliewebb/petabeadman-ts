import React from 'react';
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    )
}
import styles from '@/app/components/Testimonials/Testimonials.module.scss';
import stylesGlobal from "@/app/page.module.scss";

type TestimonialsProps = {
    heading?: string;
    bg_alt?: boolean;
    children: React.ReactNode;
}

export const Testimonials = ({heading, bg_alt, children}: TestimonialsProps) => {
    return (
        <div className={`${stylesGlobal.section} ${bg_alt ? stylesGlobal.sectionBgHighlight : ''}`}>
            <div className={`${stylesGlobal.sectionInner} ${styles.testimonials}`}>
                <h2 className={`${stylesGlobal.heading} ${stylesGlobal.heading2}`}>{heading}</h2>
                <div className={styles.testimonialsContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}
