import type { RootState } from "@/app/store/store";
import {
  changeTrack,
  close,
  randomTrack,
  seek,
  setVolume,
  togglePlayPause,
  toggleRandomTrack,
  toggleRepeatTrack,
} from "@/features/player/store/slice";
import { TypeNextPrev } from "@/shared/model/types";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudioDuration } from "./useAudioDuration";

export const useAudioTrack = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const store = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const duration = useAudioDuration(`/songs/${store.currentTrack?.file}`);

  const toggle = (): void => {
    if (!audioRef.current) return;

    dispatch(togglePlayPause());

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const onClose = (): void => {
    if (!audioRef.current) return;

    dispatch(close());
  };

  const onSeek = (time: number): void => {
    if (!audioRef.current || !duration) return;
    audioRef.current.currentTime = time;

    dispatch(seek({ time, duration }));
  };

  const onChangeTrack = (type: TypeNextPrev): void => {
    dispatch(changeTrack({ type }));

    if (audioRef.current && store.isPlaying) {
      audioRef.current.play();
    }
  };

  const onVolume = (volume: number): void => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;

    dispatch(setVolume(volume));
  };

  const toggleRepeat = () => {
    if (!store.isRandom) {
      dispatch(toggleRepeatTrack());
    }
  };

  const toggleRandom = () => {
    if (!store.isRepeat) {
      dispatch(toggleRandomTrack());
    }
  };

  const onTrackEnd = () => {
    if (!audioRef.current) return;

    if (store.isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (store.isRandom) {
      dispatch(randomTrack());
    } else {
      onChangeTrack("next");
    }
  };

  return { audioRef, onSeek, duration, toggle, onVolume, onChangeTrack, onClose, toggleRepeat, toggleRandom, onTrackEnd };
};
