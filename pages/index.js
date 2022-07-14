import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Preston is a third-year Computer Science undergraduate student at
          Monash University Malaysia specialising in Artificial intelligence
          (AI). He resides in the Software Engineering and Product Management
          realm atop his personal projects and internship experiences in the
          industries of e-commerce, EdTech and tele-health.{" "}
        </p>
        <p>Drop me a message if you are keen to chat!</p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      <section
        className={utilStyles.textCenter}
        style={{ marginBottom: "8px" }}
      >
        <Link href="/projects">
          <a className={utilStyles.marginRight8px}>Projects</a>
        </Link>
        <Link href="/blog">Blog</Link>
      </section>

      <section className={utilStyles.textCenter}>
        <a
          style={{ color: "black", marginRight: "8px" }}
          href="https://github.com/prestonojb"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ width: "24px", height: "24px" }}
          />
        </a>
        <a
          style={{ color: "black", marginRight: "8px" }}
          href="https://twitter.com/preston_ojb"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ width: "24px", height: "24px" }}
          />
        </a>
        <a
          style={{ color: "black" }}
          href="https://linkedin.com/in/preston-ong-jin-bin"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ width: "24px", height: "24px" }}
          />
        </a>
      </section>
    </Layout>
  );
}
