import { Helmet } from "react-helmet-async";
import { Services } from "@/components/services/Services";

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Hindustan Networks</title>
        <meta
          name="description"
          content="Explore enterprise-grade networking services including leased lines, structured cabling, CCTV, WiFi, security, and IT infrastructure."
        />
      </Helmet>
      <Services />
    </>
  );
}
