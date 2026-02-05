import { authors } from "@/shared/constants/author";
import type { ITrack } from "@/shared/model/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useAudioDuration } from "../lib/hooks/useAudioDuration";

dayjs.extend(utc);

type Props = {
  track: ITrack;
};

export const TrackField = ({ track }: Props) => {
  const duration = useAudioDuration(`songs/${track.file}`);

  return (
    <div className="flex">
      <div className="w-10 h-10">
        <img className="w-full h-full object-contain" src={`images/songs/${track.img}`} alt={track.img} />
      </div>
      <div>{track.name}</div>
      <div>{authors.find((author) => author.id === track.author)?.name || "Unknown"}</div>
      <div>{dayjs.unix(duration!).utc().format("m:ss")}</div>
    </div>
  );
};
