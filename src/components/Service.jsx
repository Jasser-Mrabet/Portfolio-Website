import React from 'react';
import { servicesData } from '../data/Data';

export default function Services() {
  return (
    <section id="Services">
      <h2>My Services</h2>
      <div className="services-container">
        {servicesData.map(({ img, serviceName, serviceInfo }, index) => (
          <article key={index}>
            <img src={img} alt="" />
            <h3>{serviceName}</h3>
            <p>{serviceInfo}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
