import React from 'react';
import { motion } from 'framer-motion';
import petFeederBg from '../assets/feeder-bgm.png'; // Check this path

const LandingHero = () => (
  <div style={{
    background: `url(${petFeederBg}) center/cover no-repeat`,
    height: '80vh', position: 'relative'
  }}>
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ color: '#fff', textAlign: 'center', paddingTop: '20vh', fontSize: '4rem' }}
    >
      Automated Pet Feeder
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      style={{ color: '#fff', textAlign: 'center', fontSize: '1.5rem' }}
    >
      Feed your pet anytime, anywhere
    </motion.p>
  </div>
);

export default LandingHero;
