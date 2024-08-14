import React, { useState } from 'react';
import Navbar from './components/Navbar_compo/Navbar';
import Carousel from './components/Carousel_compo/Carousel';
import Hero from './components/Hero_Section/Hero';
import Socialapps from './components/Hero_Section/Socialapps';

import cr1 from './assets/photo_for_website/cr1.jpg';
import cr2 from './assets/photo_for_website/cr2.jpg';
import cr3 from './assets/photo_for_website/cr3.jpg';
import cr4 from './assets/photo_for_website/cr4.jpg';

const slides = [cr1, cr2, cr3, cr4];

const App = () => {
  const [isNavDialogOpen, setIsNavDialogOpen] = useState(false);

  const handleMenu = () => {
    setIsNavDialogOpen(!isNavDialogOpen);
  };

  return (
    <main className="App">
      <Navbar isNavDialogOpen={isNavDialogOpen} handleMenu={handleMenu} />
      <div className="relative z-0">
        <Carousel slides={slides} />
      </div>
      <div>
      <Hero />
      </div>
      <div>
      <Socialapps />
      </div>
    </main>
  );
};

export default App;
