import { useEffect, useState } from "react";

export const useAudioDuration = (audioUrl: string): number | null => {
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.preload = "metadata";

    const loaded = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", loaded);

    return () => audio.removeEventListener("loadedmetadata", loaded);
  }, [audioUrl]);

  return duration;
};
