import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolarIrradiance = ({ onSetIrradiance }) => {
  const [irradiance, setIrradiance] = useState(null);

  useEffect(() => {
    axios.get('https://api.solarirradiance.com/data')
      .then(response => {
        setIrradiance(response.data.irradiance);
        onSetIrradiance(response.data.irradiance);
      })
      .catch(error => console.error('Error fetching solar irradiance:', error));
  }, [onSetIrradiance]);

  return (
    <div>
      <h2>Solar Irradiance</h2>
      {irradiance !== null ? (
        <p>Current Irradiance: {irradiance} W/m²</p>
      ) : (
        <p>Loading irradiance data...</p>
      )}
    </div>
  );
};

export default SolarIrradiance;
