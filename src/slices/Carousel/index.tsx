import { FC } from "react";
import { Content } from "@prismicio/client";
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
  return (
      <CarouselLayout
          heading={slice.primary.heading ?? undefined}
          bgColour={(slice.primary.background_colour as any)?.data?.colour_hexcode}
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
