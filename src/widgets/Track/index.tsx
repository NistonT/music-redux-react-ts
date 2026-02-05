import { tracks } from "@/shared/constants/tracks";

export const Track = () => {
  return (
    <div>
      {tracks.map((track) => {
        return (
          <div key={track.id}>
            <div>{track.name}</div>
            <div></div>
            <audio controls src={`songs/${track.file}`} />
          </div>
        );
      })}
    </div>
  );
};
