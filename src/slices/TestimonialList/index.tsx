import { FC } from "react";
import {Content, isFilled} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import { Testimonial as TestimonialLayout } from "@/components/Testimonial/Testimonial";
import {Grid} from "@/components/Grid/Grid";

/**
 * Props for `TestimonialList`.
 */
export type TestimonialListProps =
  SliceComponentProps<Content.TestimonialListSlice>;

/**
 * Component for "TestimonialList" Slices.
 */
const TestimonialList: FC<TestimonialListProps> = ({ slice }) => {
  return (
      <Grid
          heading={slice.primary.heading ?? undefined}
          copy={isFilled.richText(slice.primary.description) && <PrismicRichText field={slice.primary.description} />}
          gridCountWide={slice.primary.grid_columns_desktop ?? '3'}
          gridCountMed={slice.primary.grid_columns_tablet  ?? '2'}
      >
        {slice.primary.testimonials?.map((item) => {
            const doc = item.testimonial;

            if (!doc || !('data' in doc)) return null;

            const {
                title,
                testimonial,
                author,
                source,
            } = doc.data as Content.TestimonialDocument['data'];

            const sourceLabel = isFilled.link(source) && typeof (source as any).name === 'string'
                ? (source as any).name
                : 'View on RateMyAgent.com.au';

            return (
                <TestimonialLayout
                    key={doc.id}
                    quote_title={title ?? ''}
                    quote={isFilled.richText(testimonial) && <PrismicRichText field={testimonial} />}
                    quotee={author ?? ''}
                    source={isFilled.link(source) ? (source.url as string) : '#'}
                    source_name={sourceLabel}
                />
            );
        })}
      </Grid>
  );
};

export default TestimonialList;
