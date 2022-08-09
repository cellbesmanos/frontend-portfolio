import React from "react";
import { Link } from "react-router-dom";

import "./Error.css";

export default function Error() {
  return (
    <main className="Error grid-container grid-container--error">
      <article className="flow">
        <h1 className="text-gray fs-500">
          <span className="block text-white fw-600 letter-spacing-3 fs-700">
            404
          </span>
          Page not found.
        </h1>

        <p>Whoops! There is nothing in here. </p>

        <Link
          className="call-to-action fw-600 letter-spacing-3 text-gradient"
          to={"/"}
        >
          Back to home?
        </Link>
      </article>
    </main>
  );
}
