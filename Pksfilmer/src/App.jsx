// import React, { useState } from 'react';
// import Navbar from './components/Navbar_compo/Navbar';
// import Carousel from './components/Carousel_compo/Carousel';
// import Hero from './components/Hero_Section/Hero';
// import Socialapps from './components/Hero_Section/Socialapps';
// import About from './components/About_us/About';

// import cr1 from './assets/photo_for_website/cr1.jpg';
// import cr2 from './assets/photo_for_website/cr2.jpg';
// import cr3 from './assets/photo_for_website/cr3.jpg';
// import cr4 from './assets/photo_for_website/cr4.jpg';

// const slides = [cr1, cr2, cr3, cr4];

// const App = () => {
//   const [isNavDialogOpen, setIsNavDialogOpen] = useState(false);

//   const handleMenu = () => {
//     setIsNavDialogOpen(!isNavDialogOpen);
//   };

//   return (
//     <main className="App">
//       <Navbar isNavDialogOpen={isNavDialogOpen} handleMenu={handleMenu} />
//       <div className="relative z-0">
//         <Carousel slides={slides} />
//       </div>
//       <div>
//       <Hero />
//       </div>
//       <div>
//       <Socialapps />
//       </div>
//       <div>
//       <About />
//       </div>
//     </main>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar_compo/Navbar';
import Carousel from './components/Carousel_compo/Carousel';
import Hero from './components/Hero_Section/Hero';
import Socialapps from './components/Hero_Section/Socialapps';
import About from './components/About_us/About';
import { CarouselProvider } from './components/Carousel_compo/CarouselContext'

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
    <Router>
      <CarouselProvider>
      <Navbar isNavDialogOpen={isNavDialogOpen} handleMenu={handleMenu} />
      <main className="App">
        <Routes>
          <Route path="/" element={
            <>
              <div className="relative z-0">
                <Carousel slides={slides} />
              </div>
              <Hero />
              <Socialapps />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      </CarouselProvider>
    </Router>
  );
};

export default App;
