import { useParams } from "react-router";

export const AuthorIdPage = () => {
  const { id } = useParams();

  return <div>Author id page {id}</div>;
};
