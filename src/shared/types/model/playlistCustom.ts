import { IBaseModel } from "../base/base";
import { ITrack } from "./track";

export interface IPlaylistCustom extends IBaseModel {
  name: string;
  description: string;

  tracks: ITrack[];
}
