import { House } from "lucide-react";

export const navigatorRouter = [
  {
    id: 0,
    text: "Home",
    href: "/",
    icon: House,
  },
];

export type TNavigatorRouter = (typeof navigatorRouter)[number];
