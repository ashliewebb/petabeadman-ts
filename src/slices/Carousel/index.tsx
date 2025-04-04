import { FC } from "react";
import {Content} from "@prismicio/client";
import { isFilledContentRelationship } from "@prismicio/helpers";
import { getLinkedField } from '@/lib/prismic/utils';
import { Carousel as CarouselLayout } from "@/components/Carousel/Carousel";
import { Slide as SlideLayout } from "@/components/Carousel/Slide";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel: FC<CarouselProps> = ({ slice }) => {
    const bgColour = isFilledContentRelationship(slice.primary.background_colour)
        ? (getLinkedField(slice.primary.background_colour, 'colour_hexcode') as string | undefined)
        : undefined;

  return (
      <CarouselLayout
          heading={slice.primary.heading ?? undefined}
          bgColour={bgColour}
      >
        {slice.primary.slide?.map((item, index) => (
            <SlideLayout
                key={index}
                title={item.quote_title ?? ''}
                quote={<PrismicRichText field={item.quote} />}
                quotee={item.quotee ?? ''}
            />
        ))}
      </CarouselLayout>
  );
};

export default Carousel;
