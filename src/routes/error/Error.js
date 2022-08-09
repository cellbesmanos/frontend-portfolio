import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Error.css";

export default function Error() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="Error grid-container grid-container--error"
    >
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
    </motion.main>
  );
}
