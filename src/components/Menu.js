import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Contact from '../pages/Contact';
import Navbar from './Navbar';

export default function Menu() {
  return (
    <><Navbar />
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  )
}
