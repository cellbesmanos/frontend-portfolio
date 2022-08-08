import React from "react";
import "./ProjectControls.css";

export default function ProjectControls(props) {
  function renderProjectControls(id, title) {
    return (
      <button
        onClick={() => props.updateActiveProject(id, title)}
        key={id}
        className="ProjectControl"
        aria-selected={props.activeProject === id ? true : false}
        aria-controls={`project-${id}-tab`}
        role="tab"
      >
        <span className="sr-only">{title}</span>
      </button>
    );
  }

  return (
    <div
      className="ProjectControls flex"
      aria-label="projects list"
      role="tablist"
    >
      {props.projects.map((project) =>
        renderProjectControls(project.id, project.title)
      )}
    </div>
  );
}
