import { Heart } from "lucide-react";

type Props = {
  isFavorite: boolean;
  onClick?: () => void;
  className?: string;
};

export const ButtonFavorite = ({ isFavorite, onClick, className }: Props) => {
  return (
    <button className={`w-6 h-6 ${className}`} onClick={onClick}>
      <Heart className={`w-full h-full object-cover ${isFavorite && "text-red-400"}`} />
    </button>
  );
};
