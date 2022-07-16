import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const typeToFaIcon = {
  github: faGithub,
  twitter: faTwitter,
  linkedin: faLinkedin,
};

export default function SocialLink({ type, url, width, height }) {
  return (
    <a className="text-slate-500 mr-2 inline-block" href={url} target="_blank">
      <FontAwesomeIcon icon={typeToFaIcon[type]} style={{ width, height }} />
    </a>
  );
}
