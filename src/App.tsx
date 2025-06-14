import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Artwork from './pages/Artwork';
import Projects from './pages/Projects';
import BackgroundTransition from './components/BackgroundTransition';
import './App.css';

function App() {
  return (
    <div className="app">
      <BackgroundTransition />
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="artwork">
          <Artwork />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
