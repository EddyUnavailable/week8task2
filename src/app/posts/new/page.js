// /app/posts/new/page.js
import pg from "pg";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {db} from "@/utils/utilities.js";
import tareaStyles from "../../css/tarea.module.css";

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
    <h3>
      <form
        className="flex-1 flex-row ml-6 mr-6 max-w-<500>"
        action={handleSavePost}
      >
        {/* <label htmlFor="username">userName</label> */}
        <input name="username" placeholder="User Name"></input>
        <textarea
          className={tareaStyles.tarea}
          id="comment"
          name="comment"
          placeholder="Comment"
        ></textarea>
        <button type="submit" placeholder="Submit"></button>
        <input name="name" type="text"></input>
      </form>
    </h3>
  );
}
