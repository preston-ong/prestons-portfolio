import React from "react";

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import Link from "next/link";
import SocialLink from "../components/SocialLink";

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
          <a target="_blank" hrerf="https://boardedu.org">
            Board Education
          </a>{" "}
          and the founding software engineer at{" "}
          <a target="_blank" hrerf="https://carepool.asia">
            Carepool Asia
          </a>
          .
        </p>
        <p>
          An aspiring front-end engineer passionate about deliver quality code
          and amazing user experience, seeking to blend Product Management into
          my responsbilities as an engineer too!
        </p>
        <p>
          At the side, I volunteered as the Strategic Lead of{" "}
          <a target="_blank" href="https://projected.my">
            ProjectEd Malaysia
          </a>
          . A huge{" "}
          <a target="_blank" href="https://twitter.com/warriors">
            Golden State Warriors 🏀
          </a>{" "}
          fan too!
        </p>
        <p>Drop me a message on Twitter or LinkedIn for a coffee chat!</p>
      </section>

      <section className="text-center mr-2 mb-5">
        <Link href="/projects">
          <a className="inline-block bg-blue-700 text-white text-xl hover:bg-blue-800 hover:no-underline rounded-xl px-3 py-2">
            Check out my Projects 👉
          </a>
        </Link>
      </section>
    </Layout>
  );
}
