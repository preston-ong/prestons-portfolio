import React from "react";

import Head from "next/head";
import Layout from "../components/layout";

import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{`Preston's Website`}</title>
      </Head>
      <section className="text-justify">
        <p>
          Hey there 👋 I am a final-year Computer Science student (graduating
          Nov 2022) at Monash University based in Kuala Lumpur 🇲🇾. Previously, I
          was a software engineering intern at{" "}
          <a target="_blank" href="https://dropee.com">
            Dropee
          </a>
          , a full-stack engineer at{" "}
          <a target="_blank" href="https://boardedu.org">
            Board Education
          </a>{" "}
          and the founding software engineer at{" "}
          <a target="_blank" href="https://carepool.asia">
            Carepool Asia
          </a>
          .
        </p>
        <p>
         I am a software engineer passionate about solving real-world problems with
          technology, seeking to blend Product Management into my
          responsbilities as an engineer too!
        </p>
        <p>
          At the side, I also volunteered as the Strategic Lead of{" "}
          <a target="_blank" href="https://projected.my">
            ProjectEd Malaysia
          </a>
          . I am a huge Warriors fan 🏀 as well!
        </p>
        <p>
          Drop me a message on{" "}
          <a target="_blank" href="https://twitter.com/preston_ojb">
            Twitter
          </a>{" "}
          or{" "}
          <a target="_blank" href="https://linkedin.com/in/preston-ong-jin-bin">
            LinkedIn
          </a>{" "}
          for a chat!
        </p>
      </section>

      <section className="text-center mr-2 mb-5">
        <Link href="/projects">
          <a
            className="text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center 
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300 hover:no-underline"
          >
            Check out my Projects 👉
          </a>
        </Link>
      </section>
    </Layout>
  );
}
