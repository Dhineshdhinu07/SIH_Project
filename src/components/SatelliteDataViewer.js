import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SatelliteDataViewer = ({ onLoadData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://example.com/satellite-data-endpoint')
      .then(response => {
        setData(response.data);
        onLoadData(response.data); // Pass data to parent component
      })
      .catch(error => console.error('Error fetching satellite data:', error));
  }, [onLoadData]);

  return (
    <div>
      <h2>Satellite Data</h2>
      {data ? <p>Data loaded!</p> : <p>Loading data...</p>}
    </div>
  );
};

export default SatelliteDataViewer;
