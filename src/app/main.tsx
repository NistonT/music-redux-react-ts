import { createRoot } from "react-dom/client";
import "./index.css";
import { LeftBarLayout, MusicPlayerLayout } from "./layout";
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
        <MusicPlayerLayout>
          <LeftBarLayout>
            {/* Router */}
            <Router />
          </LeftBarLayout>
        </MusicPlayerLayout>
      </StoreProvider>
    </RouterProvider>
  </MotionProvider>,
);
