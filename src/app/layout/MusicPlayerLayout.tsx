import { MusicPlayer } from "@/widgets";
import { PropsWithChildren } from "react";

export const MusicPlayerLayout = ({ children }: PropsWithChildren) => {
  return <MusicPlayer>{children}</MusicPlayer>;
};
