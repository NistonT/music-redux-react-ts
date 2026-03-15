import { setTracksList } from "@/features/player/store/slice";
import { TrackField } from "@/features/track/ui/TrackField";
import { tracks } from "@/shared/constants/tracks";
import { TextHeader } from "@/shared/ui";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const MusicList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTracksList(tracks));
  }, [dispatch]);

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
