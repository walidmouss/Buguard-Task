import "./BlogCard.css";

export default function BlogCard({
  post,
}: {
  post: { userId: number; id: number; title: string; body: string };
}) {
  const tags = ["Design", "Research", "Leadership"]; // Example tags for now
  const date = "June 26, 2025"; // Placeholder date (you can adjust)

  return (
    <div className="BlogCard">
      <img
        src={`https://picsum.photos/384/240?random=${post.id}`}
        alt="Blog Image"
        className="BlogImage"
        width={384}
        height={240}
      />

      <div className="BlogContent">
        <div className="BlogDate">{date}</div>

        <h2 className="BlogHeader">{post.title}</h2>

        <p className="BlogBody">{post.body}</p>

        <div className="BlogTags">
          {tags.map((tag, index) => (
            <span key={index} className="BlogTag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
