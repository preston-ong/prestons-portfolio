import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

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
      <h2 className={utilStyles.headingXl}>Projects</h2>
      {projectsData ? (
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2">
          {projectsData.map((project) => (
            <Project project={project} />
          ))}
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}
