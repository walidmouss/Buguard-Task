import BlogCard from "../BlogCard/BlogCard";
import "./AllPosts.css";
import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function AllPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const postsData: Post[] = await res.json();
  //console.log(postsData);
  return (
    <div>
      <h2>All blog posts</h2>
      <div className="PostsGrid">
        {postsData.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="NoLinkStyle"
          >
            <BlogCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
