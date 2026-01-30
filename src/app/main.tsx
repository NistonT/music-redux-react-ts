import { createRoot } from "react-dom/client";
import "./index.css";
import { LeftBarLayout } from "./layout/LeftBarLayout";
import { MotionProvider } from "./providers/MotionProvider";
import { RouterProvider } from "./providers/RouterProvider";
import { StoreProvider } from "./providers/StoreProvider";
import { Router } from "./router";

createRoot(document.getElementById("root")!).render(
  // Providers
  <MotionProvider>
    <RouterProvider>
      <StoreProvider>
        {/* Layouts */}
        <LeftBarLayout>
          {/* Router */}
          <Router />
        </LeftBarLayout>
      </StoreProvider>
    </RouterProvider>
  </MotionProvider>,
);
