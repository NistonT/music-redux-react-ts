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
    <div className="flex justify-between items-center px-4 p-2 cursor-pointer hover:bg-bg-active rounded-xl">
      <div className="flex items-center gap-2">
        <div className="w-14 h-14">
          <img className="w-full h-full object-contain rounded-xl select-none" src={`images/songs/${track.img}`} alt={track.img} />
        </div>
        <div className="flex flex-col font-mono">
          <div>{track.name}</div>
          <div>{authors.find((author) => author.id === track.author)?.name || "Unknown"}</div>
        </div>
      </div>
      <div>{dayjs.unix(duration!).utc().format("m:ss")}</div>
    </div>
  );
};
