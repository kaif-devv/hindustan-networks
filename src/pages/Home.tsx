import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { Hero } from "@/components/hero/Hero";

const VisualLab = lazy(() => import("@/visual-lab/VisualLab"));

export function Home() {
  const [searchParams] = useSearchParams();
  const concept = searchParams.get("concept");
  const showVisualLab = concept === "a" || concept === "a1" || concept === "a2" || concept === "b" || concept === "c";

  return (
    <>
      <Helmet>
        <title>
          Hindustan Networks - Comprehensive Network & Communication Solutions
        </title>
        <meta
          name="description"
          content="Hindustan Networks delivers end-to-end network and communication infrastructure solutions including LAN, fiber, CCTV, WiFi, servers, cybersecurity and more."
        />
        <meta
          name="keywords"
          content="network solutions, structured cabling, CCTV, WiFi, fiber optic, cybersecurity, Internet leased line"
        />
        <meta property="og:title" content="Hindustan Networks" />
        <meta
          property="og:description"
          content="Powering businesses with reliable, secure and scalable network infrastructure."
        />
        <link rel="canonical" href="https://hindustannetworks.com" />
      </Helmet>

      <main>
        {showVisualLab ? (
          <Suspense fallback={<div style={{ minHeight: 680 }} aria-busy="true" />}>
            <VisualLab concept={concept} />
          </Suspense>
        ) : (
          <Hero />
        )}
      </main>
    </>
  );
}
