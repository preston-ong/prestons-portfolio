import React from "react";

import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Carousel from "../../components/Carousel";

import { getAllProjectIds, getProjectData } from "../../lib/projects";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <img
          src={`/images/${projectData.id}/${projectData.cover_img_url}`}
          class="w-full h-full object-center object-cover"
        />
        <h1>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          Updated at <Date dateString={projectData.date} />
        </div>
        <div>
          <a href={projectData.live_demo_url} target="_blank">
            Live Demo
          </a>
          <span> | </span>
          <a href={projectData.video_walkthrough_url} target="_blank">
            Video Walkthrough
          </a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />

        <h3>Screenshots</h3>
        <Carousel />
      </article>
    </Layout>
  );
}
