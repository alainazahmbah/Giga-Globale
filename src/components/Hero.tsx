import React from 'react';
import heroImg from './images/hero_img.jpg'; // Adjust path if needed

const Hero: React.FC = () => {
  return (
    <section className="w-full h-[80vh] relative overflow-hidden">
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover hero-animate"
      />
    </section>
  );
};

export default Hero;
