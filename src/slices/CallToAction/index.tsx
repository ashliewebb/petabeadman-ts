import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { getPaddingClass } from "@/lib/prismic/getPaddingClass";
import { CallToAction as CallToActionLayout } from "@/components/CallToAction/CallToAction"

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  const bgColour =
      typeof slice.primary.background_colour === 'object' &&
      slice.primary.background_colour !== null &&
      'data' in slice.primary.background_colour
          ? (slice.primary.background_colour as { data: { colour_hexcode?: string } }).data.colour_hexcode
          : undefined;
  const paddingClass = getPaddingClass(slice.primary.slice_padding);

  return (
    <CallToActionLayout
        subtext={slice.primary.subtext}
        bgColour={bgColour}
        paddingClass={paddingClass}>
        <div className='buttonGroup'>
            {slice.primary.button.map((link) => (
                <PrismicNextLink key={link?.text} field={link} className={`button${link?.variant}`} />
            ))}
        </div>
    </CallToActionLayout>
  );
};

export default CallToAction;
