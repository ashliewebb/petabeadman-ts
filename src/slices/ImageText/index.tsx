import React, {FC} from "react";
import { ImageText as ImageTextLayout } from '@/components/ImageText/ImageText'
import {Content, isFilledContentRelationship} from "@prismicio/client";
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
    const bgColour = isFilledContentRelationship(slice.primary.background_colour)
        ? (getLinkedField(slice.primary.background_colour, 'colour_hexcode') as string | undefined)
        : undefined;

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
