import { TrackField } from "@/features/track/ui/TrackField";
import type { ITrack } from "@/shared/model/types";

type Props = {
  tracks: ITrack[] | null;
};

export const TracksListAuthor = ({ tracks }: Props) => {
  return <div>{tracks ? tracks.map((track) => <TrackField key={track.id} track={track} />) : <div>Не найдено</div>}</div>;
};
