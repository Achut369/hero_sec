import React from 'react'
import {  useTexture } from '@react-three/drei';
import { BoxGeometry, Mesh } from 'three';
import * as THREE from "three";
const Cyl=()=> {
    let tex=useTexture("./Image.png");
  tex.needUpdate=true;
  console.log(tex);
  return (
    <mesh>
  <cylinderGeometry args={[1, 1, 1, 30,30, true]} />
  <meshStandardMaterial map={tex} side={THREE.DoubleSide}/>
</mesh>
  )
};

export default Cyl;
