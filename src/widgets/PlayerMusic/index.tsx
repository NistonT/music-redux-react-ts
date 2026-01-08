import { PropsWithChildren } from "react";

export const PlayerMusic = ({ children }: PropsWithChildren) => {
  // const isPlayer = useSelector((state: RootState) => state.player.isPlaying);

  return (
    <div>
      {children}
      <div className="fixed bottom-0 bg-bg w-full">
        <div className="text-red text-5xl">ASD</div>
        <input type="range" className="bg-red" />
      </div>
    </div>
  );
};
