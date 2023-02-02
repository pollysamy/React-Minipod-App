import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./components/stateful/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// Rendering the React App into the HTML DOM Element "root"
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
