import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model({ onCubeClick }) {
  // For Vite, use import.meta.env.BASE_URL instead of process.env.PUBLIC_URL
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}ThreeD.glb`);

  useEffect(() => {
    // Traverse through all objects in the scene
    scene.traverse((child) => {
      if (child.isMesh && child.name === "Cube") {
        // Make the cube clickable
        child.userData.clickable = true;
      }
    });
  }, [scene]);

  const handleClick = (event) => {
    event.stopPropagation();

    // Check if clicked object is the cube
    if (event.object.userData.clickable && event.object.name === "Cube") {
      // Notify parent component about the click
      onCubeClick();
    }
  };

  return <primitive object={scene} onClick={handleClick} />;
}

function ThreeDimension() {
  const [lightOn, setLightOn] = useState(true);
  const spotlightRef = useRef();

  const handleCubeClick = () => {
    // Turn light off
    setLightOn(false);

    // Turn light back on after 3 seconds
    setTimeout(() => {
      setLightOn(true);
    }, 3000);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#1a1a1a" }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        {/* No ambient light - complete darkness without spotlight */}
        <ambientLight intensity={0} />

        {/* Spotlight shining on the cube */}
        {lightOn && (
          <spotLight
            ref={spotlightRef}
            position={[0, 6, 2]}
            angle={0.5}
            penumbra={0.3}
            intensity={10}
            color={0xffffff}
            castShadow
            distance={15}
            decay={2}
          />
        )}

        <Suspense fallback={null}>
          <Model onCubeClick={handleCubeClick} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
        />

        <gridHelper args={[20, 20]} />
      </Canvas>

      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          color: "white",
          fontFamily: "monospace",
          fontSize: "14px",
          background: "rgba(0,0,0,0.7)",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0" }}>Blender Scene Import</h3>
        <p style={{ margin: "5px 0" }}>🖱️ Click and drag to rotate</p>
        <p style={{ margin: "5px 0" }}>💡 Click the cube to turn light off!</p>
        <p style={{ margin: "5px 0" }}>
          ✨ Light comes back on after 3 seconds
        </p>
      </div>
    </div>
  );
}

export default ThreeDimension;
