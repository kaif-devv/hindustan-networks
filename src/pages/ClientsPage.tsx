import { Helmet } from "react-helmet-async";
import { Clients } from "@/components/clients/Clients";

export function ClientsPage() {
  return (
    <>
      <Helmet>
        <title>Clients | Hindustan Networks</title>
        <meta
          name="description"
          content="Discover organizations that trust Hindustan Networks for secure, reliable, and scalable network infrastructure delivery."
        />
      </Helmet>
      <Clients />
    </>
  );
}
