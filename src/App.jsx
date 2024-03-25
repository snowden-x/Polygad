import { useState } from 'react'
import Hero from './Hero'
import Header from './Header'
import Footer from './Footer'
import Products from './Products'
import Contact from './Contact'
import About from './About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>

  )
}

export default App