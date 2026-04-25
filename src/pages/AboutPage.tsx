import { Helmet } from "react-helmet-async";
import { About } from "@/components/about/About";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Hindustan Networks</title>
        <meta
          name="description"
          content="Learn about Hindustan Networks, our mission, and our expertise in enterprise network and communication infrastructure solutions."
        />
      </Helmet>
      <About />
    </>
  );
}
