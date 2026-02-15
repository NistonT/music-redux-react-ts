import type { RootState } from "@/app/store/store";
import { seek, togglePlayPause } from "@/features/player/store/slice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudioDuration } from "./useAudioDuration";

export const useAudioTrack = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const store = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const duration = useAudioDuration(`songs/${store.currentTrack?.file}`);

  const toggle = () => {
    if (!audioRef.current) return;

    dispatch(togglePlayPause());

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const onSeek = (time: number) => {
    if (!audioRef.current || !duration) return;
    audioRef.current.currentTime = time;

    dispatch(seek({ time, duration }));
  };

  return { audioRef, onSeek, duration, toggle };
};
