import { useState } from 'react'
import './App.css'
/* here we are going to import the componenets */
import About from './components/About'
import Brand from './components/Brand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolios from './components/Portfolios'
import Serivce from './components/Service'
import HappyClient from './components/HappyClient'
function App() {
  

  return (
    <>
      <div>
        
<Navbar />
<Header />
<Footer />
<Portfolios />
<About />
<Brand />
<Serivce />
<HappyClient />
<Contact />
      </div>
      
    </>
  )
}

export default App
