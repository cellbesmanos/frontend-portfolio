import React from "react";
import "./ProjectContent.css";

export default function ProjectContent(props) {
  return (
    <article
      className="Project flow"
      id={`project-${props.id}-tab`}
      role="tabpanel"
      tabIndex="0"
    >
      <header className="flow">
        <h1 className="text-gradient fw-600 fs-600 letter-spacing-1">
          {props.title || "No title included"}
        </h1>
        <p className="letter-spacing-3">
          {props.description || "No description included"}
        </p>
      </header>

      <section className="flow">
        <h2 className="uppercase fw-500 letter-spacing-1">
          Technologies used:
        </h2>

        <p className="letter-spacing-3">
          {/* if technologies exist render technologies else render fallback */}
          {(props.technologies && props.technologies.join(", ")) ||
            "Hmm...there are no technologies?"}
        </p>
      </section>

      <section className="Project__highlights flow">
        <h3 className="uppercase text-white fw-500 letter-spacing-1">
          Highlights
        </h3>

        <ul className="letter-spacing-3 flow">
          {/* if highlights exist render highlights else render fallback */}
          {(props.highlights &&
            props.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))) || <p>Hmm...there are no highlights?</p>}
        </ul>
      </section>

      <section className="Project__links flex">
        <a
          className="text-white letter-spacing-3"
          href={props.github || "/"}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repository
        </a>
        <a
          className="text-white fw-600 letter-spacing-3"
          href={props.url || "/"}
          target="_blank"
          rel="noreferrer"
        >
          Visit Live Site
        </a>
      </section>
    </article>
  );
}
