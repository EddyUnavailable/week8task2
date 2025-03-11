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
      <div className="flex gap-4 items-center">
        {posts.map((post) => (
          <div className="w-<300>">
            <p>{post.id}</p>
            <p>{post.name}</p>
            <image src={post.url} height={250} width={250}></image>
            <p>{post.started}</p>
            <p>{post.ended}</p>
          </div>
        ))}
      </div>
    </h3>
  );
}
