import {test} from "vitest";
import testStyles from "./test.module.css";

export default async function testPage() {
  return (
    <h1>
      <div className={testStyles.social}>
        <div>Icon Hover Animations2</div>
        <a
          href="https://www.youtube.com/@optimisticweb"
          title="YouTube"
          className={testStyles.test}
        >
          <p className={testStyles.testchild}>H</p>
        </a>

        <a
          href="https://twitter.com/optimisticweb"
          title="Twitter"
          className={testStyles.test}
        >
          <p className={testStyles.testchild}>H</p>
        </a>

        <a
          href="https://www.instagram.com/optimisticweb"
          title="Instagram"
          className={testStyles.test}
        >
          <p className={testStyles.testchild}>H</p>
        </a>

        <a href="#" title="Behance" className={testStyles.test}>
          <p className={testStyles.testchild}>H</p>
        </a>

        <a href="#" title="Dribbble" className={testStyles.test}>
          <p className={testStyles.testchild}>H</p>
        </a>
      </div>
    </h1>
  ); // Output: Post Page ID: 1, Comment ID: 2
}
