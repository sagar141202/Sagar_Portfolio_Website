
import React, { Suspense, useMemo, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  Decal,
} from "@react-three/drei";
import * as THREE from "three";

function createEmojiTexture(emoji) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "transparent";
  ctx.fillRect(0, 0, size, size);
  ctx.font = "200px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, size / 2, size / 2);
  return new THREE.CanvasTexture(canvas);
}

const Ball = ({ icon }) => {
  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fallback emoji texture
  const fallbackTexture = useMemo(() => createEmojiTexture("❓"), []);

  // Validate icon path and exclude SVG files (unsupported by TextureLoader)
  const isValidIconPath = typeof icon === "string" && icon.startsWith("/") && icon !== "/placeholder.svg" && !icon.toLowerCase().endsWith(".svg");

  // Conditionally load texture using useLoader only if valid path
  const texture = isValidIconPath ? useLoader(
    THREE.TextureLoader,
    icon,
    (loader) => {
      loader.manager.onError = () => {
        // no-op, fallback will be used
      };
    }
  ) : null;

  // Determine which texture to use
  const finalTexture = useMemo(() => {
    // If icon is SVG or invalid path, use emoji texture fallback
    if (typeof icon === "string" && icon.toLowerCase().endsWith(".svg")) {
      return createEmojiTexture(icon);
    }
    if (isValidIconPath) {
      // If texture failed to load, use fallback
      if (!texture || !texture.image) {
        return fallbackTexture;
      }
      return texture;
    } else if (typeof icon === "string" && icon.trim().length > 0) {
      return createEmojiTexture(icon);
    } else {
      console.warn("Invalid or empty icon string, using fallback emoji");
      return fallbackTexture;
    }
  }, [icon, texture, fallbackTexture, isValidIconPath]);

  return (
    <Float
      speed={isMobile ? 0.8 : 1.75}
      rotationIntensity={isMobile ? 0.3 : 1}
      floatIntensity={isMobile ? 0.5 : 2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {finalTexture && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={finalTexture}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // Mobile detection for DPR adjustment
  const [isMobile, setIsMobile] = React.useState(false);
  const [webGLError, setWebGLError] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fallback component for when WebGL fails
  if (webGLError) {
    return (
      <div className="w-28 h-28 flex items-center justify-center bg-gray-800 rounded-lg border border-gray-600">
        <span className="text-2xl">⚡</span>
      </div>
    );
  }

  return (
    <Canvas
      dpr={isMobile ? 1 : [1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      onError={() => setWebGLError(true)}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
