import { Author } from "@/widgets";
import { useParams } from "react-router";

const AuthorIdPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Некорретный id</div>;

  return (
    <div>
      <Author id={id} />
    </div>
  );
};

export default AuthorIdPage;
