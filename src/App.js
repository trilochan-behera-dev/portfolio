import './App.css';
import Hero from './components/Hero';
import Layout from './components/Layout/Layout';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import Skill from './components/Skill';
import Certificates from './components/Certificates';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdCall, MdOutgoingMail } from 'react-icons/md';
import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io';
import SocialMenu from './components/SocialMenus';

function App() {
  return (
    <Layout>
      <Hero />
      <Skill/>
      <Feature />
      <Pricing />
      <Certificates/>
      
    </Layout>

  );
}

export default App;
