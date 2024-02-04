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
          Hey there 👋 I am a Software Engineer at Trontal, working on backend engineering in the quantitative finance field.
          My work spans components such as order books, options indicators, and data validation.
          Previously, I was a Software Engineer at{" "}
          <a target="_blank" href="https://www.ridebeam.com/">
            Beam Mobility
          </a>
          , a full-stack engineer at{" "}
          <a target="_blank" href="https://boardedu.org">
            Board Education
          </a>{" "}
          and the founding software engineer at{" "}
          <a target="_blank" href="https://carepool.asia">
            Carepool Asia
          </a>
          . I studied Computer Science at <a href="https://www.monash.edu.my/">Monash University Malaysia</a>.
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
          for a chat on anything from distributed systems, databases and everything else you think I
          might be interested in!
        </p>
      </section>

      <section className="text-center mr-2 mb-5">
        <Link href="/projects" legacyBehavior>
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
