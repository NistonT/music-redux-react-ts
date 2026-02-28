import type { RootState } from "@/app/store/store";
import { changeTrack, close, seek, setVolume, togglePlayPause, toggleRepeatTrack } from "@/features/player/store/slice";
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
    dispatch(toggleRepeatTrack());
  };

  const onRepeat = (): void => {
    if (!audioRef.current) return;

    if (store.isRepeat) {
      audioRef.current.play();
    } else {
      dispatch(changeTrack({ type: "next" }));
    }
  };

  return { audioRef, onSeek, duration, toggle, onVolume, onChangeTrack, onClose, onRepeat, toggleRepeat };
};
