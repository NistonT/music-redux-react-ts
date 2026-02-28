import { TypeNotFound } from "@/shared/model/types";
import { NotFoundAuthor, NotFoundDefault } from "./ui";

type Props = {
  typeNotFound: TypeNotFound;
};

export const NotFound = ({ typeNotFound }: Props) => {
  return <>{typeNotFound === "author" ? <NotFoundAuthor /> : <NotFoundDefault />}</>;
};
