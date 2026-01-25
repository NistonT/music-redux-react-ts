import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionProvider } from "./providers/MotionProvider";
import { RouterProvider } from "./providers/RouterProvider";
import { StoreProvider } from "./providers/StoreProvider";
import { Router } from "./router";

createRoot(document.getElementById("root")!).render(
  <MotionProvider>
    <RouterProvider>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </RouterProvider>
  </MotionProvider>,
);
