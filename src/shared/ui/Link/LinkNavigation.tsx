import { ComponentType } from "react";
import { Link } from "react-router";

type Props = {
  id: number;
  href: string;
  icon: ComponentType;
  text: string;
  pathname: string;
};

export const LinkNavigation = ({ id, href, icon: Icon, text, pathname }: Props) => {
  return (
    <div key={id}>
      <Link to={href} className={`flex items-center gap-2 ${pathname === href ? "text-main-pink" : "text-white"}`}>
        <Icon />
        <span>{text}</span>
      </Link>
    </div>
  );
};
