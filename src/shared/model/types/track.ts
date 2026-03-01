// import dayjs from "dayjs"
// import utc from "dayjs/plugin/utc"
// dayjs.extend(unix)
// dayjs.unix(track.duration).utc().format("m:ss")

import type { TypeGenresTrack } from "./base";

export interface ITrack {
  id: number;
  img: string;
  name: string;
  author: number;
  file: string;
  genres?: TypeGenresTrack[];
}
