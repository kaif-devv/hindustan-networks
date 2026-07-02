import { Helmet } from "react-helmet-async";
import { Industries } from "@/components/industries/Industries";

export function IndustriesPage() {
  return (
    <>
      <Helmet>
        <title>Sectors | Hindustan Networks</title>
        <meta
          name="description"
          content="See examples of sectors where Hindustan Networks has delivered network, security, surveillance, and communication infrastructure, with solutions adaptable to many environments."
        />
      </Helmet>
      <Industries />
    </>
  );
}
