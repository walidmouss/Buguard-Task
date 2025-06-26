import AllPosts from "../../../components/AllPosts/AllPosts";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

export default function Posts() {
  return (
    <div>
      <h1 className="EnormousPageTitle">THE BLOG</h1>
      <Navbar />
      <AllPosts />
      <Footer />
    </div>
  );
}
