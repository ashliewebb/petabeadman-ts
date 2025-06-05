import { FC } from "react";
import { HeroBanner as HeroBannerLayout } from '@/components/HeroBanner/HeroBanner'
import {Content, isFilled} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import { asLink } from '@prismicio/helpers';

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner: FC<HeroBannerProps> = ({ slice }) => {
  const links = Array.isArray(slice.primary.call_to_action)
      ? slice.primary.call_to_action.map((link) => ({
        href: asLink(link) ?? '#',
        label: link.text || 'Learn more',
        variant: link.variant || 'Primary',
      }))
      : [];

  return (
    <HeroBannerLayout title={slice.primary.heading ?? ''}
                description={isFilled.richText(slice.primary.description) && <PrismicRichText field={slice.primary.description} />}
                backgroundImage={slice.primary.background_image.url ?? ''}
                overlayColour={slice.primary.overlay_colour ?? ''}
                overlayOpacity={slice.primary.overlay_opacity ?? ''}
                links={links}
    ></HeroBannerLayout>
  );
};

export default HeroBanner;
