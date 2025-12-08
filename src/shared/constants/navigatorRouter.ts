import { House } from "lucide-react";
import { ComponentType } from "react";

interface INavigatorRouter {
  id: number;
  text: string;
  href: string;
  icon: ComponentType;
}

export const navigatorRouter: INavigatorRouter[] = [
  {
    id: 0,
    text: "Home",
    href: "/",
    icon: House,
  },
];
