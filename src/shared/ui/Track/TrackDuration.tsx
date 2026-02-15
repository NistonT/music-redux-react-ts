import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

type Props = {
  duration: number;
};

export const TrackDuration = ({ duration }: Props) => {
  return <div>{dayjs.unix(duration).utc().format("m:ss")}</div>;
};
