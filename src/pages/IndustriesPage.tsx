import { Helmet } from "react-helmet-async";
import { Industries } from "@/components/industries/Industries";

export function IndustriesPage() {
  return (
    <>
      <Helmet>
        <title>Industries | Hindustan Networks</title>
        <meta
          name="description"
          content="See how Hindustan Networks delivers tailored networking solutions for corporate, education, healthcare, government, and residential sectors."
        />
      </Helmet>
      <Industries />
    </>
  );
}
