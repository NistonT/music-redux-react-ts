import { TrackField } from "@/features/track/ui/TrackField";
import { tracks } from "@/shared/constants/tracks";
import { TextHeader } from "@/shared/ui";

export const MusicList = () => {
  return (
    <div className="mb-25">
      <TextHeader className="my-10 mx-5">Popular Tracks</TextHeader>
      <div>
        {tracks.map((track) => (
          <TrackField key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};
