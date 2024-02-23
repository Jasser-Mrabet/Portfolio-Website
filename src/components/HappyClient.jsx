import React from 'react'
import { happyclients } from '../data/Data'
import { FaLinkedin } from "react-icons/fa";

export default function HappyClient() {


  return (


    <div id='HappyClient'>


      <div className="happyClient-container">

        {

          happyclients.map(({ topic, info}, index) => {

            return (

              <div className="happyPart" key={index} >

                <h3>{topic}</h3>
                <h4>{info}</h4>

              </div>

            )



          })


        }


      </div>




    </div>



  )





}