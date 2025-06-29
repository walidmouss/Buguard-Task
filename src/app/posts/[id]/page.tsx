import { Post } from "../../../../components/AllPosts/AllPosts";
import Navbar from "../../../../components/Navbar/Navbar";
import "./Page.css";

export default async function BlogDetailsPage(props: {
  params: { id: string };
}) {
  const { params } = props;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await res.json();

  const date = "June 26, 2025"; // Mock date

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
