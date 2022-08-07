import React from "react";

export default function ProjectImage(props) {
  return (
    <div className="ProjectImage">
      <img src={props.url} alt="loopstudios desktop preview" />
    </div>
  );
}
