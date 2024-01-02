import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/cities');
        setCities(response.data);
      } catch (error) {
        console.error('Error fetching city list:', error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div>
      <h1>City List</h1>
      <ul>
        {Object.entries(cities).map(([city, count]) => (
          <li key={city}>{`${city}: ${count} customers`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
