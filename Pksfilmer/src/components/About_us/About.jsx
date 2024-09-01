import React from 'react';
import AboutCard from '../../layouts/AboutCard';
import about from "../../assets/photo_for_website/about.png";
import abouts_1 from "../../assets/photo_for_website/abouts_1.png";
import abouts_2 from "../../assets/photo_for_website/abouts_2.png";
import abouts_3 from "../../assets/photo_for_website/abouts_3.png";
import abouts_4 from "../../assets/photo_for_website/abouts_4.png";
import abouts_5 from "../../assets/photo_for_website/abouts_5.png";
import abouts_6 from "../../assets/photo_for_website/abouts_6.png";
import abouts_7 from "../../assets/photo_for_website/abouts_7.png";
import abouts_8 from "../../assets/photo_for_website/abouts_8.png";



function About() {
  return (
    <section className="about">
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image Container */}
        <div 
          className="absolute top-0 left-0 w-full"
          style={{ 
            backgroundImage: `url(${about})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '85vh', // Adjust as needed
            zIndex: -1
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Slightly darker overlay */}
        </div>

        {/* Text Container */}
        <div 
          className="relative z-20 p-18 lg:px-20 text-white"
          style={{ marginTop: '19vh' }} // Adjust positioning if needed
        >
          <div className="text-down_left">
            <h2 className="text-4xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(1, 1, 1, 1)' }}>
              ABOUT  PKSFILMER  
            </h2>
            <p className="text-lg" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' }}>
            <span className="text-yellow-400 text-8xl">“</span>
              Since 2017, we have been functioning as a team. However, each of our teammates has come across an experience that goes
              further than that. We photograph the unique moment
              s in your life that make you smile. We provide evergreen memories
              for our clients to treasure for the rest of their life with our amazing photography.
            </p>
          </div>
        </div>
      </div>

      {/* Add the following section with black transparent background */}
      <div className="bg-black  text-white py-16 px-8 lg:px-32" style={{ marginTop: '-15vh' }}>
        <div className="text-left mb-12">
          <h2 className="text-5xl font-bold mb-4">We Love To Create Memories</h2>
          <p className="text-lg leading-relaxed max-w-18xl mx-auto">
            <span className="text-yellow-400 text-8xl">“</span>
            Photography gives our precious moments a whole new meaning. 
            We may share, cherish, and remember the timeless memories recorded by the lenses for the rest of our lives.
          
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center">
          {/* Our Story */}
          <div className="text-center max-w-xs mb-12 lg:mb-0">
            <div className="text-6xl mb-4">😍</div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-base">
              The works of the great Raghu Rai, Henri Cartier-Bresson, André Kertész, Ansel Adams, and Willy Ronis have always been fascinating to us. And this inspired us to set our journey of The Aartistry, in 2017.
            </p>
          </div>

          {/* Our Passion */}
          <div className="text-center max-w-xs mb-12 lg:mb-0">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-2xl font-semibold mb-4">Our Passion</h3>
            <p className="text-base">
              We are passionate about learning and uncovering various dimensions in the world of photography and videography. We passionately nurture our capabilities by attending workshops and learning sessions.
            </p>
          </div>

          {/* Our Mission */}
          <div className="text-center max-w-xs">
            <div className="text-6xl mb-4">🖼️</div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-base">
              We recognize the value of establishing a trustworthy and cooperative connection with our clients. Having a close relationship with our subject enables us to get the finest shots.
            </p>
            <h1>Vivvek passing the test</h1>
          </div>
        </div>
      </div>

      {/* Existing AboutCard Section */}
      <div className="flex flex-wrap gap-2 justify-center">
        <AboutCard img={abouts_1} />
        <AboutCard img={abouts_2} />
        <AboutCard img={abouts_3} />
        <AboutCard img={abouts_4} />
        <AboutCard img={abouts_5} />
        <AboutCard img={abouts_6} />
        <AboutCard img={abouts_7} />
        <AboutCard img={abouts_8} />
       
      </div>
    </section>
  );
}

export default About;
