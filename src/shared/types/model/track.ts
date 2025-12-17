import { IBaseModel } from "../base/base";
import { IArtist } from "./artist";

export interface ITrack extends IBaseModel {
  name: string;
  file: string;

  listeningDay: number;
  listeningWeek: number;
  listeningMonth: number;
  listeningYear: number;

  artist: IArtist;
  duration: number;
  preview: string;
  isLike: boolean;
}
