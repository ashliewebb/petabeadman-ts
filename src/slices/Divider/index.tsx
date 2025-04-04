import React, { FC } from "react";
import '@/styles/globals.css';
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Divider`.
 */
export type DividerProps = SliceComponentProps<Content.DividerSlice>;

/**
 * Component for "Divider" Slices.
 */
const Divider: FC<DividerProps> = ({}) => {
  return (
      <hr className={`divider`}></hr>
  );
};

export default Divider;
