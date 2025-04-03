'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEmblaAutoplay } from './useEmblaAutoplay';
import { useEmblaControls } from './useEmblaControls';
import '@/styles/globals.css';
import styles from './Carousel.module.scss';

type CarouselProps = {
    heading?: string;
    bgColour?: string;
    children: React.ReactNode;
    showControls?: boolean;
    loop?: boolean;
    pauseOnHover?: boolean;
    pauseOnInteraction?: boolean;
};

export const Carousel = ({
                             heading,
                             bgColour,
                             children,
                             showControls = true,
                             loop = true,
                         }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop });


    const { scrollPrev, scrollNext } = useEmblaControls(emblaApi);

    return (
        <div className={`section`} style={{ backgroundColor: bgColour }}>
            <div className={`sectionInner`}>
                {heading && <h2 className={`heading heading2`}>{heading}</h2>}
            </div>
            <div className={`${styles.embla}`}>
                <div className={styles.emblaViewport} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        {React.Children.map(children, (child, index) => (
                            <div className={styles.emblaSlide} key={index}>
                                {child}
                            </div>
                        ))}
                    </div>
                </div>

                {showControls && (
                    <div className={styles.controls}>
                        <button onClick={scrollPrev} className={`${styles.arrow} ${styles.arrowPrev}`}>
                            Previous
                        </button>
                        <button onClick={scrollNext} className={`${styles.arrow} ${styles.arrowNext}`}>
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
