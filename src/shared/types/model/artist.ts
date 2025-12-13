import { IBaseModel } from "../base/base";
import { ITrack } from "./track";

export interface IArtist extends IBaseModel {
  name: string;
  photo: string;

  listeningDay: number;
  listeningWeek: number;
  listeningMonth: number;
  listeningYear: number;

  tracks: ITrack[];
}
