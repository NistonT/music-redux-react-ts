import { TextHeader } from "@/shared/ui";

type Props = {
  img: string;
  name: string;
  tracksLength: number;
};

export const HeaderAuthor = ({ img, name, tracksLength }: Props) => {
  return (
    <div className="flex w-full h-full relative">
      <div className="relative z-10 flex">
        <div className="w-80 h-80">
          <img className="w-full h-full object-cover" src={`/images/songs/${img}`} alt={img} />
        </div>
        <TextHeader className="m-2.5">{name}</TextHeader>
      </div>
      <div className="absolute right-2.5 bottom-2.5 text-4xl italic font-extrabold text-white text-shadow-sm cursor-default select-none">
        {tracksLength}
      </div>
      <img className="w-full h-full object-cover absolute z-0 opacity-20" src={`/images/songs/${img}`} alt={img} />
    </div>
  );
};
