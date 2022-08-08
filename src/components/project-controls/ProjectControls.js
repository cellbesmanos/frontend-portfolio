import React, { useEffect, useState } from "react";
import "./ProjectControls.css";

export default function ProjectControls(props) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    // DO NOT REMOVE IF STATEMENT
    // prevents the app from breaking when Projects route mounts for the first time
    if (props.activeProject) {
      setFocusedIndex(props.activeProject);
    }
  }, [props.activeProject, setFocusedIndex]);

  useEffect(() => {
    const nextFocusedControl = document.querySelector(
      `.ProjectControl[role='tab'][aria-controls="project-${focusedIndex}-tab"]`
    );

    nextFocusedControl.focus();
  }, [focusedIndex]);

  function setKeyboardNavigation(e) {
    const projectsLength = props.projects.length;
    const eventKeyCode = parseInt(e.keyCode);

    const leftArrowKeyCode = 37;
    const rightArrowKeyCode = 39;

    if (
      eventKeyCode === leftArrowKeyCode ||
      eventKeyCode === rightArrowKeyCode
    ) {
      if (eventKeyCode === leftArrowKeyCode) {
        // if next index is out of bounds move
        // index to the other end of the array
        // else take next index
        if (focusedIndex - 1 < 0) {
          setFocusedIndex(projectsLength - 1);
        } else {
          setFocusedIndex((prev) => prev - 1);
        }
      }

      if (eventKeyCode === rightArrowKeyCode) {
        // similar to leftArrowKeyCode
        if (focusedIndex + 1 >= projectsLength) {
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => prev + 1);
        }
      }
    }
  }

  function renderProjectControl(id, title) {
    return (
      <button
        onClick={() => props.updateActiveProject(id, title)}
        onKeyUp={(e) => setKeyboardNavigation(e)}
        key={id}
        className="ProjectControl"
        role="tab"
        tabIndex={focusedIndex === id ? 0 : -1}
        aria-selected={props.activeProject === id ? true : false}
        aria-controls={`project-${id}-tab`}
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
        renderProjectControl(project.id, project.title)
      )}
    </div>
  );
}
