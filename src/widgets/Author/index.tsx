import { setTracksList } from "@/features/player/store/slice";
import { authors } from "@/shared/constants/author";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchWithHistory } from "../SearchWithHistory";
import { HeaderAuthor, TracksListAuthor } from "./ui";

type Props = {
  id: string;
};

export const Author = ({ id }: Props) => {
  const authorId = Number(id);
  const author = authors.find((a) => a.id === authorId);

  const [search, setSearch] = useState<string>("");
  const debounce = useDebounce(search);
  const dispatch = useDispatch();

  const filtered = useMemo(() => {
    if (!author) return [];
    return author?.tracks.filter((author) => author.name.toLowerCase().includes(debounce.toLocaleLowerCase()));
  }, [debounce, author]);

  useEffect(() => {
    if (author) {
      dispatch(setTracksList(filtered));
    }

    return () => {
      dispatch(setTracksList([]));
    };
  }, [dispatch, filtered, author]);

  if (!author) return <div>Автор не найден</div>;

  return (
    <div>
      <HeaderAuthor img={author.img} name={author.name} tracksLength={author.tracks.length} />
      <SearchWithHistory value={search} setValue={setSearch} className="mx-auto my-5" />
      <TracksListAuthor tracks={filtered || null} />
    </div>
  );
};
