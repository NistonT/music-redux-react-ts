import { TrackField } from "@/features/track/ui/TrackField";
import { tracks } from "@/shared/constants/tracks";

export const MusicList = () => {
  return (
    <div>
      {tracks.map((track) => (
        <TrackField key={track.id} track={track} />
      ))}
    </div>
  );
};
