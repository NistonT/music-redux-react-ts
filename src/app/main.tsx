import { PlayerMusic } from "@/widgets/PlayerMusic";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NavigationLayout } from "./layout";
import { MotionProvider, ReduxProvider, RouterProvider } from "./providers";
import { Router } from "./routers";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <MotionProvider>
      <RouterProvider>
        <NavigationLayout>
          <PlayerMusic>
            <Router />
          </PlayerMusic>
        </NavigationLayout>
      </RouterProvider>
    </MotionProvider>
  </ReduxProvider>,
);
