import { ITrack } from "./track";

export interface IAuthor {
  id: number;
  name: string;
  img: string;
  tracks: ITrack[];
}
