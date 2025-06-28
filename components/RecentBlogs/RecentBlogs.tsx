import styles from "./RecentBlogs.module.css";
import Link from "next/link";
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
          <Link
            key={RecentPosts[0].id}
            href={`/posts/${RecentPosts[0].id}`}
            className="NoLinkStyle"
          >
            <LargeVerticalCard
              key={RecentPosts[0].id}
              postData={RecentPosts[0]}
            />
          </Link>
        </div>

        <div className={styles.RightColumn}>
          <Link
            key={RecentPosts[1].id}
            href={`/posts/${RecentPosts[1].id}`}
            className="NoLinkStyle"
          >
            <SmallHorizontalCard
              key={RecentPosts[1].id}
              postData={RecentPosts[1]}
            />
          </Link>
          <Link
            key={RecentPosts[2].id}
            href={`/posts/${RecentPosts[2].id}`}
            className="NoLinkStyle"
          >
            <SmallHorizontalCard
              key={RecentPosts[2].id}
              postData={RecentPosts[2]}
            />
          </Link>
        </div>
      </div>

      <div className={styles.BottomSection}>
        <Link
          key={RecentPosts[3].id}
          href={`/posts/${RecentPosts[3].id}`}
          className="NoLinkStyle"
        >
          <LargeHorizontalCard
            key={RecentPosts[3].id}
            postData={RecentPosts[3]}
          />
        </Link>
      </div>
    </div>
  );
}
