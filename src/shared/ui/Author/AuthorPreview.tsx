type Props = {
  img: string;
  name: string;
};

export const AuthorPreview = ({ img, name }: Props) => {
  return (
    <div className="flex w-full h-full relative">
      <div className="relative z-10 flex p-2.5">
        <div className="w-20 h-20">
          <img className="w-full h-full object-cover rounded-full" src={`images/songs/${img}`} alt={img} />
        </div>
        <div className="text-2xl italic font-extrabold text-white text-shadow-sm cursor-default select-none m-2.5">{name}</div>
      </div>

      <img className="w-full h-full object-cover absolute z-0 opacity-20" src={`images/songs/${img}`} alt={img} />
    </div>
  );
};
