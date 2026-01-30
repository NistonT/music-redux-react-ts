import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router";

type Props = {
  children: ReactNode;
  href: string;
  icon: LucideIcon;
};

export const LinkNavigator = ({ children, href, icon: Icon }: Props) => {
  return (
    <Link to={href}>
      <div className="flex text-white gap-5 font-mono text-2xl items-center hover:bg-bg-active py-1.5 px-3 rounded-xl">
        <Icon className="w-8 h-8" />
        <div>{children}</div>
      </div>
    </Link>
  );
};
