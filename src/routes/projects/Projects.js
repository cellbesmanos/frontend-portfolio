import React from "react";

import ProjectImage from "../../components/project-image/ProjectImage";
import ProjectControls from "../../components/project-controls/ProjectControls";
import Socials from "../../components/socials/Socials";
import "./Projects.css";
import Project from "../../components/project/Project";

export default function Projects() {
  return (
    <main className="Projects grid-container grid-container--projects">
      <ProjectImage url={"/assets/images/desktop-preview.jpg"} />

      <Project
        title={"Loopstudios Landing Page"}
        description={
          "A challenge from Frontend Mentor. This projects test someone’s knowledge of fundamental HTML and CSS concepts."
        }
        technologies={["HTML 5", "CSS 3", "Javascript"]}
        highlights={[
          "Lazy loading images through Intersection Observer",
          "Handling data from an API asynchronously",
          "React Hooks",
        ]}
      />

      <ProjectControls />

      <Socials />
    </main>
  );
}
