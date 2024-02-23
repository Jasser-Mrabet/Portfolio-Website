import React from 'react';
const Navbar = () => {
  return (
    <nav>
      <div className='container nav-container'>
        <a href="#Home" className='logo'>
          <div className="point"> J </div> Jasser Mrabet
        </a>
        <ul className="navlinks">
          <li> <a href="#Home">Home</a> </li>
          <li> <a href="#About">About</a> </li>
          <li> <a href="#Services">Services</a> </li>
          <li> <a href="#Portfolio">Portfolio</a> </li>
        </ul>
        <div className="nav-right">
          <a href="#Contact" className="btn">Contact</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
