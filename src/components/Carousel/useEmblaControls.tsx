import type { UseEmblaCarouselType } from 'embla-carousel-react';

type EmblaCarouselApi = UseEmblaCarouselType[1];

export const useEmblaControls = (api: EmblaCarouselApi | undefined) => {
    const scrollPrev = () => api?.scrollPrev();
    const scrollNext = () => api?.scrollNext();
    return { scrollPrev, scrollNext };
};
