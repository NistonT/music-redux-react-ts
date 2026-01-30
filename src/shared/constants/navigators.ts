import { House, Library, LucideIcon, Search } from "lucide-react";
import { pageRouter } from "./page-router";

interface INavigator {
  id: number;
  name: string;
  href: string;
  icon: LucideIcon;
}

export const navigators: INavigator[] = [
  { id: 0, name: "Home", href: pageRouter.Home, icon: House },
  { id: 1, name: "Search", href: pageRouter.Search, icon: Search },
  { id: 2, name: "Library", href: pageRouter.Library, icon: Library },
];
