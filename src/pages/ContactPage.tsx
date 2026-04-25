import { Helmet } from "react-helmet-async";
import { Contact } from "@/components/contact/Contact";

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Hindustan Networks</title>
        <meta
          name="description"
          content="Contact Hindustan Networks for enterprise LAN, WiFi, fiber, CCTV, access control, and infrastructure solutions in Telangana and beyond."
        />
      </Helmet>
      <Contact />
    </>
  );
}
