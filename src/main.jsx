import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import UserProvider from "./context/UserContext";
import "./index.css";
import App from "./App.jsx";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
