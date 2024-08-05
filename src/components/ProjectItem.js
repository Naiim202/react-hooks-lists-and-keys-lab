
// ProjectItem.js
import React from 'react';

function ProjectItem({ project }) {
  const { id, title, technologies } = project;

  return (
    <div className="project-item" key={id}>
      <h3>{title}</h3>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;