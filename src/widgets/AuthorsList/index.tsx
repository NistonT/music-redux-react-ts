import { authors } from "@/shared/constants/author";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { AuthorPreview, TextHeader } from "@/shared/ui";
import { useMemo, useState } from "react";
import { SearchWithHistory } from "../SearchWithHistory";

export const AuthorsList = () => {
  const [search, setSearch] = useState<string>("");

  const debounce = useDebounce(search);

  const filtered = useMemo(() => authors.filter((author) => author.name.toLowerCase().includes(debounce.toLowerCase())), [debounce]);

  return (
    <>
      <div className="flex w-full my-10 px-5 relative max-w-2xl">
        <TextHeader>Authors</TextHeader>
      </div>
      <SearchWithHistory className="w-full mb-10" value={search} setValue={setSearch} />
      <div>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {filtered.map((author) => (
              <AuthorPreview key={author.id} img={author.img} name={author.name} id={author.id} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="text-2xl font-mono font-medium text-white text-shadow-sm cursor-default select-none">Nothing found</div>
          </div>
        )}
      </div>
    </>
  );
};
