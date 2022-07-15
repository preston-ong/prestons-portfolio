import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

import { getSortedProjectsData } from "../../lib/projects";

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
      <h2 className={utilStyles.headingXl}>Projects</h2>
      {projectsData
        ? (`<ul>` +
          projectsData.map((project) => {
            return `<li>${project.title}</li>`;
          }) +
          `</ul>`)
        : ""}
    </Layout>
  );
}
