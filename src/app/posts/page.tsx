import AllPosts from "../../../components/AllPosts/AllPosts";
import Navbar from "../../../components/Navbar/Navbar";
import RecentBlogs from "../../../components/RecentBlogs/RecentBlogs";
import "./page.css";
export default function Posts() {
  return (
    <div className="PageContainer">
      <Navbar />
      <h1 className="EnormousPageTitle">THE BLOG</h1>
      <h2>Recent blog posts</h2>
      <RecentBlogs />
      <AllPosts />
    </div>
  );
}
