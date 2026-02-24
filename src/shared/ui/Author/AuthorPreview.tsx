import { pageRouter } from "@/shared/constants/page-router";
import { Link } from "react-router";

type Props = {
  id: number;
  img: string;
  name: string;
};

export const AuthorPreview = ({ id, img, name }: Props) => {
  return (
    <Link
      className="flex w-full h-full relative transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-white"
      to={pageRouter.AuthorId(id)}
    >
      <div className="relative z-10 flex p-2.5">
        <div className="w-20 h-20">
          <img className="w-full h-full object-cover rounded-full" src={`images/songs/${img}`} alt={img} />
        </div>
        <div className="text-2xl italic font-extrabold text-white text-shadow-sm cursor-default select-none m-2.5">{name}</div>
      </div>

      <img className="w-full h-full object-cover absolute z-0 opacity-20" src={`images/songs/${img}`} alt={img} />
    </Link>
  );
};
