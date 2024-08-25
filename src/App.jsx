import { Canvas } from '@react-three/fiber';
import React from 'react';
import"./style.css";

// import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from '@react-three/drei';

import Cyl from "./Cyl";

const App = () => {
  
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Cyl />

    </Canvas>
  );
}
export default App
