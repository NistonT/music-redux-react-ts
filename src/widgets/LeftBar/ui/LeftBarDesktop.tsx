import { Navigators } from "./Navigators";

export const LeftBarDesktop = () => {
  return (
    <aside className="fixed left-0 top-0 w-2/12 h-full p-4 bg-bg z-10 hidden lg:block">
      <div className="mt-8">
        <Navigators />
      </div>
    </aside>
  );
};
