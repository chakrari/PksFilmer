import React, { createContext, useContext, useState } from 'react';

const CarouselContext = createContext();

export const useCarousel = () => useContext(CarouselContext);

export const CarouselProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const value = {
    currentSlide,
    setCurrentSlide,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};
