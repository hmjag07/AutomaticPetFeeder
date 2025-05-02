// src/Pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [feeders, setFeeders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeeders = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "https://your-backend-url/api/feeders", // Replace with your Railway backend URL
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFeeders(response.data);
      } catch (error) {
        console.error("Failed to fetch feeder data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeeders();
  }, []);

  if (loading) return <p>Loading your feeders...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Feeders</h1>
      {feeders.length === 0 ? (
        <p>No feeders found.</p>
      ) : (
        <ul>
          {feeders.map((feeder) => (
            <li key={feeder._id}>
              <h3>{feeder.name}</h3>
              <p>Food Remaining: {feeder.foodRemaining}%</p>
              <p>Last Fed: {new Date(feeder.lastFed).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;





