import { authors } from "@/shared/constants/author";

type Props = {
  id: string;
};

export const Author = ({ id }: Props) => {
  const authorId = Number(id);
  const author = authors.find((a) => a.id === authorId);

  if (!author) {
    return <div>Автор не найден</div>;
  }

  return (
    <div className="flex w-full h-full relative transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-white">
      <div className="relative z-10 flex p-2.5">
        <div className="w-20 h-20">
          <img className="w-full h-full object-cover rounded-full" src={`/images/songs/${author.img}`} alt={author.img} />
        </div>
        <div className="text-2xl italic font-extrabold text-white text-shadow-sm cursor-default select-none m-2.5">{author.name}</div>
      </div>
      <div className="absolute right-2.5 top-2.5 text-2xl italic font-extrabold text-white text-shadow-sm cursor-default select-none">
        {author.tracks.length}
      </div>
      <img className="w-full h-full object-cover absolute z-0 opacity-20" src={`/images/songs/${author.img}`} alt={author.img} />
    </div>
  );
};
