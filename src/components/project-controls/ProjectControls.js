import React from "react";
import "./ProjectControls.css";

export default function ProjectControls() {
  return (
    <div
      className="ProjectControls flex"
      aria-label="projects list"
      role="tablist"
    >
      <button
        className="ProjectControl"
        aria-selected={true}
        aria-controls="tab name here"
        role="tab"
      >
        <span className="sr-only">description here</span>
      </button>
      <button
        className="ProjectControl"
        aria-selected={false}
        aria-controls="tab name here"
        role="tab"
      >
        <span className="sr-only">description here</span>
      </button>
      <button
        className="ProjectControl"
        aria-selected={false}
        aria-controls="tab name here"
        role="tab"
      >
        <span className="sr-only">description here</span>
      </button>
    </div>
  );
}
