import styles from "./SmallHorizontalCard.module.css";
import { Post } from "../RecentBlogs/RecentBlogs";

export default function SmallHorizontalCard({ postData }: { postData: Post }) {
  const tags = ["Design", "Research", "Leadership"]; // Example tags for now
  const date = "June 26, 2025"; // Placeholder date

  return (
    <div className={`SmallHorizontalCard ${styles.BlogCard}`}>
      <img
        src={`https://picsum.photos/592/228?random=${postData.id}`}
        alt="Blog Image"
        className={styles.BlogImage}
      />

      <div className={styles.BlogContent}>
        <div className={styles.BlogDate}>{date}</div>

        <h2 className={styles.BlogHeader}>{postData.title}</h2>

        <p className={styles.BlogBody}>{postData.body}</p>

        <div className={styles.BlogTags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.BlogTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
