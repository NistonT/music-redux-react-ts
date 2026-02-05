import { ButtonSwiper, TextHeader } from "@/shared/ui";
type Props = {
  image: string;
  name: string;
  author: string;
  song: string;
};

export const SlideContent = ({ image, name, author, song }: Props) => {
  console.log(song);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={`images/songs/${image}`} alt={image} className="w-full h-full object-cover object-center" />
      <div className="absolute z-20 top-0 left-0 p-10 flex flex-col justify-between gap-10 w-full h-full">
        <div>
          <TextHeader>LATEST RELEASE</TextHeader>
          <div className="mt-2 bg-bg w-4/12 p-4 flex flex-col gap-2">
            <h2 className="text-4xl">{name}</h2>
            <p className="text-2xl">{author}</p>
          </div>
        </div>
        <div>
          <ButtonSwiper>Go to music</ButtonSwiper>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-bg/25" />
    </div>
  );
};
