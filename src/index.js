import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HouseContextProvider } from "./components/store/houses-context";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <HouseContextProvider>
        <App />
      </HouseContextProvider>
    </BrowserRouter>
  </StrictMode>
);
