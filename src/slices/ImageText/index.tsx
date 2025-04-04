import React, {FC} from "react";
import { ImageText as ImageTextLayout } from '@/components/ImageText/ImageText'
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import {getLinkedField} from "@/lib/prismic/utils";

/**
 * Props for `ImageText`.
 */
export type ImageTextProps = SliceComponentProps<Content.ImageTextSlice>;

/**
 * Component for "ImageText" Slices.
 */
const ImageText: FC<ImageTextProps> = ({ slice }) => {
        return (
            <ImageTextLayout
                image={slice.primary.image.url ?? ''}
                imageAlt={slice.primary.image.alt ?? ''}
                imageDirection={slice.variation === 'imageOnRight' ? 'Right' : 'Left'}
                imageRounded={slice.primary.round_image}
                copy={<PrismicRichText field={slice.primary.copy} />}
                bgColour={getLinkedField(slice.primary.background_colour, 'colour_hexcode')}
            ></ImageTextLayout>
        )
}

export default ImageText;
