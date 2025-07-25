import type { Post } from "../AllPosts/AllPosts";
import styles from "./LargeHorizontalCard.module.css";
import Image from "next/image";

export default function LargeHorizontalCard({ postData }: { postData: Post }) {
  const tags = ["Design", "Research", "Leadership"]; // Example tags for now
  const date = "June 26, 2025"; // Placeholder date
  const tagColors = ["#FFEFD5", "#E0FFFF", "#F0FFF0"]; // Light background colors for tags

  return (
    <div className={`LargeHorizontalCard ${styles.BlogCard}`}>
      <Image
        src={`https://picsum.photos/592/228?random=${postData.id}`}
        alt="Blog Image"
        width={384}
        height={240}
        className={styles.BlogImage}
      />

      <div className={styles.BlogContent}>
        <div className={styles.BlogDate}>{date}</div>

        <h2 className={styles.BlogHeader}>{postData.title}</h2>

        <p className={styles.BlogBody}>{postData.body}</p>

        <div className={styles.BlogTags}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={styles.BlogTag}
              style={{ backgroundColor: tagColors[index % tagColors.length] }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
