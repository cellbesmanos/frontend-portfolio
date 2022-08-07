import React from "react";

import Socials from "../../components/socials/Socials";
import "./Projects.css";

export default function Projects() {
  return (
    <main className="Projects grid-container grid-container--projects">
      <div className="Project-image">
        <img
          src="/assets/images/desktop-preview.jpg"
          alt="loopstudios desktop preview"
        />
      </div>

      <article className="Project flow">
        <header className="flow">
          <h1 className="text-gradient fw-600 fs-600 letter-spacing-1">
            Loopstudios Landing Page
          </h1>
          <p className="letter-spacing-3">
            A challenge from Frontend Mentor. This projects test someone’s
            knowledge of fundamental HTML and CSS concepts.
          </p>
        </header>

        <section className="flow">
          <h2 className="uppercase fw-500 letter-spacing-1">
            Technologies used:
          </h2>

          <p className="letter-spacing-3">HTML 5, CSS 3, Javascript</p>
        </section>

        <section className="flow">
          <h3 className="uppercase text-white fw-600 letter-spacing-1">
            Highlights
          </h3>

          <ul className="letter-spacing-3">
            <li>Lazy loading images through Intersection Observer</li>
            <li>Handling data from an API asynchronously</li>
            <li>React Hooks</li>
          </ul>
        </section>
      </article>

      <div
        className="Project-controls flex"
        aria-label="projects list"
        role="tablist"
      >
        <button role="tab">
          <span className="sr-only">description here</span>
        </button>
        <button role="tab">
          <span className="sr-only">description here</span>
        </button>
        <button role="tab">
          <span className="sr-only">description here</span>
        </button>
      </div>

      <Socials />
    </main>
  );
}
