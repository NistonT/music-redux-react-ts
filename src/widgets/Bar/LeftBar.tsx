import { Logo } from "@/shared/ui";

export const LeftBar = () => {
  return (
    <div className="bg-bg w-1/6">
      <div>
        <Logo />
      </div>

      <div>
        <h2>Menu</h2>
        <div>navigator</div>
      </div>

      <div>
        <h2>Library</h2>
        <div>Static</div>
      </div>

      <div>
        <h2>Playlist and favorite</h2>
        <div>Your</div>
      </div>
      <div>
        <h2>General</h2>
        <div>Setting</div>
      </div>
    </div>
  );
};
