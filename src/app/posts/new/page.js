// /app/posts/new/page.js
import pg from "pg";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {db} from "@/utils/utilities.js";

export default function NewPostPage() {
  async function handleSavePost(formData) {
    "use server"; // makes this function run _on the server_, as if by magic API.
    console.log("Saving post to the database...");

    // connect to our database (make sure there is a DATABASE_URL in your .env.local)
    // const db = new pg.Pool({connectionString: process.env.DATABASE_URL});

    // get the form data from the formData object next provdides
    const username = formData.get("username");
    const comment = formData.get("comment");
    const name = formData.get("name");

    // insert the data into postgres
    await db.query(
      `INSERT INTO comments (username, comment, name) VALUES ($1, $2, $3)`,
      [username, comment, name]
    );
    console.log("Post saved!");

    // revalidate the posts page, so it fetches the new data
    revalidatePath("/posts");

    // redirect the user to the posts page
    redirect("/posts");
  }

  return (
    <form action={handleSavePost}>
      <label htmlFor="username">userName</label>
      <input id="username" name="username" type="text" />
      <label htmlFor="comment">comment</label>
      <textarea id="comment" name="comment" />
      <button type="submit">Save</button>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" />
    </form>
  );
}
