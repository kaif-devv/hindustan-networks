import { Helmet } from "react-helmet-async";
import { About } from "@/components/about/About";
import { DeliveryApproach } from "@/components/about/DeliveryApproach";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Hindustan Networks</title>
        <meta
          name="description"
          content="Learn how Hindustan Networks plans, installs, integrates and maintains technology infrastructure for enterprises, institutions and residential projects."
        />
      </Helmet>
      <About />
      <DeliveryApproach />
    </>
  );
}
