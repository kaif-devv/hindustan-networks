import { Helmet } from "react-helmet-async";
import { Services } from "@/components/services/Services";
import { MaintenanceSupport } from "@/components/services/MaintenanceSupport";

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Hindustan Networks</title>
        <meta
          name="description"
          content="Explore networking, ISP solutions, CCTV, intercom, video door phones, automation, fiber, servers, cloud integration and annual maintenance support."
        />
      </Helmet>
      <Services />
      <MaintenanceSupport />
    </>
  );
}
