import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";

const url = new URL(window.location.href);
const redirectedPath = url.searchParams.get("path");

if (redirectedPath) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const redirectedSearch = url.searchParams.get("search");
  const redirectedHash = url.searchParams.get("hash");
  const nextUrl = `${base}${redirectedPath}${redirectedSearch ? `?${redirectedSearch}` : ""}${redirectedHash ? `#${redirectedHash}` : ""}`;
  window.history.replaceState({}, "", nextUrl);
}

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
