import React from 'react';
import { projectsData } from '../data/Data';

export default function About() {
  return (
    <section>
      {projectsData.map(({ img, name, des, projectLink }, index) => (
        <div className="container about-container-r" key={index}>
          <div className="about-left-r">
            <img src={img} alt={name} /> {/* Use the img attribute here */}
          </div>
          <div className="about-right-r">
            <h2>{name}</h2>
            <p>{des}</p>
            <a href={projectLink} className="btn">
              View Project
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
