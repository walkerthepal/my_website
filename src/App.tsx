import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Artwork from './pages/Artwork';
import Projects from './pages/Projects';
import About from './pages/About';
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
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="artwork">
          <Artwork />
        </section>
      </main>
    </div>
  );
}

export default App;
