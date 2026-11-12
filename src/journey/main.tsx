import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/archivo/standard.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./styles.css";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
