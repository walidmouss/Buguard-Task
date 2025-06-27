import styles from "./RecentBlogs.module.css";
import LargeHorizontalCard from "../LargeHorizontalCard/LargeHorizontalCard";
import LargeVerticalCard from "../LargeVerticalCard/LargeVerticalCard";
import SmallHorizontalCard from "../SmallHorizontalCard/SmallHorizontalCard";

export default async function RecentBlogs() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const RecentPosts = await res.json();

  return (
    <div className={styles.RecentBlogsWrapper}>
      <div className={styles.TopSection}>
        <div className={styles.LeftColumn}>
          <LargeVerticalCard
            key={RecentPosts[0].id}
            postData={RecentPosts[0]}
          />
        </div>

        <div className={styles.RightColumn}>
          <SmallHorizontalCard
            key={RecentPosts[2].id}
            postData={RecentPosts[1]}
          />
          <SmallHorizontalCard
            key={RecentPosts[3].id}
            postData={RecentPosts[2]}
          />
        </div>
      </div>

      <div className={styles.BottomSection}>
        <LargeHorizontalCard
          key={RecentPosts[1].id}
          postData={RecentPosts[3]}
        />
      </div>
    </div>
  );
}
