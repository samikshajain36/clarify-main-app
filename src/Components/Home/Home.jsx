import React from 'react'
import Navbar from '../Navbar/Navbar'
import Tagline from './Introductory/Introductory'
import Feature from './Feature/Feature'
import Pricing from '../Plans/Pricing'
import Subscribe from './Subscribe/Subscribe'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()

  return (
    <>
      {localStorage.getItem('token') ?
        navigate('/dashboard')
        : <>
          <Navbar />
          <Tagline />
          <Feature />
          <Pricing />
          <Subscribe />
          <Contact />
          <Footer />
        </>
      }
    </>
  )
}

export default Home