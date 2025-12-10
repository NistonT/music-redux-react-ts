import { navigatorRouter } from "@/shared/constants";
import { LinkNavigation } from "@/shared/ui";
import { useMemo } from "react";
import { useLocation } from "react-router";

export const NavigatorLeftBar = () => {
  const location = useLocation();

  const navigator = useMemo(
    () =>
      navigatorRouter.map((nav) => (
        <LinkNavigation key={nav.id} id={nav.id} href={nav.href} icon={nav.icon} text={nav.text} pathname={location.pathname} />
      )),
    [location],
  );

  return <>{navigator}</>;
};
