import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, AdaptiveDpr, AdaptiveEvents, Preload } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Manifold Geometry ─── */
function MathManifold() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const scrollProgress = useRef({ value: 0 });
  const { viewport } = useThree();

  // Responsive scale & detail
  const isMobile = viewport.width < 6;
  const baseScale = isMobile ? 0.7 : 1;
  const segmentsX = isMobile ? 64 : 128;
  const segmentsY = isMobile ? 16 : 32;

  // Create morphable geometry
  const { basePositions, torusPositions, icoPositions, spherePositions } = useMemo(() => {
    const torusKnot = new THREE.TorusKnotGeometry(1, 0.35, segmentsX, segmentsY, 2, 3);
    const ico = new THREE.IcosahedronGeometry(1.4, isMobile ? 2 : 4);
    const sphere = new THREE.SphereGeometry(1.2, isMobile ? 32 : 64, isMobile ? 32 : 64);
    const octahedron = new THREE.OctahedronGeometry(1.3, 3);

    // Normalize vertex counts by using the torus knot as base
    const count = torusKnot.attributes.position.count;

    const getPositions = (geo: THREE.BufferGeometry, targetCount: number) => {
      const pos = geo.attributes.position.array as Float32Array;
      const result = new Float32Array(targetCount * 3);
      for (let i = 0; i < targetCount; i++) {
        const srcIdx = (i % (pos.length / 3)) * 3;
        result[i * 3] = pos[srcIdx];
        result[i * 3 + 1] = pos[srcIdx + 1];
        result[i * 3 + 2] = pos[srcIdx + 2];
      }
      return result;
    };

    return {
      basePositions: new Float32Array(torusKnot.attributes.position.array),
      torusPositions: new Float32Array(torusKnot.attributes.position.array),
      icoPositions: getPositions(ico, count),
      spherePositions: getPositions(sphere, count),
    };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(1, 0.35, segmentsX, segmentsY, 2, 3);
    return geo;
  }, [segmentsX, segmentsY]);

  // GSAP scroll binding
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        onUpdate: (self) => {
          scrollProgress.current.value = self.progress;
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // Per-frame morph + rotation
  useFrame((state) => {
    if (!meshRef.current || !wireRef.current || !groupRef.current || !materialRef.current) return;

    const t = scrollProgress.current.value;
    const time = state.clock.elapsedTime;

    // Morph between shapes based on scroll
    const positions = geometry.attributes.position.array as Float32Array;
    const count = positions.length / 3;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      let targetX: number, targetY: number, targetZ: number;

      if (t < 0.33) {
        // Torus Knot → Icosahedron
        const phase = t / 0.33;
        const ease = phase * phase * (3 - 2 * phase); // smoothstep
        targetX = THREE.MathUtils.lerp(torusPositions[i3], icoPositions[i3], ease);
        targetY = THREE.MathUtils.lerp(torusPositions[i3 + 1], icoPositions[i3 + 1], ease);
        targetZ = THREE.MathUtils.lerp(torusPositions[i3 + 2], icoPositions[i3 + 2], ease);
      } else if (t < 0.66) {
        // Icosahedron → Sphere
        const phase = (t - 0.33) / 0.33;
        const ease = phase * phase * (3 - 2 * phase);
        targetX = THREE.MathUtils.lerp(icoPositions[i3], spherePositions[i3], ease);
        targetY = THREE.MathUtils.lerp(icoPositions[i3 + 1], spherePositions[i3 + 1], ease);
        targetZ = THREE.MathUtils.lerp(icoPositions[i3 + 2], spherePositions[i3 + 2], ease);
      } else {
        // Sphere → Torus Knot (loop back)
        const phase = (t - 0.66) / 0.34;
        const ease = phase * phase * (3 - 2 * phase);
        targetX = THREE.MathUtils.lerp(spherePositions[i3], torusPositions[i3], ease);
        targetY = THREE.MathUtils.lerp(spherePositions[i3 + 1], torusPositions[i3 + 1], ease);
        targetZ = THREE.MathUtils.lerp(spherePositions[i3 + 2], torusPositions[i3 + 2], ease);
      }

      // Add subtle breathing wave
      const wave = Math.sin(time * 0.5 + i * 0.01) * 0.02;
      positions[i3] = targetX + wave;
      positions[i3 + 1] = targetY + wave;
      positions[i3 + 2] = targetZ;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    // Smooth rotation
    groupRef.current.rotation.y = time * 0.08 + t * Math.PI * 2;
    groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.15 + t * 0.5;
    groupRef.current.rotation.z = Math.cos(time * 0.1) * 0.05;

    // Dynamic position — float up slightly as user scrolls
    groupRef.current.position.y = Math.sin(time * 0.3) * 0.1 + t * 0.3;

    // Material evolution — keep ghost-like throughout
    materialRef.current.metalness = 0.05 + t * 0.15;
    materialRef.current.roughness = 0.3 - t * 0.05;
    materialRef.current.transmission = 0.85 - t * 0.1;
    // Lowered opacity to improve contrast against dark text
    materialRef.current.opacity = 0.05 + t * 0.05; 

    // Wireframe geometry updates automatically with the main geometry
  });

  return (
    <group ref={groupRef} scale={baseScale}>
      {/* Main frosted glass mesh — ghost-like so text always pops */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial
          ref={materialRef}
          color="#d0def0"
          metalness={0.08}
          roughness={0.4}
          transmission={0.9}
          thickness={1.2}
          ior={1.4}
          envMapIntensity={0.5}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={wireRef} geometry={geometry} scale={1.002}>
        <meshBasicMaterial color="#1A56DB" transparent opacity={0.05} wireframe />
      </mesh>
    </group>
  );
}

/* ─── Floating math particles ─── */
function MathParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;
  const count = isMobile ? 40 : 120;

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return { positions: pos, sizes: sz };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    pointsRef.current.rotation.y = time * 0.015;
    pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#1A56DB"
        size={0.015}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Orbital rings ─── */
function OrbitalRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.1;
      ring1.current.rotation.z = t * 0.05;
    }
    if (ring2.current) {
      ring2.current.rotation.y = t * 0.08;
      ring2.current.rotation.x = Math.PI / 3 + t * 0.03;
    }
    if (ring3.current) {
      ring3.current.rotation.z = t * 0.12;
      ring3.current.rotation.y = Math.PI / 4;
    }
  });

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[2.2, 0.005, 16, 100]} />
        <meshBasicMaterial color="#1A56DB" transparent opacity={0.1} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.5, 0.004, 16, 100]} />
        <meshBasicMaterial color="#1A56DB" transparent opacity={0.06} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[2.8, 0.003, 16, 100]} />
        <meshBasicMaterial color="#1A56DB" transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

/* ─── Main Canvas ─── */
export default function ScrollCanvas3D() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Delay mount for performance
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <AdaptiveDpr />
        <AdaptiveEvents />
        <Suspense fallback={null}>
          <Preload all />
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          <directionalLight position={[-3, 2, -2]} intensity={0.3} color="#1A56DB" />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Main manifold */}
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
            <MathManifold />
          </Float>

          {/* Decorative elements */}
          <OrbitalRings />
          <MathParticles />

        </Suspense>
      </Canvas>
    </div>
  );
}
