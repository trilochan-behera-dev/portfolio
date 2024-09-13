import './App.css';
import Hero from './components/Hero';
import Layout from './components/Layout/Layout';
import Project from './components/Project';
import Skill from './components/Skill';
import Certificates from './components/Certificates';
import About from './components/about';
import Experience from './components/Experience';
function App() {
  return (
    <Layout>
      <Hero />
      <About/>
      <Skill/>
      <Experience />
      {/* <Project /> */}
      <Certificates/>
    </Layout>

  );
}

export default App;
