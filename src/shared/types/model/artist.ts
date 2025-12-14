import { IBaseModel } from "../base/base";

export interface IArtist extends IBaseModel {
  name: string;
  photo: string;

  listeningDay: number;
  listeningWeek: number;
  listeningMonth: number;
  listeningYear: number;
}
