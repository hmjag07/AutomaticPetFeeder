// src/components/LandingHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import petBg from '../assets/pets-bg.jpg'; // Ensure image exists

const LandingHero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url(${petBg})`,
        backgroundSize: 'cover',
        padding: '100px 20px',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <h1>Welcome to the Automated Pet Feeder</h1>
      <p>Feed your pets on time, every time – automatically.</p>
    </motion.div>
  );
};

export default LandingHero;
