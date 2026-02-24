class PagesRouter {
  Home = "/";
  Search = "/search";
  Library = "/library";

  Authors = "/author";
  Author = "/author/:id";
  AuthorId(id: number) {
    return `/author/${id}`;
  }
}

export const pageRouter = new PagesRouter();
