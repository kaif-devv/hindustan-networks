import { Helmet } from "react-helmet-async";
import { Contact } from "@/components/contact/Contact";
import { InfrastructureFaq } from "@/components/contact/InfrastructureFaq";

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Hindustan Networks</title>
        <meta
          name="description"
          content="Request a consultation for networking, security, communication, residential automation or AMC support. Find answers to common infrastructure questions."
        />
      </Helmet>
      <Contact />
      <InfrastructureFaq />
    </>
  );
}
