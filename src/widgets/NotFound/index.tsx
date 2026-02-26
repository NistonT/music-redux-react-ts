import { TypeNotFound } from "@/shared/model/types";

type Props = {
  typeNotFound: TypeNotFound;
};

export const NotFound = ({ typeNotFound }: Props) => {
  return <>{typeNotFound === "author" ? <div>Not Found Author</div> : <div>Not Found</div>}</>;
};
