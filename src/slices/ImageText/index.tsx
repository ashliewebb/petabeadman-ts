import React, {FC} from "react";
import { ImageText as ImageTextLayout } from '@/components/ImageText/ImageText'
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `ImageText`.
 */
export type ImageTextProps = SliceComponentProps<Content.ImageTextSlice>;

/**
 * Component for "ImageText" Slices.
 */
const ImageText: FC<ImageTextProps> = ({ slice }) => {
    const bgColour =
        (slice.primary.background_colour?.data as { colour_hexcode?: string })?.colour_hexcode ?? undefined;

    return (
            <ImageTextLayout
                image={slice.primary.image.url ?? ''}
                imageAlt={slice.primary.image.alt ?? ''}
                imageDirection={slice.variation === 'imageOnRight' ? 'Right' : 'Left'}
                imageRounded={slice.primary.round_image}
                copy={<PrismicRichText field={slice.primary.copy} />}
                bgColour={bgColour}
            ></ImageTextLayout>
        )
}

export default ImageText;
