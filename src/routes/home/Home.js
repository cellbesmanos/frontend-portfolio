import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <main className="Home grid-container grid-container--home">
      <article className="Home__content flow">
        <header className="text-white uppercase fs-500 fw-500">
          <h1 className="Home__content-heading">
            Hi, I am
            <span className="block fs-600 fw-600 letter-spacing-2">
              Christian Lhie Besmanos
            </span>
          </h1>
        </header>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          ipsum tenetur nulla rerum ea, provident accusamus incidunt pariatur
          similique.
        </p>

        <a
          href="/#"
          className="block uppercase fw-600 letter-spacing-1 text-gradient"
        >
          View projects
        </a>
      </article>

      <div>
        <p>
          or <span className="sr-only">visit my other social links</span>
        </p>

        <div className="flex">
          <a
            href="https://github.com/cellbesmanos"
            target="_blank"
            rel="noreferrer"
            aria-label="my github profile"
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
            aria-label="my linkedin profile"
          >
            <img
              aria-hidden="true"
              src="/assets/logos/linkedin-logo.svg"
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
