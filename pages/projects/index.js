import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";

import utilStyles from "../../styles/utils.module.css";

import { getSortedProjectsData } from "../../lib/projects";
import Project from "../../components/project";

export async function getStaticProps() {
  const projectsData = await getSortedProjectsData();
  return {
    props: {
      projectsData,
    },
  };
}

export default function Projects({ projectsData }) {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>

      <nav className="mb-4">
        <Link href="/">← Back to Home</Link>
      </nav>
      <section className="mb-10 text-justify">
        <h2 className={utilStyles.headingXl}>Highlights</h2>
        <p>
          Check out{" "}
          <a className="bg-yellow-200" href="#">
            Board
          </a>
          . I built the website from scratch using Javascript/jQuery and Laravel, which includes
          features like <Link href={`/projects/homework-forum`}>Homework Forum</Link>,{" "}
          <Link href={`/projects/worksheet-library`}>Worksheet Library</Link> and{" "}
          <Link href={`/projects/exam-builder`}>Worksheet Generator</Link>.
        </p>
      </section>

      <h2 className={utilStyles.headingXl}>Other Projects</h2>
      {projectsData ? (
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2">
          {projectsData
            .filter((project) => project.hidden === undefined)
            .map((project) => (
              <Project project={project} />
            ))}
        </div>
      ) : (
        ""
      )}
      <nav className="mt-4">
        <Link href="/">← Back to Home</Link>
      </nav>
    </Layout>
  );
}
