import React from "react";

import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
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
  function generateProjectLinks() {
    const links = {
      "Live Demo": projectData.live_demo_url,
      "Source Code": projectData.source_code_url,
      "Video Walkthrough": projectData.video_walkthrough_url,
    };

    return Object.keys(links)
      .filter(
        (key) =>
          typeof links[key] !== "undefined" && typeof links[key] !== null,
      )
      .map((key, idx, arr) => {
        return (
          <>
            <a key={idx} href={links[key]} target="_blank">
              {key}
            </a>
            {idx + 1 !== arr.length && <span> | </span>}
          </>
        );
      });
  }

  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <nav className="mb-4">
        <Link href="/projects">← Back to Projects</Link>
      </nav>
      <article className="text-justify">
        <img
          src={`/images/${projectData.id}/${projectData.cover_img_url}`}
          class="w-full h-full object-center object-cover"
        />
        <h1>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          Updated at <Date dateString={projectData.date} />
        </div>
        <div>{generateProjectLinks()}</div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />

        {projectData.images && (
          <section>
            <h3>UI/UX</h3>
            <Carousel
              img_dir={`/images/${projectData.id}`}
              images={projectData.images}
            />
          </section>
        )}
      </article>
      <nav className="mt-4">
        <Link href="/projects">← Back to Projects</Link>
      </nav>
    </Layout>
  );
}
