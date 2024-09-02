import React, { useState } from 'react';

const calculateBIPVPotential = (buildingData, solarIrradiance) => {
  const potential = buildingData.surfaces.map(surface => {
    const area = surface.width * surface.height;
    const energy = area * solarIrradiance * surface.exposureFactor;
    return energy;
  });

  return potential.reduce((total, current) => total + current, 0);
};

const BIPVPotential = () => {
  const [solarIrradiance, setSolarIrradiance] = useState(500); // Default value
  const [buildingData, setBuildingData] = useState({
    surfaces: [
      { width: 10, height: 20, exposureFactor: 0.8 }, // Example default surface
    ],
  });
  const [potential, setPotential] = useState(0);

  const handleInputChange = (index, field, value) => {
    const updatedSurfaces = [...buildingData.surfaces];
    updatedSurfaces[index][field] = value;
    setBuildingData({ surfaces: updatedSurfaces });
  };

  const handleCalculate = () => {
    const calculatedPotential = calculateBIPVPotential(buildingData, solarIrradiance);
    setPotential(calculatedPotential);
  };

  return (
    <div>
      <h2>BIPV Potential Calculator</h2>

      {/* Solar Irradiance Input */}
      <div>
        <label>Solar Irradiance (W/m²): </label>
        <input
          type="number"
          value={solarIrradiance}
          onChange={(e) => setSolarIrradiance(Number(e.target.value))}
        />
      </div>

      {/* Surface Input for Building Data */}
      <h3>Building Surfaces</h3>
      {buildingData.surfaces.map((surface, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <label>Surface {index + 1} Width (m): </label>
          <input
            type="number"
            value={surface.width}
            onChange={(e) => handleInputChange(index, 'width', Number(e.target.value))}
          />

          <label> Height (m): </label>
          <input
            type="number"
            value={surface.height}
            onChange={(e) => handleInputChange(index, 'height', Number(e.target.value))}
          />

          <label> Exposure Factor: </label>
          <input
            type="number"
            value={surface.exposureFactor}
            onChange={(e) => handleInputChange(index, 'exposureFactor', Number(e.target.value))}
            step="0.01"
          />
        </div>
      ))}

      <button onClick={handleCalculate}>Calculate Potential</button>

      {/* Display Result */}
      <h3>Total BIPV Potential: {potential} kWh</h3>
    </div>
  );
};

export default BIPVPotential;
