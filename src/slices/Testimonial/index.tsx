import React, { FC } from "react";
import {Content, isFilled} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import { TestimonialSingle as TestimonialSingleLayout } from "@/components/Testimonial/TestimonialSingle";
import { Testimonial as TestimonialLayout } from "@/components/Testimonial/Testimonial";

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial: FC<TestimonialProps> = ({ slice }) => {
  const bgColour =
      typeof slice.primary.background_colour === 'object' &&
      slice.primary.background_colour !== null &&
      'data' in slice.primary.background_colour
          ? (slice.primary.background_colour as { data: { colour_hexcode?: string } }).data.colour_hexcode
          : undefined;

  return (
    <TestimonialSingleLayout
        bgColour={bgColour}
        heading={slice.primary.title ?? ''}
    >
        {(() => {
            const doc = slice.primary.testimonial;

            if (!doc || !('data' in doc)) return null;

            const {
                title,
                testimonial,
                author,
                source,
            } = doc.data as Content.TestimonialDocument['data'];

            return (
                <TestimonialLayout
                    key={doc.id}
                    quote_title={title ?? ''}
                    quote={isFilled.richText(testimonial) && <PrismicRichText field={testimonial} />}
                    quotee={author ?? ''}
                    source={isFilled.link(source) ? (source.url as string) : '#'}
                />
            );
        })()}
    </TestimonialSingleLayout>
  );
};

export default Testimonial;
