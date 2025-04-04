import { FC } from "react";
import { EmailSignupForm as EmailSignupFormLayout } from "@/components/EmailSignupForm/EmailSignupForm";
import {Content} from "@prismicio/client";
import { isFilledContentRelationship } from "@prismicio/helpers";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import {getLinkedField} from "@/lib/prismic/utils";

/**
 * Props for `EmailSignupForm`.
 */
export type EmailSignupFormProps =
  SliceComponentProps<Content.EmailSignupFormSlice>;

/**
 * Component for "EmailSignupForm" Slices.
 */
const EmailSignupForm: FC<EmailSignupFormProps> = ({ slice }) => {
  const bgColour = isFilledContentRelationship(slice.primary.background_colour)
      ? (getLinkedField(slice.primary.background_colour, 'colour_hexcode') as string | undefined)
      : undefined;

  return (
    <EmailSignupFormLayout
        formId={slice.primary.klaviyo_form_id ?? ''}
        heading={slice.primary.heading ?? undefined ?? ''}
        description={<PrismicRichText field={slice.primary.description}/>}
        bgColour={bgColour}
    ></EmailSignupFormLayout>
  );
};

export default EmailSignupForm;
