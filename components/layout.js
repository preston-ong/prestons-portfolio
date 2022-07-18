import React from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import SocialLink from "./SocialLink";
import Breadcrumbs from "./Breadcrumbs";

const name = "Preston Ong";
export const siteTitle = "Preston Ong's Personal Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={`${styles.header} mb-4`}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full !border-blue-700 !border-4 !border-solid !p-1"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={`${utilStyles.heading2Xl} !mt-2 !mb-1`}>{name}</h1>
            <section className="text-center">
              <SocialLink
                width="18px"
                height="18px"
                type="github"
                url="https://github.com/prestonojb"
              />
              <SocialLink
                width="18px"
                height="18px"
                type="twitter"
                url="https://twitter.com/preston_ojb"
              />
              <SocialLink
                width="18px"
                height="18px"
                type="linkedin"
                url="https://linkedin.com/in/preston-ong-jin-bin"
              />
            </section>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full !border-blue-700 !border-4 !border-solid !p-1"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <div className="text-center mt-4">
              <Breadcrumbs />
            </div>
            <h2 className={`${utilStyles.headingLg} !mt-1 !mb-1`}>{name}</h2>
            <section className="text-center">
              <SocialLink
                width="18px"
                height="18px"
                type="github"
                url="https://github.com/prestonojb"
              />
              <SocialLink
                width="18px"
                height="18px"
                type="twitter"
                url="https://twitter.com/preston_ojb"
              />
              <SocialLink
                width="18px"
                height="18px"
                type="linkedin"
                url="https://linkedin.com/in/preston-ong-jin-bin"
              />
            </section>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
