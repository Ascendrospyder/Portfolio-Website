import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Coursework from './components/CourseWork';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Coursework />
      <Contact />
    </main>
  );
}

export default App;
