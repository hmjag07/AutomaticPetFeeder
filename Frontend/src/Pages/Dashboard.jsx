import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../Services/firebase';
import FeederMap from '../components/FeederMap';

const Dashboard = () => {
  const [feeders, setFeeders] = useState([]);

  useEffect(() => {
    const feederRef = ref(database, 'feeders');
    onValue(feederRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const feederArray = Object.keys(data).map(key => ({
          _id: key,
          ...data[key]
        }));
        setFeeders(feederArray);
      }
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📡 Feeder Dashboard</h2>

      {feeders.some(f => f.needsRefill) && (
        <div style={{ background: '#ffdddd', padding: '10px', border: '1px solid red' }}>
          🚨 One or more feeders need a refill!
        </div>
      )}

      <FeederMap feeders={feeders} />
    </div>
  );
};

export default Dashboard;
