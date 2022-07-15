import React from "react";
import Image from "next/image";

export default function Project({ project }) {
  console.log(project.cover_img_url);
  return (
    <a href={`/projects/${project.id}`} class="group">
      <div class="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={`/images/${project.id}/${project.cover_img_url}`}
          class="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 class="mt-1 text-lg font-medium">{project.title}</h3>
      <p class="mt-1 text-sm text-gray-700">{project.description}</p>
    </a>
  );
}
