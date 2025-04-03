import { useEffect, useState } from 'react';
import type { UseEmblaCarouselType } from 'embla-carousel-react';

type EmblaCarouselApi = UseEmblaCarouselType[1];

export const useEmblaDots = (api: EmblaCarouselApi | undefined) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => setSelectedIndex(api.selectedScrollSnap());

        api.on('select', onSelect);
        onSelect();
        setScrollSnaps(api.scrollSnapList());

        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    return { selectedIndex, scrollSnaps };
};
