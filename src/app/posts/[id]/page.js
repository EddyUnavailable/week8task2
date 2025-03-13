// /app/posts/[id]/[commentId]/page.js
import pg from "pg";
import Image from "next/image";
// import { db } from "@/utils/utilities.js";

export default async function PostPage() {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });

  const post = (await db.query(`SELECT * FROM comments`)).rows;

  console.log(post);

  return (
    <h3>
      {post.map((post) => (
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
