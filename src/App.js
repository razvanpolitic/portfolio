import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import './vendor/aos/aos.css'
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/bootstrap-icons/bootstrap-icons.css'
import './vendor/boxicons/css/boxicons.min.css'
import './vendor/glightbox/css/glightbox.min.css'
import './vendor/swiper/swiper-bundle.min.css'
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/CV';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
        <Sidebar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/CV" element={<Resume />} />
            <Route path="/ProjectItem" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
