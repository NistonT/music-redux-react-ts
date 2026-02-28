import type { RootState } from "@/app/store/store";
import { changeTrack, close, seek, setVolume, togglePlayPause, toggleRepeatTrack } from "@/features/player/store/slice";
import { TypeNextPrev } from "@/shared/model/types";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useAudioDuration } from "./useAudioDuration";

export const useAudioTrack = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const store = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const location = useLocation();

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
    const locationTrack = location.pathname.split("/").filter(Boolean);

    if (locationTrack[0] === "author" && locationTrack[1]) {
      const authorId = Number(locationTrack[1]);

      if (!isNaN(authorId)) {
        dispatch(changeTrack({ type, authorId }));
      } else {
        dispatch(changeTrack({ type }));
      }
    } else {
      dispatch(changeTrack({ type }));
    }

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
      onChangeTrack("next");
    }
  };

  return { audioRef, onSeek, duration, toggle, onVolume, onChangeTrack, onClose, onRepeat, toggleRepeat };
};
