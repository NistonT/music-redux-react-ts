import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionProvider, ReduxProvider, RouterProvider } from "./providers";
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
