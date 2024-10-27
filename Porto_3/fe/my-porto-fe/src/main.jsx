import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes";
import "./styles/style.scss";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
