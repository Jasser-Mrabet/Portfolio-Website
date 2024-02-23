import React from 'react';
import { aboutData } from "../data/Data";

export default function About() {
  return (
    <section>
      {aboutData.map(({ yt, infoText, link, linkText, aboutPara }, index) => (
        <div className="container about-container" key={index}>
          <div className="about-left">
            <div className="about-shape">
              <img src={yt} alt="" />
            </div>
            <img src={yt} alt="" />
            <div className="about-shape">
              <img src={yt} alt="" />
            </div>
          </div>
          <div className="about-right">
            <h2>Bit about me</h2>
            <p>{infoText}</p>
            <p>{aboutPara}</p>
            <a href={link} download className="btn">
              Download cv
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
