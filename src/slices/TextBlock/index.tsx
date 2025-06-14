import React, { FC } from "react";
import { Text } from "@/components/Text/Text"
import {Content, isFilled} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import { getPaddingClass } from "@/lib/prismic/getPaddingClass";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock: FC<TextBlockProps> = ({ slice }) => {
  const paddingClass = getPaddingClass(slice.primary.slice_padding);

  return (
    <Text copy={isFilled.richText(slice.primary.text) && <PrismicRichText field={slice.primary.text} />}
          paddingClass={paddingClass}
    ></Text>
  );
};

export default TextBlock;
