import { FC } from "react";
import { EmailSignupForm as EmailSignupFormLayout } from "@/components/EmailSignupForm/EmailSignupForm";
import { Content } from "@prismicio/client";
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
  return (
    <EmailSignupFormLayout
        formId={slice.primary.klaviyo_form_id ?? ''}
        heading={slice.primary.heading ?? undefined ?? ''}
        description={<PrismicRichText field={slice.primary.description}/>}
        bgColour={getLinkedField(slice.primary.background_colour, 'colour_hexcode')}
    ></EmailSignupFormLayout>
  );
};

export default EmailSignupForm;
