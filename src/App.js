import React from 'react';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Dropdown from './components/Dropdown';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalstyle';
import { useState } from 'react';
import About from './components/About';
import { AboutData } from './data/AboutData';
import Services from './components/Services';
import { ServiceData } from './data/ServiceData';
import Footer from './components/Footer';
import { FooterData } from './data/FooterData';
import Projects from './components/Projects';
import { ProjectsData } from './data/ProjectsData';
import NewItem from './components/NewItem';
import { NewItemData } from './data/NewItemData';
import Newsletter from './components/Newsletter';
import Info from './components/Info';
import { InfoData } from './data/InfoData';
import Others from './components/Others';
import { OthersData } from './data/OthersData';
import Reviews from './components/Reviews';
import { ReviewData } from './data/ReviewData';
import Contact from './components/Contact';

function App() {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Showcase slides={SliderData}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <About { ...AboutData}/>
      <NewItem { ...NewItemData} />
      <Info {...InfoData}  />
      <Projects {...ProjectsData} />
      <Services {...ServiceData}/>
      <Newsletter />
      <Reviews {...ReviewData} />
      <Others {...OthersData} />
      <Contact />
      <Footer {...FooterData}/>
    </>
  );
}

export default App;
