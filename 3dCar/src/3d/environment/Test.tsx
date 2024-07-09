import { useRef, useState, useEffect } from "react";
import {
  CubeCamera,
  PerspectiveCamera,
  OrbitControls,
  useTexture,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useFrame, useThree, useLoader,  } from "@react-three/fiber";
import * as THREE from "three";



import { LinearEncoding } from "@react-three/drei/helpers/deprecated";
//import { stone } from "../assets";
const Test = () => {
  const plane = useRef();
  useFrame((state, delta) => {
    //plane.current.material.map.offset.x += delta * 0.5;
    //plane.current.material.map.offset.x -= delta * 0.5;
  });
  const { camera, gl, scene } = useThree();
  
  useFrame(() => {
    scene.background = new THREE.Color("#000000");
  });


  const roughstone = useLoader(THREE.TextureLoader,
    stone
  )
// const normall = useLoader(THREE.TextureLoader,
//     normal
//   )
  
  useEffect(()=>{
      roughstone.wrapS = THREE.RepeatWrapping
      roughstone.wrapT = THREE.RepeatWrapping
      roughstone.repeat.set(5,5)

    roughstone.encoding = LinearEncoding
// normall.wrapS = THREE.RepeatWrapping
//       normall.wrapT = THREE.RepeatWrapping
//       normall.repeat.set(1,1)

//       normall.encoding = LinearEncoding
      
  

  },[])
  return (
    <>
     
      <OrbitControls
      target={[0,0,0]}
        makeDefault={true}
        enableZoom={true} // Tắt tính năng zoom nếu muốn
        enablePan={false}
      />
      <PerspectiveCamera fov={70} makeDefault={true} position={[10, 10, 10]} />
      {/* <CubeCamera
      makeDefault
      position={[10,10,10]}
      /> */}
      <axesHelper args={[50]} />

      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial metalness={[1]} roughness={[1]} 
        color={[1,1,1]}
        />
      </mesh>

      <mesh  position={[5, 1.5, 0]} castShadow>
        <boxGeometry args={[2,2,2]} />
        <MeshReflectorMaterial
          roughnessMap={roughstone}
          map={roughstone}
          dithering={true}
          blur={[1000,400]}
          mixBlur={30}
          mixStrength={80}
          resolution={1024}
          mirror={0.3}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.2}


        />
      </mesh>

      {/* <ambientLight intensity={[5]} color={[0.5,0.5,0.5]}/> */}
      <spotLight
        position={[10, 2, 0]}
        intensity={500}
        angle={[1]}
        penumbra={1}
        castShadow
      />

      <spotLight
        position={[0, 8, 0]}
        intensity={50}
        angle={[1]}
        penumbra={0.5}
        castShadow
      />
      {/*
      
    <spotLight
        position={[-8, 8, 0]}
        intensity={1500}
        angle={[1]}
        penumbra={0.5}
        castShadow
      />
    <spotLight
        position={[0, 8, 10]}
        intensity={1500}
        angle={[1]}
        penumbra={0.5}
        castShadow
      />
      <spotLight
        position={[0,3,0]}
        intensity={100}
      /> */}

      <mesh ref={plane} rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          roughnessMap={roughstone}
          map={roughstone}
          dithering={true}
          blur={[1000,400]}
          mixBlur={30}
          mixStrength={50}
          resolution={1024}
          mirror={0}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={10}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.2}
        />
        {/* <meshPhongMaterial 
        roughness={0.5}
        map={roughstone}
        roughnessMap={roughstone}
         side={THREE.DoubleSide}
          /> */}
      </mesh>
    </>
  );
};
export default Test;
