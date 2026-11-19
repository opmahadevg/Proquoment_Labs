import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import posthog from "posthog-js";
import App from "./App";
import "./index.css";

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_POSTHOG_HOST;

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: posthogHost || "https://us.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: true,
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
  <>
    <App />
    <Analytics />
  </>
);
