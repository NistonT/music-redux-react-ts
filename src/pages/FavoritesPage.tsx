import { TextHeader } from "@/shared/ui";
import { Favorites } from "@/widgets";

export const FavoritesPage = () => {
  return (
    <div>
      <div className="flex w-full my-10 px-5 relative max-w-2xl">
        <TextHeader>Favorites</TextHeader>
      </div>
      <Favorites />
    </div>
  );
};
