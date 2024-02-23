import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default function Contact() {

  return (

    <section id='Contact'>


      <div className="container contact-container">


        <a href="#" className="contact-logo">J</a>
        <h2>Contact me</h2>
        <p>
          I am passionate about collaborating on projects and assisting you with your coding endeavors. Whether you're looking to enhance your codebase or seeking guidance in UI/UX design, I am here to help. Let's engage in meaningful discussions to elevate your projects to new heights.
        </p>
        <div className="social">
          <a href="">     <FaLinkedin /></a>
          <a href="mailto:">    <IoMdMail /></a>
          <a href="">     <FaTwitter /></a>
          <a href="">     <FaGithub /></a>




        </div>



      </div>



    </section>




  )





}