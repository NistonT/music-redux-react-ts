import { closeLeftBarMobile } from "@/features/leftBar/store/slice";
import { navigators } from "@/shared/constants/navigators";
import { LinkNavigator } from "@/shared/ui";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export const Navigators = () => {
  const dispatch = useDispatch();

  const navigator = useMemo(
    () =>
      navigators.map((nav) => (
        <LinkNavigator key={nav.id} href={nav.href} icon={nav.icon} onClick={() => dispatch(closeLeftBarMobile())}>
          {nav.name}
        </LinkNavigator>
      )),
    [dispatch],
  );

  return <>{navigator}</>;
};
