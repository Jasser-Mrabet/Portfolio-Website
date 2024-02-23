import React from 'react';
import { homeData } from '../data/Data';
import { FaArrowRight } from 'react-icons/fa';

export default function Header() {
  return (
    <section id="Home">
      {homeData.map(({ img, info, clip1, clip2, clip3, btnLink }, index) => (
        <div className="container header-container" key={index}>
          <div className="header-left">
            <h1>
              {clip1} <br />
              {clip2} <br />
              {clip3} <br />
            </h1>
            <p>{info}</p>
            <a href={btnLink} className="btn">
              LET's Talk <FaArrowRight />
            </a>
          </div>




          <div className="header-image">
            <img src={img} alt="Header Image" />
          </div>
          <div className="header-style">JASSER MRABET</div>
        </div>
      ))}
    </section>
  );
}
