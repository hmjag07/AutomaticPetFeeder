import React from 'react';
import LandingHero from '../components/LandingHero';

const Landing = () => (
  <>
    <LandingHero />
    <section style={{ padding: '2rem' }}>
      <h2>Features</h2>
      <ul>
        <li>Scheduled Feeding</li>
        <li>Real-time Status Updates</li>
        <li>Mobile & Web Access</li>
        <li>Custom Notifications</li>
      </ul>
    </section>
  </>
);

export default Landing;
