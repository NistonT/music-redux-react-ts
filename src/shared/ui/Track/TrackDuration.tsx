import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

type Props = {
  duration: number;
};

export const TrackDuration = ({ duration }: Props) => {
  return <div className="text-white/50">{dayjs.unix(duration).utc().format("m:ss")}</div>;
};
