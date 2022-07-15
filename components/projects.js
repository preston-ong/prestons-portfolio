import React from "react";
import Project from "./project";
import { getProjectData } from "../lib/projects";

export async function getStaticProps() {
  const res = await getProjectData();
  const projects = await res.json();
  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  return (
    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {projects ? <Project /> : <div>No Projects available</div>}
    </div>
  );
}
