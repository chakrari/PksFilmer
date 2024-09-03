import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex xl:flerow, flex-col jsutify-center min-h-screen gap-10">
      <h1 className="text-2xl sm:text-2xl md:text-4xl text font-bold mt-12 sm:mt-16 mx-4 sm:mx-10 md:mx-40">
        PKS Photography
      </h1>
      <p className="text-lg leading-8 sm:max-w-sm ">
        We photograph the unique moments in your life that make you smile. We
        provide evergreen memories for our clients to treasure for the rest of
        their life with our amazing photography. Since 2017, we have been
        operating as a corporation. However, each of our photographers has
        documented a trip that goes beyond that. Through our photographs, we
        want to convey happiness.
      </p>
    </section>
  );
};

export default Hero;
