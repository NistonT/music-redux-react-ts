import { authors } from "@/shared/constants/author";

import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { SearchDefault } from "@/shared/ui";
import { useMemo, useState } from "react";
import { HeaderAuthor, TracksListAuthor } from "./ui";

type Props = {
  id: string;
};

export const Author = ({ id }: Props) => {
  const authorId = Number(id);
  const author = authors.find((a) => a.id === authorId);

  const [search, setSearch] = useState<string>("");

  const debounce = useDebounce(search);

  const filtered = useMemo(
    () => author?.tracks.filter((author) => author.name.toLowerCase().includes(debounce.toLocaleLowerCase())),
    [debounce, author?.tracks],
  );

  if (!author) {
    return <div>Автор не найден</div>;
  }

  return (
    <div>
      <HeaderAuthor img={author.img} name={author.name} tracksLength={author.tracks.length} />
      <SearchDefault value={search} setValue={setSearch} className="mx-auto my-5" />
      <TracksListAuthor tracks={filtered || null} />
    </div>
  );
};
