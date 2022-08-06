import React from "react";
import "./Socials.css";

export default function Socials() {
  return (
    <div className="Socials">
      <div className="Socials__icons flex">
        <a
          href="https://github.com/cellbesmanos"
          target="_blank"
          rel="noreferrer"
          aria-label="github profile"
        >
          <img
            aria-hidden="true"
            src="/assets/logos/github-logo.svg"
            alt="github logo"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/cellbesmanos/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin profile"
        >
          <img
            aria-hidden="true"
            src="/assets/logos/linkedin-logo.svg"
            alt="linkedin logo"
          />
        </a>
      </div>
    </div>
  );
}
