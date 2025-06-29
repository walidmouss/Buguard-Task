"use client";

import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./AllPosts.css";
import Link from "next/link";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function AllPosts() {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPostsData(data);
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(postsData.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = postsData.slice(startIndex, endIndex);

  return (
    <div>
      <h2>All blog posts</h2>

      <div className="PostsGrid">
        {visiblePosts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="NoLinkStyle"
          >
            <BlogCard post={post} />
          </Link>
        ))}
      </div>

      {/* //////////Pagination (part at the bottom)////////////// */}
      <div className="PaginationBar">
        <span
          className="PaginationNav"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          ← Previous
        </span>

        <div className="PaginationPages">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((pageNumber) => {
              return (
                pageNumber <= 3 || // First 3 pages
                pageNumber > totalPages - 3 || // Last 3 pages
                Math.abs(pageNumber - currentPage) <= 1 // Nearby pages
              );
            })
            .map((pageNumber, index, array) => {
              const nextPageNumber = array[index + 1];
              const shouldShowDots =
                nextPageNumber && nextPageNumber - pageNumber > 1;

              return (
                <span
                  key={pageNumber}
                  className={
                    pageNumber === currentPage
                      ? "ActivePageNumber"
                      : "PageNumber"
                  }
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                  {shouldShowDots && <span className="Dots"> ... </span>}
                </span>
              );
            })}
        </div>

        <span
          className="PaginationNav"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next →
        </span>
      </div>
    </div>
  );
}
