import { useTrack } from "@/entities/track/hook/useTrack";

export const WeeklyTopSongs = () => {
  // Состояние плейлистов
  // Состояние плеера

  const { tracks } = useTrack();

  return (
    <div>
      <h1 className="text-h1 text-white font-bold">
        Weekly Top <span className="text-main-pink">Songs</span>
      </h1>

      <div>
        {tracks.map((track) => (
          <div key={track.id}>
            {track.name} <img className="w-10" src={track.preview} alt={track.preview} />
          </div>
        ))}
      </div>
    </div>
  );
};
