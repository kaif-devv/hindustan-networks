import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/hero/Hero";

export function Home() {
  return (
    <>
      <Helmet>
        <title>
          Hindustan Networks – Comprehensive Network & Communication Solutions
        </title>
        <meta
          name="description"
          content="Hindustan Networks  delivers end-to-end network and communication infrastructure solutions including LAN, fiber, CCTV, WiFi, servers and more in Shadnagar, Telangana."
        />
        <meta
          name="keywords"
          content="network solutions, structured cabling, CCTV, WiFi, fiber optic, Shadnagar, Telangana, Internet leased line"
        />
        <meta property="og:title" content="Hindustan Networks " />
        <meta
          property="og:description"
          content="Powering businesses with reliable, secure and scalable network infrastructure."
        />
        <link rel="canonical" href="https://hindustannetworks.com" />
      </Helmet>

      <main>
        <Hero />
      </main>
    </>
  );
}
