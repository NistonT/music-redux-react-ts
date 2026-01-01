import type { RootState } from "@/app/store/store";
import { ITrack } from "@/shared/types";
import { useSelector } from "react-redux";

export const useTrack = (track: ITrack | ITrack[] = []) => {
  const tracks = useSelector((state: RootState) => state.track.tracks);

  return { tracks };
};
