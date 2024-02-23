import React from 'react'
import { portfoliosData } from '../data/Data';
export default function Portfolios() {
  return (
    <section id="Portfolio">
      <div className="container portfolio-container">
        <h2>Latest Portfolio</h2>
        <div className="all-portfolios">
          {

            portfoliosData.map(({img, name, info, btnLink}, index) => {

return (

  <article key={index}>

<img src={img} alt="" />

<div className="portfolio-info">

<h4>{name}</h4>
<small>  {info} </small>
<a href={btnLink} className="btn"> View   </a>
</div>

  </article>

)


            }
            )
          }
        </div>
      </div>
    </section>
  )
}