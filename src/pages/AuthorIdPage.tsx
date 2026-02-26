import { Author } from "@/widgets";
import { useParams } from "react-router";

export const AuthorIdPage = () => {
  const { id } = useParams();

  if (!id) return;

  return (
    <div>
      <Author id={id} />
    </div>
  );
};
