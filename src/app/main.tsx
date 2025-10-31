import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionProvider } from "./providers/MotionProvider";
import { ReduxProvider } from "./providers/ReduxProvider";
import { RouterProvider } from "./providers/RouterProvider";
import { Router } from "./routers";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <MotionProvider>
      <RouterProvider>
        <Router />
      </RouterProvider>
    </MotionProvider>
  </ReduxProvider>,
);
