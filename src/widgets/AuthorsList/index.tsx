import { authors } from "@/shared/constants/author";
import { AuthorPreview, SearchDefault, TextHeader } from "@/shared/ui";

export const AuthorsList = () => {
  return (
    <>
      <div className="flex items-center w-full my-10 px-5">
        <TextHeader>Authors</TextHeader>
        <SearchDefault className="absolute left-5/12 transform -translate-x-8/12" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {authors.map((author) => (
          <AuthorPreview key={author.id} img={author.img} name={author.name} />
        ))}
      </div>
    </>
  );
};
