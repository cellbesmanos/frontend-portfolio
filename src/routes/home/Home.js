import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Socials } from "../../components";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    const title = document.querySelector("title");

    title.textContent = "Assiduous | Home";

    return () => {
      title.textContent = "Assiduous";
    };
  }, []);

  return (
    <main className="Home grid-container grid-container--home">
      <article className="Home__content flow">
        <header className="text-white uppercase fs-500 fw-500">
          <h1 className="Home__content-heading">
            Hi, I am
            <span className="block fs-700 fw-600 letter-spacing-2">
              Christian Lhie Besmanos
            </span>
          </h1>
        </header>

        <p>
          I love cats, play games, read self-development books, and a big fan of
          amazing animations! Did I mentioned that{" "}
          <span className="linethrough">I love cats?</span> I am a{" "}
          <span className="text-white fw-500">frontend developer</span> and love{" "}
          <span className="text-white fw-500">accessible websites?</span>
        </p>

        <Link
          to="/projects"
          className="call-to-action block uppercase fw-600 letter-spacing-1 text-gradient"
        >
          View projects
        </Link>
      </article>

      <Socials />
    </main>
  );
}
