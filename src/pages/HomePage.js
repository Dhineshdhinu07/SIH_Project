import React from 'react';
import SatelliteDataViewer from '../components/SatelliteDataViewer';
import ShadowSimulation from '../components/ShadowSimulation';
import BIPVPotential from '../components/BIPVPotential';

const HomePage = () => {
  return (
    <div>
      <h1>BIPV Visualization</h1>
      <SatelliteDataViewer />
      <ShadowSimulation />
      <BIPVPotential/>
    </div>
  );
};

export default HomePage;
