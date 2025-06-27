import LargeVerticalCard from "../LargeVerticalCard/LargeVerticalCard";

export default async function RecentBlogs() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const RecentPosts = await res.json();
  return (
    <div>
      <LargeVerticalCard key={RecentPosts[0].id} postData={RecentPosts[0]} />
      <h2>Recent blog posts</h2>
    </div>
  );
}
