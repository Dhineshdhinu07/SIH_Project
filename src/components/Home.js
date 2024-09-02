import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to SunScape</h1>
      <p>Your platform for assessing BIPV potential in urban environments.</p>
      <Link to="/viewer"><button>Start Assessment</button></Link>
    </div>
  );
};

export default Home;
