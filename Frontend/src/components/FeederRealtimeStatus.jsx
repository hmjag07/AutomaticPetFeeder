// src/components/FeederRealtimeStatus.jsx
import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../Services/firebase';

const FeederRealtimeStatus = () => {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const statusRef = ref(database, 'feeders/feeder1/status');
    onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      setStatus(data || "No status");
    });
  }, []);

  return (
    <div>
      <h3>Feeder Status: {status}</h3>
    </div>
  );
};

export default FeederRealtimeStatus;
