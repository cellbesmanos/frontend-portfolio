import React from "react";
import "./Project.css";

export default function Project(props) {
  if (!props.technologies) {
  }

  return (
    <article className="Project flow">
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
            "No technologies included."}
        </p>
      </section>

      <section className="Project__highlights flow">
        <h3 className="uppercase text-white fw-600 letter-spacing-1">
          Highlights
        </h3>

        <ul className="letter-spacing-3 flow">
          {/* if highlights exist render highlights else render fallback */}
          {(props.highlights &&
            props.highlights.map((highlight) => <li>{highlight}</li>)) ||
            "No highlights included"}
        </ul>
      </section>
    </article>
  );
}
