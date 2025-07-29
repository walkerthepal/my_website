import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import TechnicalSkills from './pages/TechnicalSkills';
import Artwork from './pages/Artwork';
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
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="technical-skills">
          <TechnicalSkills />
        </section>
        <section id="artwork">
          <Artwork />
        </section>
      </main>
    </div>
  );
}

export default App;
