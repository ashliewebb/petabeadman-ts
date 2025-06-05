import React, { FC } from "react";
import { Text } from "@/components/Text/Text"
import {Content, isFilled} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock: FC<TextBlockProps> = ({ slice }) => {
  return (
    <Text copy={isFilled.richText(slice.primary.text) && <PrismicRichText field={slice.primary.text} />}
    ></Text>
  );
};

export default TextBlock;
