import { play, setTrack } from "@/features/player/store/slice";
import { TrackField } from "@/features/track/ui/TrackField";
import { tracks } from "@/shared/constants/tracks";
import type { ITrack } from "@/shared/model/types/track";
import { useDispatch } from "react-redux";

export const MusicList = () => {
  const dispatch = useDispatch();

  const handlePlayTrack = (track: ITrack) => {
    dispatch(setTrack({ track }));
    dispatch(play());
  };

  return (
    <div className="mt-5">
      {tracks.map((track) => (
        <TrackField onClick={() => handlePlayTrack(track)} key={track.id} track={track} />
      ))}
    </div>
  );
};
