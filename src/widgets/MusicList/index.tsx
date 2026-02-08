import { TrackField } from "@/features/track/ui/TrackField";
import { tracks } from "@/shared/constants/tracks";

export const MusicList = () => {
  return (
    <div className="mt-5">
      {tracks.map((track) => (
        <TrackField key={track.id} track={track} />
      ))}
    </div>
  );
};
