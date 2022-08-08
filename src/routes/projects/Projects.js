import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ProjectControls from "../../components/project-controls/ProjectControls";
import Project from "../../components/project/Project";
import Socials from "../../components/socials/Socials";
import "./Projects.css";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ name: "project1", id: 1 });
  }, [setSearchParams]);

  function updateActiveProject(id, name) {
    setSearchParams({ name, id });
  }

  return (
    <main className="Projects grid-container grid-container--projects">
      <Project />

      <ProjectControls
        projects={[
          { id: 1, title: "description" },
          { id: 2, title: "description" },
          { id: 3, title: "description" },
        ]}
        activeProject={parseInt(searchParams.get("id"))}
        updateActiveProject={updateActiveProject}
      />

      <Socials />
    </main>
  );
}
