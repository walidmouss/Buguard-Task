import AllPosts from "../../../components/AllPosts/AllPosts";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import RecentBlogs from "../../../components/RecentBlogs/RecentBlogs";
import "./page.css";
export default function Posts() {
  return (
    <div className="PageContainer">
      <Navbar />
      <h1 className="EnormousPageTitle">THE BLOG</h1>
      <RecentBlogs />
      <AllPosts />
      <Footer />
    </div>
  );
}
