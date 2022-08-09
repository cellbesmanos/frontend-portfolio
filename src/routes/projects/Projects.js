import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  const { id } = useParams();
  const navigate = useNavigate();
  const activeProject = useRef(getProject(parseInt(id)));

  useEffect(() => {
    const title = document.querySelector("title");

    title.textContent = "Assiduous | Projects";
  }, []);

  useEffect(() => {
    activeProject.current = getProject(parseInt(id));
  }, [id]);

  function updateActiveProject(id, name) {
    navigate(`/projects/${id}/${name}`, { replace: true });
  }

  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="Projects grid-container grid-container--projects"
    >
      <Project>
        <ProjectImage
          url={activeProject.current.image}
          alt={activeProject.current.title}
        />

        <ProjectContent
          id={activeProject.current.id}
          title={activeProject.current.title}
          description={activeProject.current.description}
          technologies={activeProject.current.technologies}
          highlights={activeProject.current.highlights}
          github={activeProject.current.github}
          url={activeProject.current.url}
        />
      </Project>

      <ProjectControls
        projects={projects.map((project) => {
          return {
            id: project.id,
            title: project.title,
          };
        })}
        activeProject={parseInt(id)}
        updateActiveProject={updateActiveProject}
      />

      <Socials />
    </motion.main>
  );
}
