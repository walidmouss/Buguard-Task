import Navbar from "../../../../components/Navbar/Navbar";
import "./Page.css";

type Props = {
  params: {
    id: string;
  };
};

export default async function BlogDetailsPage({ params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-store" }
  );

  const post = await res.json();

  const date = "June 26, 2025";

  return (
    <div>
      <div className="BlogDetailsWrapper">
        <div className="NavbarWrapper">
          <Navbar />
        </div>
        <div className="date">{date}</div>
        <h1 className="title">{post.title}</h1>
        <p className="content">{post.body}</p>
      </div>
    </div>
  );
}
