import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { projects, getProject } from "../../project-data";

import ProjectImage from "../../components/project-image/ProjectImage";
import ProjectContent from "../../components/project-content/ProjectContent";
import ProjectControls from "../../components/project-controls/ProjectControls";
import Project from "../../components/project/Project";
import Socials from "../../components/socials/Socials";
import "./Projects.css";

export default function Projects() {
  const [, setSearchParams] = useSearchParams();
  const [activeProject, setActiveProject] = useState(() => getProject(0));

  useEffect(() => {
    setSearchParams({ name: activeProject.title, id: activeProject.id });
  }, [setSearchParams, activeProject.title, activeProject.id]);

  function updateActiveProject(id, name) {
    setSearchParams({ name, id });
    setActiveProject(() => getProject(id));
  }

  return (
    <main className="Projects grid-container grid-container--projects">
      <Project>
        <ProjectImage url={activeProject.image} alt={activeProject.title} />

        <ProjectContent
          id={activeProject.id}
          title={activeProject.title}
          description={activeProject.description}
          technologies={activeProject.technologies}
          highlights={activeProject.highlights}
          github={activeProject.github}
          url={activeProject.url}
        />
      </Project>

      <ProjectControls
        projects={projects.map((project) => {
          return {
            id: project.id,
            title: project.title,
          };
        })}
        activeProject={activeProject.id}
        updateActiveProject={updateActiveProject}
      />

      <Socials />
    </main>
  );
}
