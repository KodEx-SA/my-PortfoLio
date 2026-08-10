import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@/assets/css/index.css";
import "@/assets/css/tomorrow.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <App />
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
);
