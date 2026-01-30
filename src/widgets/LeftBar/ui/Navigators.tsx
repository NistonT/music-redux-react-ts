import { navigators } from "@/shared/constants/navigators";
import { LinkNavigator } from "@/shared/ui";
import { useMemo } from "react";

export const Navigators = () => {
  const navigator = useMemo(
    () =>
      navigators.map((nav) => (
        <LinkNavigator key={nav.id} href={nav.href} icon={nav.icon}>
          {nav.name}
        </LinkNavigator>
      )),
    [],
  );

  return <>{navigator}</>;
};
