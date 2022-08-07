import React from "react";
import { Link } from "react-router-dom";

import Socials from "../../components/socials/Socials";
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

        <Link
          to="/projects"
          className="block uppercase fw-600 letter-spacing-1 text-gradient"
        >
          View projects
        </Link>
      </article>

      <Socials />
    </main>
  );
}
