import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { projects, getProject } from "../../project-data";

import {
  ProjectImage,
  ProjectContent,
  Project,
  ProjectControls,
  Socials,
} from "../../components";
import "./Projects.css";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeProject, setActiveProject] = useState(() => getProject(0));

  useEffect(() => {
    const title = document.querySelector("title");

    title.textContent = "Assiduous | Projects";

    return () => {
      title.textContent = "Assiduous";
    };
  }, []);

  useEffect(() => {
    const id = parseInt(searchParams.get("id"));

    if (id) {
      setActiveProject(() => getProject(id));
    } else {
      setActiveProject(() => getProject(0));
    }
  }, [searchParams]);

  function updateActiveProject(id, name) {
    setSearchParams({ name, id });
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
