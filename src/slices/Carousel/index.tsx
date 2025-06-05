import { FC } from "react";
import {Content, isFilled} from "@prismicio/client";
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
    const bgColour =
        typeof slice.primary.background_colour === 'object' &&
        slice.primary.background_colour !== null &&
        'data' in slice.primary.background_colour
            ? (slice.primary.background_colour as { data: { colour_hexcode?: string } }).data.colour_hexcode
            : undefined;

    return (
      <CarouselLayout
          heading={slice.primary.heading ?? undefined}
          bgColour={bgColour}
      >
        {slice.primary.slide?.map((item, index) => (
            <SlideLayout
                key={index}
                quote_title={item.quote_title ?? ''}
                quote={isFilled.richText(item.quote) && <PrismicRichText field={item.quote} />}
                quotee={item.quotee ?? ''}
            />
        ))}
      </CarouselLayout>
  );
};

export default Carousel;
