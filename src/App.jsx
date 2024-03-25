import { useState,useEffect } from 'react'
import Hero from './Hero'
import Header from './Header'
import Footer from './Footer'
import Products from './Products'
import Contact from './Contact'
import About from './About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MapComponent from './MapComponent'
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  if (loading) {
    return <div className="loader"></div>; // This div will show the loading animation
  }



  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />

      </Routes>
      <MapComponent></MapComponent>
      <Footer />
    </Router>

  )
}

export default App
