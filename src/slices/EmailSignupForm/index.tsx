import { FC } from "react";
import { EmailSignupForm as EmailSignupFormLayout } from "@/components/EmailSignupForm/EmailSignupForm";
import {Content} from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `EmailSignupForm`.
 */
export type EmailSignupFormProps =
  SliceComponentProps<Content.EmailSignupFormSlice>;

/**
 * Component for "EmailSignupForm" Slices.
 */
const EmailSignupForm: FC<EmailSignupFormProps> = ({ slice }) => {
  const bgColour =
      (slice.primary.background_colour?.data as { colour_hexcode?: string })?.colour_hexcode ?? undefined;

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
