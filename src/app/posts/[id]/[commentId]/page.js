// /app/posts/[id]/[commentId]/page.js
import pg from "pg";
import Image from "next/image";
// import { db } from "@/utils/utilities.js";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });

  const posts = (await db.query(`SELECT * FROM cartoons`)).rows;

  console.log(posts);

  return (
    <h3>
      {posts.map((post) => (
        <div>
          <div>{post.id}</div>
          <div>{post.username}</div>
          <div>{post.comment}</div>
          <div>{post.name}</div>
        </div>
      ))}
    </h3>
  );
}

/* <div>{post.id}</div>
          <div>{post.username}</div>
          <div>{post.comment}</div>
          <div>{post.name}</div> */
