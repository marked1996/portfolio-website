import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//components

//pages
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import AllProjects from "./assets/pages/AllProjects";
import Navbar from "./assets/components/header/navbar/Navbar";
import Stumble from "./assets/pages/project pages/Stumble";
import NftZoo from "./assets/pages/project pages/NftZoo";
import Setia from "./assets/pages/project pages/Setia";

function App() {
  //nav state
  const [isNavOpen, setIsNavOpen] = useState(false);
  //nav open close click
  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Navbar handleClick={handleClick} isNavOpen={isNavOpen} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<AllProjects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/stumbleapp" element={<Stumble />} />
        <Route exact path="/nftjungle" element={<NftZoo />} />
        <Route exact path="/setia" element={<Setia />} />
      </Routes>
    </>
  );
}

export default App;
