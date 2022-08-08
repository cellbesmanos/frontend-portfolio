import React from "react";

import ProjectImage from "../project-image/ProjectImage";
import ProjectContent from "../project-content/ProjectContent";

export default function Project(props) {
  return (
    <>
      <ProjectImage url={"/assets/images/desktop-preview.jpg"} />

      <ProjectContent
        id={props.id}
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
    </>
  );
}
