import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../Services/firebase';

const Dashboard = () => {
  const [feeders, setFeeders] = useState({});
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      const unsubscribe = subscribeFeeders(userId, data => setFeeders(data || {}));
      return () => unsubscribe();
    }
  }, [userId]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Feeders (Real-Time)</h2>
      {Object.entries(feeders).map(([id, f]) => (
        <div key={id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h3>{f.name}</h3>
          <p>Status: {f.status}</p>
          <p>Last Fed: {new Date(f.lastFed).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
