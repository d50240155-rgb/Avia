/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { noiseInstance } from "../utils/noise";
import { Weather, BiomeType, GameInput } from "../types";

// Constants matching/enhancing the flight simulator mechanics
const CHUNK_SIZE = 1600;
const CHUNK_RES = 80; // Ultra-optimized resolution for smooth mountain slopes and completely lag-free generation
const WATER_LEVEL = 20;

// Dynamic Weather settings
interface WeatherSettings {
  ambientIntensity: number;
  sunIntensity: number;
  fogDensity: number;
  cloudColor: number;
}

const WEATHER_PRESETS: Record<Weather, WeatherSettings> = {
  [Weather.Sunny]: {
    ambientIntensity: 0.6,
    sunIntensity: 1.4,
    fogDensity: 0.00025,
    cloudColor: 0xffffff,
  },
  [Weather.Misty]: {
    ambientIntensity: 0.8,
    sunIntensity: 0.4,
    fogDensity: 0.0018,
    cloudColor: 0xcccccc,
  },
  [Weather.Stormy]: {
    ambientIntensity: 0.3,
    sunIntensity: 0.1,
    fogDensity: 0.0012,
    cloudColor: 0x444444,
  },
};

// Beautiful continuous multi-keyframe system for seamless day/night cycles
interface TimeKeyframe {
  hour: number;
  skyColor: THREE.Color;
  fogColor: THREE.Color;
  sunColor: THREE.Color;
  sunIntensity: number;
  moonColor: THREE.Color;
  moonIntensity: number;
}

const TIME_KEYFRAMES: TimeKeyframe[] = [
  { hour: 0.0,  skyColor: new THREE.Color(0x020205), fogColor: new THREE.Color(0x030307), sunColor: new THREE.Color(0xffaa44), sunIntensity: 0.0, moonColor: new THREE.Color(0xccddee), moonIntensity: 0.5 },
  { hour: 4.5,  skyColor: new THREE.Color(0x05040d), fogColor: new THREE.Color(0x070712), sunColor: new THREE.Color(0xffaa44), sunIntensity: 0.0, moonColor: new THREE.Color(0xaaccff), moonIntensity: 0.4 },
  { hour: 5.5,  skyColor: new THREE.Color(0x150b24), fogColor: new THREE.Color(0x100a1c), sunColor: new THREE.Color(0xffaa44), sunIntensity: 0.1, moonColor: new THREE.Color(0xaaccff), moonIntensity: 0.2 },
  { hour: 6.8,  skyColor: new THREE.Color(0xfd5e53), fogColor: new THREE.Color(0xfba58c), sunColor: new THREE.Color(0xffaa44), sunIntensity: 0.9, moonColor: new THREE.Color(0xaaccff), moonIntensity: 0.0 },
  { hour: 8.0,  skyColor: new THREE.Color(0x89b9e3), fogColor: new THREE.Color(0xbad2e8), sunColor: new THREE.Color(0xfff5e6), sunIntensity: 1.2, moonColor: new THREE.Color(0xaaccff), moonIntensity: 0.0 },
  { hour: 12.0, skyColor: new THREE.Color(0x428edf), fogColor: new THREE.Color(0x8bc3f2), sunColor: new THREE.Color(0xffffff), sunIntensity: 1.4, moonColor: new THREE.Color(0xaaccff), moonIntensity: 0.0 },
  { hour: 16.5, skyColor: new THREE.Color(0x529ce8), fogColor: new THREE.Color(0x9ad2ff), sunColor: new THREE.Color(0xfff2df), sunIntensity: 1.35, moonColor: new THREE.Color(0xaaccff), moonIntensity: 0.0 },
  { hour: 18.2, skyColor: new THREE.Color(0xe3623d), fogColor: new THREE.Color(0xdb7751), sunColor: new THREE.Color(0xff5511), sunIntensity: 1.0, moonColor: new THREE.Color(0xaaccff), moonIntensity: 0.1 },
  { hour: 19.5, skyColor: new THREE.Color(0x3a1942), fogColor: new THREE.Color(0x2a163d), sunColor: new THREE.Color(0xff3300), sunIntensity: 0.1, moonColor: new THREE.Color(0xaaccff), moonIntensity: 0.3 },
  { hour: 21.0, skyColor: new THREE.Color(0x080612), fogColor: new THREE.Color(0x0a0c1a), sunColor: new THREE.Color(0xff3300), sunIntensity: 0.0, moonColor: new THREE.Color(0xccddee), moonIntensity: 0.5 },
  { hour: 24.0, skyColor: new THREE.Color(0x020205), fogColor: new THREE.Color(0x030307), sunColor: new THREE.Color(0xffaa44), sunIntensity: 0.0, moonColor: new THREE.Color(0xccddee), moonIntensity: 0.5 }
];

// Biome Color Profiles
interface ColorProfile {
  sand: THREE.Color;
  grass: THREE.Color;
  rock: THREE.Color;
  snow: THREE.Color;
}

const BIOME_COLORS: Record<BiomeType, ColorProfile> = {
  [BiomeType.Alpine]: {
    sand: new THREE.Color(0xd9c59c),
    grass: new THREE.Color(0x356e39),
    rock: new THREE.Color(0x565350),
    snow: new THREE.Color(0xffffff),
  },
  [BiomeType.Tropical]: {
    sand: new THREE.Color(0xffe699),
    grass: new THREE.Color(0x1fb542),
    rock: new THREE.Color(0x73675c),
    snow: new THREE.Color(0xe0f5ec),
  },
  [BiomeType.Badlands]: {
    sand: new THREE.Color(0xcca67a),
    grass: new THREE.Color(0xa19050),
    rock: new THREE.Color(0xab4a24), // Terracotta
    snow: new THREE.Color(0xeee2d7),
  },
  [BiomeType.Volcanic]: {
    sand: new THREE.Color(0x2b2927), // Black sand
    grass: new THREE.Color(0x1f4c1e), // Dark moss
    rock: new THREE.Color(0x1c1a19), // Basalt black
    snow: new THREE.Color(0xe0e5eb),
  },
  [BiomeType.Arctic]: {
    sand: new THREE.Color(0x99aab8), // Frosted blueish sand
    grass: new THREE.Color(0x405559), // Frozen ice grey/moss
    rock: new THREE.Color(0x2c353d), // Blue grey rock
    snow: new THREE.Color(0xffffff), // Clean snow
  },
  [BiomeType.Forest]: {
    sand: new THREE.Color(0xc6b692), // Warm dirt
    grass: new THREE.Color(0x1b431c), // Very lush forest green
    rock: new THREE.Color(0x4c4642), // Granite
    snow: new THREE.Color(0xe6dfcf), // Off-white
  },
};

interface WaterColorProfile {
  color: THREE.Color;
  emissive: THREE.Color;
}

const BIOME_WATER_COLORS: Record<BiomeType, WaterColorProfile> = {
  [BiomeType.Alpine]: {
    color: new THREE.Color(0x0f5e73), // Pristine alpine glacier lake blue-teal
    emissive: new THREE.Color(0x011317), // Deep blue-teal glow
  },
  [BiomeType.Tropical]: {
    color: new THREE.Color(0x0e8b96), // Crystal clear tropical turquoise/cyan
    emissive: new THREE.Color(0x02191c), // Vibrant cyan-tinted glow
  },
  [BiomeType.Badlands]: {
    color: new THREE.Color(0x564332), // Muddy/sandy clay canyon river water
    emissive: new THREE.Color(0x120e0a), // Warm clay depth glow
  },
  [BiomeType.Volcanic]: {
    color: new THREE.Color(0x1a2f33), // Obsidian/sulfuric volcanic lake
    emissive: new THREE.Color(0x061113), // Subtle toxic/basalt shadow
  },
  [BiomeType.Arctic]: {
    color: new THREE.Color(0x3e8596), // Pale frosted glacier blue
    emissive: new THREE.Color(0x0a1b21), // Ice cold depth glow
  },
  [BiomeType.Forest]: {
    color: new THREE.Color(0x0e5046), // Lush deep green-tinted lake
    emissive: new THREE.Color(0x021714), // Dark mossy depths
  },
};

export default function FlightSimulator() {
  const containerRef = useRef<HTMLDivElement>(null);

  // States
  const [gameState, setGameState] = useState<"init" | "loading" | "ready" | "playing" | "crashed">("init");
  const [crashReason, setCrashReason] = useState("");
  const [activeWeather, setActiveWeather] = useState<Weather>(Weather.Sunny);
  const [autoWeather, setAutoWeather] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_auto_weather");
    return saved !== null ? saved === "true" : true;
  });
  const [activeTimeSpeed, setActiveTimeSpeed] = useState<number>(() => {
    const saved = localStorage.getItem("flight_sim_time_speed");
    return saved !== null ? parseFloat(saved) : 0.04;
  }); // Slower, more realistic time speed default
  const [activeBiome, setActiveBiome] = useState<BiomeType>(BiomeType.Alpine);
  const [flashlightEnabled, setFlashlightEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_flashlight_enabled");
    return saved !== null ? saved === "true" : true;
  });
  const [invertY, setInvertY] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_invert_y");
    return saved !== null ? saved === "true" : false;
  });
  const [warningsEnabled, setWarningsEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_warnings_enabled");
    return saved !== null ? saved === "true" : true;
  });
  const [acrobaticMode, setAcrobaticMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_acrobatic_mode");
    return saved !== null ? saved === "true" : false;
  });
  const [viewDistanceSetting, setViewDistanceSetting] = useState<number>(() => {
    const saved = localStorage.getItem("flight_sim_view_distance");
    return saved !== null ? parseInt(saved, 10) : 2;
  });

  // HUD collapse/expand states (persisted via localStorage)
  const [hudReadoutExpanded, setHudReadoutExpanded] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_hud_readout_expanded");
    return saved !== null ? saved === "true" : true;
  });
  const [hudThrottleExpanded, setHudThrottleExpanded] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_hud_throttle_expanded");
    return saved !== null ? saved === "true" : true;
  });
  const [hudEnvironmentExpanded, setHudEnvironmentExpanded] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_hud_environment_expanded");
    return saved !== null ? saved === "true" : true;
  });
  const [hudHorizonExpanded, setHudHorizonExpanded] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_hud_horizon_expanded");
    return saved !== null ? saved === "true" : true;
  });
  const [hudSettingsExpanded, setHudSettingsExpanded] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_hud_settings_expanded");
    return saved !== null ? saved === "true" : true;
  });

  useEffect(() => {
    localStorage.setItem("flight_sim_hud_readout_expanded", String(hudReadoutExpanded));
  }, [hudReadoutExpanded]);

  useEffect(() => {
    localStorage.setItem("flight_sim_hud_throttle_expanded", String(hudThrottleExpanded));
  }, [hudThrottleExpanded]);

  useEffect(() => {
    localStorage.setItem("flight_sim_hud_environment_expanded", String(hudEnvironmentExpanded));
  }, [hudEnvironmentExpanded]);

  useEffect(() => {
    localStorage.setItem("flight_sim_hud_horizon_expanded", String(hudHorizonExpanded));
  }, [hudHorizonExpanded]);

  useEffect(() => {
    localStorage.setItem("flight_sim_hud_settings_expanded", String(hudSettingsExpanded));
  }, [hudSettingsExpanded]);

  const flashlightEnabledRef = useRef<boolean>(true);
  const invertYRef = useRef<boolean>(false);
  const warningsEnabledRef = useRef<boolean>(true);
  const acrobaticModeRef = useRef<boolean>(false);
  const viewDistanceRef = useRef<number>(2);

  useEffect(() => {
    viewDistanceRef.current = viewDistanceSetting;
    localStorage.setItem("flight_sim_view_distance", String(viewDistanceSetting));
    if (gameRef.current && gameRef.current.terrainManager) {
      gameRef.current.terrainManager.viewDistance = viewDistanceSetting;
    }
  }, [viewDistanceSetting]);

  useEffect(() => {
    flashlightEnabledRef.current = flashlightEnabled;
    localStorage.setItem("flight_sim_flashlight_enabled", String(flashlightEnabled));
  }, [flashlightEnabled]);

  useEffect(() => {
    invertYRef.current = invertY;
    localStorage.setItem("flight_sim_invert_y", String(invertY));
  }, [invertY]);

  useEffect(() => {
    warningsEnabledRef.current = warningsEnabled;
    localStorage.setItem("flight_sim_warnings_enabled", String(warningsEnabled));
  }, [warningsEnabled]);

  useEffect(() => {
    acrobaticModeRef.current = acrobaticMode;
    localStorage.setItem("flight_sim_acrobatic_mode", String(acrobaticMode));
  }, [acrobaticMode]);

  useEffect(() => {
    localStorage.setItem("flight_sim_time_speed", String(activeTimeSpeed));
  }, [activeTimeSpeed]);

  useEffect(() => {
    localStorage.setItem("flight_sim_auto_weather", String(autoWeather));
  }, [autoWeather]);

  // Automatic weather cycling system (shifts weather smoothly every 30 seconds)
  useEffect(() => {
    if (!autoWeather || gameState !== "playing") return;

    const interval = setInterval(() => {
      setActiveWeather((current) => {
        const weathers = [Weather.Sunny, Weather.Misty, Weather.Stormy];
        const nextWeathers = weathers.filter((w) => w !== current);
        const next = nextWeathers[Math.floor(Math.random() * nextWeathers.length)];
        return next;
      });
    }, 30000); // Automatic weather variety every 30 seconds

    return () => clearInterval(interval);
  }, [autoWeather, gameState]);

  // Holographic relative pointer drag controller states (completely invisible when inactive)
  const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number; currentX: number; currentY: number } | null>(null);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    inputX: 0,
    inputY: 0,
  });

  // Refs for performance-critical real-time UI updates (no React re-renders)
  const valSpdRef = useRef<HTMLSpanElement>(null);
  const valAltRef = useRef<HTMLSpanElement>(null);
  const valGndRef = useRef<HTMLSpanElement>(null);
  const valThrRef = useRef<HTMLSpanElement>(null);
  const valXRef = useRef<HTMLSpanElement>(null);
  const valZRef = useRef<HTMLSpanElement>(null);
  const valFpsRef = useRef<HTMLSpanElement>(null);
  const valTimeRef = useRef<HTMLSpanElement>(null);
  const horizonLineRef = useRef<HTMLDivElement>(null);
  const warningRef = useRef<HTMLDivElement>(null);
  const sharedMaterialsRef = useRef<any>(null);
  const instancedMeshConfigRef = useRef<any>(null);

  // Web Audio API custom synthesizer variables
  const [audioEnabled, setAudioEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem("flight_sim_audio_enabled");
    return saved !== null ? saved === "true" : true;
  });

  const audioRef = useRef<{
    ctx: AudioContext | null;
    engineOsc1: OscillatorNode | null;
    engineOsc2: OscillatorNode | null;
    engineGain: GainNode | null;
    engineFilter: BiquadFilterNode | null;
    engineLfo: OscillatorNode | null;
    natureNode: AudioBufferSourceNode | null;
    natureFilter: BiquadFilterNode | null;
    natureGain: GainNode | null;
    waveLfo: OscillatorNode | null;
    masterGain: GainNode | null;
    birdTimer: any | null;
    enabled: boolean;
  }>({
    ctx: null,
    engineOsc1: null,
    engineOsc2: null,
    engineGain: null,
    engineFilter: null,
    engineLfo: null,
    natureNode: null,
    natureFilter: null,
    natureGain: null,
    waveLfo: null,
    masterGain: null,
    birdTimer: null,
    enabled: false,
  });

  // Three.js and core game loop variables kept in refs
  const gameRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    renderer: THREE.WebGLRenderer | null;
    clock: THREE.Clock | null;
    input: GameInput;
    timeOfDay: number; // 0.0 - 24.0 hours
    airplane: {
      mesh: THREE.Group;
      speed: number;
      maxSpeed: number;
      rotParams: { x: number; y: number; z: number };
      targetRot: { x: number; y: number; z: number };
      propeller: THREE.Mesh;
      particles: Array<{ mesh: THREE.Mesh; life: number }>;
      tailNavLight?: THREE.Mesh;
      flashlight?: THREE.SpotLight;
      lightCone?: THREE.Mesh;
    } | null;
    terrainManager: {
      chunks: Map<string, any>;
      water: THREE.Mesh;
      waterGeometry: THREE.PlaneGeometry;
    } | null;
    cloudManager: {
      clouds: Array<{ mesh: THREE.Group; speed: number }>;
    } | null;
    lights: {
      hemiLight: THREE.HemisphereLight;
      sun: THREE.DirectionalLight;
      moon: THREE.DirectionalLight;
    } | null;
    skyDome: THREE.Mesh | null;
    visualSun: THREE.Mesh | null;
    visualMoon: THREE.Mesh | null;
    starField: THREE.Points | null;
    rainParticles: THREE.Points | null;
    activeKeys: Set<string>;
    frames: number;
    lastFpsTime: number;
    currentWeatherParams: {
      ambientIntensity: number;
      sunIntensity: number;
      fogDensity: number;
      stormFactor: number;
    };
  }>({
    scene: null,
    camera: null,
    renderer: null,
    clock: null,
    input: { x: 0, y: 0, throttle: 0.55 },
    timeOfDay: 12.0, // Start at noon
    airplane: null,
    terrainManager: null,
    cloudManager: null,
    lights: null,
    skyDome: null,
    visualSun: null,
    visualMoon: null,
    starField: null,
    rainParticles: null,
    activeKeys: new Set(),
    frames: 0,
    lastFpsTime: 0,
    currentWeatherParams: {
      ambientIntensity: 0.6,
      sunIntensity: 1.4,
      fogDensity: 0.00025,
      stormFactor: 0.0,
    },
  });

  // Calculate terrain height and biome at coordinates (X, Z)
  const getTerrainHeightAndBiome = (x: number, z: number) => {
    // Large scale noise to blend biomes
    const bValue = noiseInstance.noise2D(x * 0.0001, z * 0.0001);
    
    // Calculate raw heights for all biome styles so we can blend them smoothly
    // 1. Tropical
    const hTropicalPlain = (noiseInstance.fBm(x * 0.0003, z * 0.0003, 3, 0.4, 2.0) + 1) * 0.5;
    const heightTropical = hTropicalPlain * 40;

    // 2. Forest - gentle rolling green hills
    const hForestPlain = (noiseInstance.fBm(x * 0.0002, z * 0.0002, 4, 0.5, 2.0) + 1) * 0.5;
    const heightForest = 35 + hForestPlain * 120;

    // 3. Alpine - majestic, high, towering mountain ranges and ridges
    const continent = noiseInstance.fBm(x * 0.00008, z * 0.00008, 3, 0.55, 2.0);
    const rawNoise = noiseInstance.fBm(x * 0.00035, z * 0.00035, 5, 0.5, 2.1);
    const ridge = 1.0 - Math.abs(rawNoise);
    const smoothRidge = THREE.MathUtils.smoothstep(ridge, 0.0, 1.0);
    const mountain = Math.pow(smoothRidge, 2.2);
    const smoothMountain = THREE.MathUtils.smoothstep(mountain, 0.0, 1.0);
    const plain = (noiseInstance.fBm(x * 0.00025, z * 0.00025, 3, 0.45, 2.0) + 1.0) * 0.5;
    const tAlpine = Math.max(0, Math.min(1, (continent - (-0.25)) / 0.65));
    const heightAlpine = 45 + plain * 55 + smoothMountain * 520 * (0.15 + 0.85 * tAlpine);

    // 4. Badlands - high flat mesas and terraced canyon structures
    const canyonFbm = noiseInstance.fBm(x * 0.00025, z * 0.00025, 4, 0.5, 2.0);
    const fraction = (canyonFbm * 5) - Math.floor(canyonFbm * 5);
    const stepBlend = THREE.MathUtils.smoothstep(fraction, 0.7, 1.0);
    const terrace = Math.floor(canyonFbm * 5) / 5 + stepBlend * (1 / 5);
    const heightBadlands = 40 + terrace * 380;

    // 5. Volcanic - towering basalt spikes and crater peaks
    const volNoise = noiseInstance.fBm(x * 0.00035, z * 0.00035, 5, 0.55, 2.2);
    const peak = Math.pow(1.0 - Math.abs(volNoise), 3.0);
    const smoothPeak = THREE.MathUtils.smoothstep(peak, 0.0, 1.0);
    const heightVolcanic = 20 + smoothPeak * 460;

    // 6. Arctic - towering pristine glaciers and ice fields
    const hArcticNoise = noiseInstance.fBm(x * 0.0003, z * 0.0003, 4, 0.55, 2.15);
    const glacier = Math.pow(THREE.MathUtils.smoothstep(1.0 - Math.abs(hArcticNoise), 0.1, 1.0), 3.0);
    const heightArctic = 25 + glacier * 340;

    let height = 0;
    let biomeType = BiomeType.Alpine;

    // Butter-smooth interpolation thresholds to prevent sharp cliffs or stretched "teeth" at biome boundaries
    if (bValue < -0.35) {
      height = heightTropical;
      biomeType = BiomeType.Tropical;
    } else if (bValue < -0.28) {
      const blend = THREE.MathUtils.smoothstep(bValue, -0.35, -0.28);
      height = THREE.MathUtils.lerp(heightTropical, heightForest, blend);
      biomeType = blend < 0.5 ? BiomeType.Tropical : BiomeType.Forest;
    } else if (bValue < -0.08) {
      height = heightForest;
      biomeType = BiomeType.Forest;
    } else if (bValue < -0.02) {
      const blend = THREE.MathUtils.smoothstep(bValue, -0.08, -0.02);
      height = THREE.MathUtils.lerp(heightForest, heightAlpine, blend);
      biomeType = blend < 0.5 ? BiomeType.Forest : BiomeType.Alpine;
    } else if (bValue < 0.15) {
      height = heightAlpine;
      biomeType = BiomeType.Alpine;
    } else if (bValue < 0.22) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.15, 0.22);
      height = THREE.MathUtils.lerp(heightAlpine, heightBadlands, blend);
      biomeType = blend < 0.5 ? BiomeType.Alpine : BiomeType.Badlands;
    } else if (bValue < 0.38) {
      height = heightBadlands;
      biomeType = BiomeType.Badlands;
    } else if (bValue < 0.45) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.38, 0.45);
      height = THREE.MathUtils.lerp(heightBadlands, heightVolcanic, blend);
      biomeType = blend < 0.5 ? BiomeType.Badlands : BiomeType.Volcanic;
    } else if (bValue < 0.58) {
      height = heightVolcanic;
      biomeType = BiomeType.Volcanic;
    } else if (bValue < 0.65) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.58, 0.65);
      height = THREE.MathUtils.lerp(heightVolcanic, heightArctic, blend);
      biomeType = blend < 0.5 ? BiomeType.Volcanic : BiomeType.Arctic;
    } else {
      height = heightArctic;
      biomeType = BiomeType.Arctic;
    }

    // Micro details (smoothed to prevent spiky jagged noise triangles on slopes)
    height += noiseInstance.noise2D(x * 0.015, z * 0.015) * 2.2;

    // --- PROCEDURAL CANYON & MINECRAFT-LIKE RAVINE CARVER ---
    // Beautiful wide ravines/canyons
    const ravineNoise = noiseInstance.noise2D(x * 0.00065, z * 0.00065);
    const ravineVal = Math.abs(ravineNoise);
    const ravineThreshold = 0.23; // Restored wide majestic gorges/canyons!

    // Smoothly damp mountain peaks as we get closer to the canyon to prevent extremely steep, stretched spiky polygons
    if (ravineVal < 0.38) {
      const dampingT = ravineVal / 0.38; // 0 at canyon center, 1 at edge
      const dampFactor = THREE.MathUtils.smoothstep(dampingT, 0.15, 1.0); // Smooth scaling factor
      const targetMaxHeight = 110.0;
      if (height > targetMaxHeight) {
        height = THREE.MathUtils.lerp(targetMaxHeight + (height - targetMaxHeight) * 0.15, height, dampFactor);
      }
    }

    if (ravineVal < ravineThreshold) {
      const t = ravineVal / ravineThreshold;
      const carveFactor = THREE.MathUtils.smoothstep(t, 0.0, 1.0); // Smooth cubic interpolation
      
      // Much smoother canyon floor with lower frequency and smaller noise amplitude to eliminate protruding polygons on the floor
      const canyonFloor = 25.5 + noiseInstance.noise2D(x * 0.004, z * 0.004) * 2.0;
      const carvedHeight = THREE.MathUtils.lerp(canyonFloor, height, carveFactor);

      // Smoothly fade out canyons as we enter Tropical biome (-0.35 is fully tropical, -0.25 is alpine edge) to prevent polygon tears
      let canyonIntensity = 1.0;
      if (bValue < -0.25) {
        canyonIntensity = THREE.MathUtils.smoothstep(bValue, -0.35, -0.25);
      }
      height = THREE.MathUtils.lerp(height, carvedHeight, canyonIntensity);
    }

    // --- ENHANCED OCEAN AND CONTINENTAL DRAINAGE MASKS ---
    const oceanMask = noiseInstance.fBm(x * 0.00003, z * 0.00003, 3, 0.5, 2.0);
    if (oceanMask < -0.05) {
      const pullT = Math.max(0, Math.min(1, (-oceanMask - 0.05) * 6.0));
      height = THREE.MathUtils.lerp(height, 4.0, pullT);
    } else if (oceanMask > 0.0) {
      // Much broader range and smoother quadratic blending to make foothills rise beautifully and slowly from the oceans/flatlands
      const landBoost = THREE.MathUtils.smoothstep(oceanMask, 0.0, 0.42);
      height += landBoost * 160; 
    }

    // Smooth out high-frequency noise near the water level to prevent ugly protruding triangles at the shore transitions
    const waterDist = Math.abs(height - WATER_LEVEL);
    if (waterDist < 8.0) {
      const smoothFactor = THREE.MathUtils.smoothstep(waterDist / 8.0, 0.0, 1.0);
      // Blend height towards a flat plane exactly at WATER_LEVEL to make water transitions completely smooth
      const flatHeight = WATER_LEVEL + (height - WATER_LEVEL) * 0.4; // damp height variation by 60%
      height = THREE.MathUtils.lerp(flatHeight, height, smoothFactor);
    }

    // --- CONTINUOUS SHORELINE STEEPENING ---
    // Beautiful C1-continuous cubic beach steepener without discontinuous steps
    const hDiff = height - WATER_LEVEL;
    const shoreWidth = 12.0;
    if (Math.abs(hDiff) < shoreWidth) {
      const t = Math.abs(hDiff) / shoreWidth; // 0 to 1
      const S = 2.4; // steepness factor at the shoreline
      const f = (S - 1) * Math.pow(t, 3) + (2 - 2 * S) * t * t + S * t;
      const sign = hDiff < 0 ? -1 : 1;
      height = WATER_LEVEL + sign * f * shoreWidth;
    }

    return { height: Math.max(4.0, height), biomeType, bValue };
  };

  // Helper: Calculate perfectly smooth, blended biome color profile at any vertex based on bValue
  const getBlendedColorProfile = (bValue: number): ColorProfile => {
    const profileTropical = BIOME_COLORS[BiomeType.Tropical];
    const profileForest = BIOME_COLORS[BiomeType.Forest];
    const profileAlpine = BIOME_COLORS[BiomeType.Alpine];
    const profileBadlands = BIOME_COLORS[BiomeType.Badlands];
    const profileVolcanic = BIOME_COLORS[BiomeType.Volcanic];
    const profileArctic = BIOME_COLORS[BiomeType.Arctic];

    const sand = new THREE.Color();
    const grass = new THREE.Color();
    const rock = new THREE.Color();
    const snow = new THREE.Color();

    if (bValue < -0.35) {
      sand.copy(profileTropical.sand);
      grass.copy(profileTropical.grass);
      rock.copy(profileTropical.rock);
      snow.copy(profileTropical.snow);
    } else if (bValue < -0.28) {
      const blend = THREE.MathUtils.smoothstep(bValue, -0.35, -0.28);
      sand.copy(profileTropical.sand).lerp(profileForest.sand, blend);
      grass.copy(profileTropical.grass).lerp(profileForest.grass, blend);
      rock.copy(profileTropical.rock).lerp(profileForest.rock, blend);
      snow.copy(profileTropical.snow).lerp(profileForest.snow, blend);
    } else if (bValue < -0.08) {
      sand.copy(profileForest.sand);
      grass.copy(profileForest.grass);
      rock.copy(profileForest.rock);
      snow.copy(profileForest.snow);
    } else if (bValue < -0.02) {
      const blend = THREE.MathUtils.smoothstep(bValue, -0.08, -0.02);
      sand.copy(profileForest.sand).lerp(profileAlpine.sand, blend);
      grass.copy(profileForest.grass).lerp(profileAlpine.grass, blend);
      rock.copy(profileForest.rock).lerp(profileAlpine.rock, blend);
      snow.copy(profileForest.snow).lerp(profileAlpine.snow, blend);
    } else if (bValue < 0.15) {
      sand.copy(profileAlpine.sand);
      grass.copy(profileAlpine.grass);
      rock.copy(profileAlpine.rock);
      snow.copy(profileAlpine.snow);
    } else if (bValue < 0.22) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.15, 0.22);
      sand.copy(profileAlpine.sand).lerp(profileBadlands.sand, blend);
      grass.copy(profileAlpine.grass).lerp(profileBadlands.grass, blend);
      rock.copy(profileAlpine.rock).lerp(profileBadlands.rock, blend);
      snow.copy(profileAlpine.snow).lerp(profileBadlands.snow, blend);
    } else if (bValue < 0.38) {
      sand.copy(profileBadlands.sand);
      grass.copy(profileBadlands.grass);
      rock.copy(profileBadlands.rock);
      snow.copy(profileBadlands.snow);
    } else if (bValue < 0.45) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.38, 0.45);
      sand.copy(profileBadlands.sand).lerp(profileVolcanic.sand, blend);
      grass.copy(profileBadlands.grass).lerp(profileVolcanic.grass, blend);
      rock.copy(profileBadlands.rock).lerp(profileVolcanic.rock, blend);
      snow.copy(profileBadlands.snow).lerp(profileVolcanic.snow, blend);
    } else if (bValue < 0.58) {
      sand.copy(profileVolcanic.sand);
      grass.copy(profileVolcanic.grass);
      rock.copy(profileVolcanic.rock);
      snow.copy(profileVolcanic.snow);
    } else if (bValue < 0.65) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.58, 0.65);
      sand.copy(profileVolcanic.sand).lerp(profileArctic.sand, blend);
      grass.copy(profileVolcanic.grass).lerp(profileArctic.grass, blend);
      rock.copy(profileVolcanic.rock).lerp(profileArctic.rock, blend);
      snow.copy(profileVolcanic.snow).lerp(profileArctic.snow, blend);
    } else {
      sand.copy(profileArctic.sand);
      grass.copy(profileArctic.grass);
      rock.copy(profileArctic.rock);
      snow.copy(profileArctic.snow);
    }

    return { sand, grass, rock, snow };
  };

  // Helper: Calculate perfectly smooth, blended water color at the airplane's position based on bValue
  const getBlendedWaterColor = (bValue: number): WaterColorProfile => {
    const wtTropical = BIOME_WATER_COLORS[BiomeType.Tropical];
    const wtForest = BIOME_WATER_COLORS[BiomeType.Forest];
    const wtAlpine = BIOME_WATER_COLORS[BiomeType.Alpine];
    const wtBadlands = BIOME_WATER_COLORS[BiomeType.Badlands];
    const wtVolcanic = BIOME_WATER_COLORS[BiomeType.Volcanic];
    const wtArctic = BIOME_WATER_COLORS[BiomeType.Arctic];

    const color = new THREE.Color();
    const emissive = new THREE.Color();

    if (bValue < -0.35) {
      color.copy(wtTropical.color);
      emissive.copy(wtTropical.emissive);
    } else if (bValue < -0.28) {
      const blend = THREE.MathUtils.smoothstep(bValue, -0.35, -0.28);
      color.copy(wtTropical.color).lerp(wtForest.color, blend);
      emissive.copy(wtTropical.emissive).lerp(wtForest.emissive, blend);
    } else if (bValue < -0.08) {
      color.copy(wtForest.color);
      emissive.copy(wtForest.emissive);
    } else if (bValue < -0.02) {
      const blend = THREE.MathUtils.smoothstep(bValue, -0.08, -0.02);
      color.copy(wtForest.color).lerp(wtAlpine.color, blend);
      emissive.copy(wtForest.emissive).lerp(wtAlpine.emissive, blend);
    } else if (bValue < 0.15) {
      color.copy(wtAlpine.color);
      emissive.copy(wtAlpine.emissive);
    } else if (bValue < 0.22) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.15, 0.22);
      color.copy(wtAlpine.color).lerp(wtBadlands.color, blend);
      emissive.copy(wtAlpine.emissive).lerp(wtBadlands.emissive, blend);
    } else if (bValue < 0.38) {
      color.copy(wtBadlands.color);
      emissive.copy(wtBadlands.emissive);
    } else if (bValue < 0.45) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.38, 0.45);
      color.copy(wtBadlands.color).lerp(wtVolcanic.color, blend);
      emissive.copy(wtBadlands.emissive).lerp(wtVolcanic.emissive, blend);
    } else if (bValue < 0.58) {
      color.copy(wtVolcanic.color);
      emissive.copy(wtVolcanic.emissive);
    } else if (bValue < 0.65) {
      const blend = THREE.MathUtils.smoothstep(bValue, 0.58, 0.65);
      color.copy(wtVolcanic.color).lerp(wtArctic.color, blend);
      emissive.copy(wtVolcanic.emissive).lerp(wtArctic.emissive, blend);
    } else {
      color.copy(wtArctic.color);
      emissive.copy(wtArctic.emissive);
    }

    return { color, emissive };
  };

  // Setup the Three.js App
  const startSimulation = () => {
    setGameState("loading");

    // Helper to generate fine procedural ocean ripples texture
    const createRippleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        for (let x = 0; x < 256; x++) {
          for (let y = 0; y < 256; y++) {
            // Smooth, overlapping sine waves for a gorgeous organic fluid pattern
            const val1 = Math.sin(x * 0.08 + y * 0.04) * 0.4;
            const val2 = Math.cos(x * 0.05 - y * 0.09) * 0.35;
            const val3 = Math.sin((x - y) * 0.12) * 0.15;
            const val4 = Math.sin(x * 0.22) * Math.cos(y * 0.22) * 0.1; // fine detail

            const noiseVal = val1 + val2 + val3 + val4;
            const col = Math.floor(128 + noiseVal * 127);
            const clampedCol = Math.max(0, Math.min(255, col));
            ctx.fillStyle = `rgb(${clampedCol},${clampedCol},${clampedCol})`;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(800, 800); // 800 repeats for gorgeous realistic density across 35000 units
      return texture;
    };

    // Initialize core parameters
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x5a9bd4, 0.00035);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.5, 95000);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(renderer.domElement);
    }

    const clock = new THREE.Clock();

    // Shared Materials for Instanced Rendering (to avoid recreating them for every chunk)
    const sharedMaterials = {
      alpineTrunk: new THREE.MeshStandardMaterial({ color: 0x5a3d28, roughness: 0.9, flatShading: true }),
      alpineFoliage: new THREE.MeshStandardMaterial({ color: 0x1a4314, roughness: 0.8, flatShading: true }),
      tropicalTrunk: new THREE.MeshStandardMaterial({ color: 0x735235, roughness: 0.9, flatShading: true }),
      tropicalLeaf: new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.7, flatShading: true }),
      badlandsCactus: new THREE.MeshStandardMaterial({ color: 0x556b2f, roughness: 0.8, flatShading: true }),
      volcanicTrunk: new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.95, flatShading: true }),
      arcticTrunk: new THREE.MeshStandardMaterial({ color: 0x3d2d1f, roughness: 0.95, flatShading: true }),
      arcticFoliage: new THREE.MeshStandardMaterial({ color: 0xe0effc, roughness: 0.85, flatShading: true }), // Snowy blue-white
      forestTrunk: new THREE.MeshStandardMaterial({ color: 0x4d3319, roughness: 0.9, flatShading: true }),
      forestFoliage: new THREE.MeshStandardMaterial({ color: 0x11381b, roughness: 0.75, flatShading: true }), // Dense dark forest green
      rockAlpine: new THREE.MeshStandardMaterial({ color: 0x615c57, roughness: 0.9, flatShading: true }),
      rockVolcanic: new THREE.MeshStandardMaterial({ color: 0x161619, roughness: 0.9, flatShading: true }),
      rockBadlands: new THREE.MeshStandardMaterial({ color: 0x9e431d, roughness: 0.9, flatShading: true }),
      rockTropical: new THREE.MeshStandardMaterial({ color: 0x8a847e, roughness: 0.9, flatShading: true }),
      reedStalk: new THREE.MeshStandardMaterial({ color: 0x3d662d, roughness: 0.8, flatShading: true }),
      reedHead: new THREE.MeshStandardMaterial({ color: 0x54392b, roughness: 0.9, flatShading: true }),
      basaltColumn: new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.95, flatShading: true }),
      shrubFoliage: new THREE.MeshStandardMaterial({ color: 0x2e5c1e, roughness: 0.85, flatShading: true }),
      flowerStem: new THREE.MeshStandardMaterial({ color: 0x4fa838, roughness: 0.9, flatShading: true }),
      flowerRed: new THREE.MeshStandardMaterial({ color: 0xdd3333, roughness: 0.8, flatShading: true }),
      flowerYellow: new THREE.MeshStandardMaterial({ color: 0xddcc33, roughness: 0.8, flatShading: true }),
      flowerPurple: new THREE.MeshStandardMaterial({ color: 0x9933dd, roughness: 0.8, flatShading: true }),
    };

    // Pre-curved tropical trunk geometry
    const tropicalTrunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 4.5, 5);
    tropicalTrunkGeo.translate(0, 2.25, 0);
    const pPos = tropicalTrunkGeo.attributes.position;
    for (let i = 0; i < pPos.count; i++) {
      const yVal = pPos.getY(i);
      pPos.setX(i, pPos.getX(i) + Math.sin(yVal * 0.4) * 0.4);
    }
    tropicalTrunkGeo.computeVertexNormals();

    const instancedMeshConfig: Record<string, { geometry: THREE.BufferGeometry; material: THREE.Material }> = {
      alpineTrunk: { geometry: new THREE.CylinderGeometry(0.3, 0.5, 4, 5).translate(0, 2, 0), material: sharedMaterials.alpineTrunk },
      alpineFoliage1: { geometry: new THREE.ConeGeometry(2.4, 3, 5).translate(0, 3.5, 0), material: sharedMaterials.alpineFoliage },
      alpineFoliage2: { geometry: new THREE.ConeGeometry(1.8, 2.6, 5).translate(0, 5.1, 0), material: sharedMaterials.alpineFoliage },
      alpineFoliage3: { geometry: new THREE.ConeGeometry(1.2, 2.2, 5).translate(0, 6.7, 0), material: sharedMaterials.alpineFoliage },
      tropicalTrunk: { geometry: tropicalTrunkGeo, material: sharedMaterials.tropicalTrunk },
      tropicalLeaf: { geometry: new THREE.BoxGeometry(0.5, 0.05, 2.8).translate(0, 0, 1.4), material: sharedMaterials.tropicalLeaf },
      badlandsCactusTrunk: { geometry: new THREE.CylinderGeometry(0.2, 0.2, 3, 5).translate(0, 1.5, 0), material: sharedMaterials.badlandsCactus },
      badlandsCactusArm1: { geometry: new THREE.CylinderGeometry(0.15, 0.15, 1.2, 5), material: sharedMaterials.badlandsCactus },
      badlandsCactusArm2: { geometry: new THREE.CylinderGeometry(0.15, 0.15, 1.0, 5), material: sharedMaterials.badlandsCactus },
      volcanicTrunk: { geometry: new THREE.CylinderGeometry(0.18, 0.35, 4.0, 5).translate(0, 2.0, 0), material: sharedMaterials.volcanicTrunk },
      volcanicBranch: { geometry: new THREE.CylinderGeometry(0.08, 0.12, 1.8, 5), material: sharedMaterials.volcanicTrunk },
      arcticTrunk: { geometry: new THREE.CylinderGeometry(0.2, 0.4, 3.5, 5).translate(0, 1.75, 0), material: sharedMaterials.arcticTrunk },
      arcticFoliage1: { geometry: new THREE.ConeGeometry(2.0, 2.8, 5).translate(0, 3.0, 0), material: sharedMaterials.arcticFoliage },
      arcticFoliage2: { geometry: new THREE.ConeGeometry(1.4, 2.2, 5).translate(0, 4.4, 0), material: sharedMaterials.arcticFoliage },
      forestTrunk: { geometry: new THREE.CylinderGeometry(0.35, 0.55, 4.5, 5).translate(0, 2.25, 0), material: sharedMaterials.forestTrunk },
      forestFoliage1: { geometry: new THREE.DodecahedronGeometry(1.8, 1).translate(0, 4.5, 0), material: sharedMaterials.forestFoliage },
      forestFoliage2: { geometry: new THREE.DodecahedronGeometry(1.3, 1).translate(1.0, 5.0, 0), material: sharedMaterials.forestFoliage },
      forestFoliage3: { geometry: new THREE.DodecahedronGeometry(1.2, 1).translate(-0.8, 5.2, 0.5), material: sharedMaterials.forestFoliage },
      rockAlpine: { geometry: new THREE.DodecahedronGeometry(1.0, 1), material: sharedMaterials.rockAlpine },
      rockVolcanic: { geometry: new THREE.DodecahedronGeometry(1.0, 1), material: sharedMaterials.rockVolcanic },
      rockBadlands: { geometry: new THREE.DodecahedronGeometry(1.0, 1), material: sharedMaterials.rockBadlands },
      rockTropical: { geometry: new THREE.DodecahedronGeometry(1.0, 1), material: sharedMaterials.rockTropical },
      reedStalk: { geometry: new THREE.CylinderGeometry(0.1, 0.1, 1.0, 4).translate(0, 0.5, 0), material: sharedMaterials.reedStalk },
      reedHead: { geometry: new THREE.CylinderGeometry(0.18, 0.18, 1.0, 4).translate(0, 0.5, 0), material: sharedMaterials.reedHead },
      basaltColumn: { geometry: new THREE.CylinderGeometry(1.0, 1.0, 1.0, 6), material: sharedMaterials.basaltColumn },
      bush: { geometry: new THREE.DodecahedronGeometry(0.7, 1).translate(0, 0.35, 0), material: sharedMaterials.shrubFoliage },
      flowerStem: { geometry: new THREE.CylinderGeometry(0.04, 0.04, 0.6, 4).translate(0, 0.3, 0), material: sharedMaterials.flowerStem },
      flowerRed: { geometry: new THREE.SphereGeometry(0.18, 5, 5).translate(0, 0.6, 0), material: sharedMaterials.flowerRed },
      flowerYellow: { geometry: new THREE.SphereGeometry(0.18, 5, 5).translate(0, 0.6, 0), material: sharedMaterials.flowerYellow },
      flowerPurple: { geometry: new THREE.SphereGeometry(0.18, 5, 5).translate(0, 0.6, 0), material: sharedMaterials.flowerPurple },
    };

    sharedMaterialsRef.current = sharedMaterials;
    instancedMeshConfigRef.current = instancedMeshConfig;

    // 1. LIGHTS (Physically correct daylight + moonlight)
    const hemiLight = new THREE.HemisphereLight(0xb1e1fc, 0x3d5a32, 0.6);
    scene.add(hemiLight);

    const sun = new THREE.DirectionalLight(0xfff5e6, 1.4);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far = 3000;
    const sD = 600;
    sun.shadow.camera.left = -sD;
    sun.shadow.camera.right = sD;
    sun.shadow.camera.top = sD;
    sun.shadow.camera.bottom = -sD;
    sun.shadow.bias = -0.0003;
    scene.add(sun);

    // Moonlight for gorgeous night scenery
    const moon = new THREE.DirectionalLight(0xaaccff, 0.4);
    moon.castShadow = true;
    moon.shadow.mapSize.width = 1024;
    moon.shadow.mapSize.height = 1024;
    moon.shadow.camera.near = 10;
    moon.shadow.camera.far = 3000;
    const mD = 600;
    moon.shadow.camera.left = -mD;
    moon.shadow.camera.right = mD;
    moon.shadow.camera.top = mD;
    moon.shadow.camera.bottom = -mD;
    moon.shadow.bias = -0.0003;
    scene.add(moon);

    // 2. STARFIELD FOR NIGHT IMMERSION
    const starCount = 3500;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      // Distribute stars over a giant hemisphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 65000 + Math.random() * 10000;
      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = Math.abs(radius * Math.sin(phi) * Math.sin(theta)); // sky dome only
      starPositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      transparent: true,
      opacity: 0, // initially invisible during daytime
      sizeAttenuation: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 3. SKYDOME (Procedural gradient)
    const skyGeo = new THREE.SphereGeometry(75000, 32, 32);
    const skyMat = new THREE.MeshBasicMaterial({
      color: 0x5a9bd4,
      side: THREE.BackSide,
      fog: false,
    });
    const skyDome = new THREE.Mesh(skyGeo, skyMat);
    scene.add(skyDome);

    // 3.1 PHYSICAL CELESTIAL SUN & MOON (with gorgeous glowing volumetric coronas scaled up for distant rendering)
    const visualSunGeo = new THREE.SphereGeometry(1625, 24, 24);
    const visualSunMat = new THREE.MeshBasicMaterial({
      color: 0xfffcf5,
      fog: false,
    });
    const visualSun = new THREE.Mesh(visualSunGeo, visualSunMat);
    
    // Add multiple glowing layers for realistic blinding sun core look
    const sunGlow1Geo = new THREE.SphereGeometry(3500, 16, 16);
    const sunGlow1Mat = new THREE.MeshBasicMaterial({
      color: 0xfff2cc,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      fog: false,
    });
    const sunGlow1 = new THREE.Mesh(sunGlow1Geo, sunGlow1Mat);
    visualSun.add(sunGlow1);

    const sunGlow2Geo = new THREE.SphereGeometry(6500, 16, 16);
    const sunGlow2Mat = new THREE.MeshBasicMaterial({
      color: 0xffd966,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      fog: false,
    });
    const sunGlow2 = new THREE.Mesh(sunGlow2Geo, sunGlow2Mat);
    visualSun.add(sunGlow2);
    scene.add(visualSun);

    // Moonlight sphere & glow
    const visualMoonGeo = new THREE.SphereGeometry(950, 24, 24);
    const visualMoonMat = new THREE.MeshBasicMaterial({
      color: 0xd9e3f0,
      fog: false,
    });
    const visualMoon = new THREE.Mesh(visualMoonGeo, visualMoonMat);

    const moonGlowGeo = new THREE.SphereGeometry(2125, 16, 16);
    const moonGlowMat = new THREE.MeshBasicMaterial({
      color: 0x99ccff,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      fog: false,
    });
    const moonGlow = new THREE.Mesh(moonGlowGeo, moonGlowMat);
    visualMoon.add(moonGlow);
    scene.add(visualMoon);

    // 4. WEATHER PARTICLES (RAIN)
    const rainCount = 4000;
    const rainGeo = new THREE.BufferGeometry();
    const rainPos = new Float32Array(rainCount * 3);
    for (let i = 0; i < rainCount; i++) {
      rainPos[i * 3] = (Math.random() - 0.5) * 400;
      rainPos[i * 3 + 1] = Math.random() * 200;
      rainPos[i * 3 + 2] = (Math.random() - 0.5) * 400;
    }
    rainGeo.setAttribute("position", new THREE.BufferAttribute(rainPos, 3));
    const rainMat = new THREE.PointsMaterial({
      color: 0x7799aa,
      size: 0.8,
      transparent: true,
      opacity: 0.0, // initially off unless stormy
    });
    const rainParticles = new THREE.Points(rainGeo, rainMat);
    scene.add(rainParticles);

        // 5. AIRPLANE (Keep exact original style, highly polished standard meshes)
    const airplaneGroup = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      roughness: 0.25,
      metalness: 0.85,
      flatShading: false, // Smooth shading on the airplane for a high-quality sleek look
    });
    const glassMat = new THREE.MeshPhongMaterial({
      color: 0x00ccff,
      shininess: 120,
      transparent: true,
      opacity: 0.65,
    });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 });

    const fuselageGeo = new THREE.CylinderGeometry(0.8, 0.5, 6, 32); // High polygon smoothness
    fuselageGeo.rotateX(Math.PI / 2);
    const fuselage = new THREE.Mesh(fuselageGeo, metalMat);
    fuselage.castShadow = true;
    fuselage.receiveShadow = true;
    airplaneGroup.add(fuselage);

    const cockpitGeo = new THREE.SphereGeometry(0.7, 32, 32); // High polygon smoothness
    cockpitGeo.scale(1, 0.7, 2);
    const cockpit = new THREE.Mesh(cockpitGeo, glassMat);
    cockpit.position.set(0, 0.8, 0.5);
    airplaneGroup.add(cockpit);

    const wingGeo = new THREE.BoxGeometry(10, 0.1, 2);
    const wing = new THREE.Mesh(wingGeo, metalMat);
    wing.position.set(0, 0, 0.5);
    wing.castShadow = true;
    airplaneGroup.add(wing);

    // Tapered horizontal stabilizers (sleek tail wings blending into the fuselage)
    const stabLGeo = new THREE.CylinderGeometry(0.1, 0.45, 1.8, 8); // Tapered from root (0.45) to tip (0.1)
    stabLGeo.rotateZ(Math.PI / 2); // Orient horizontally along X
    stabLGeo.translate(-0.9, 0, 0); // Shift left
    const stabL = new THREE.Mesh(stabLGeo, metalMat);
    stabL.scale.set(1, 0.25, 1.3); // Squash thickness, stretch chord
    stabL.position.set(0, 0.1, -2.4);
    stabL.castShadow = true;
    airplaneGroup.add(stabL);

    const stabRGeo = new THREE.CylinderGeometry(0.45, 0.1, 1.8, 8); // Tapered from root (0.45) to tip (0.1)
    stabRGeo.rotateZ(Math.PI / 2); // Orient horizontally along X
    stabRGeo.translate(0.9, 0, 0); // Shift right
    const stabR = new THREE.Mesh(stabRGeo, metalMat);
    stabR.scale.set(1, 0.25, 1.3); // Squash thickness, stretch chord
    stabR.position.set(0, 0.1, -2.4);
    stabR.castShadow = true;
    airplaneGroup.add(stabR);

    // Aerodynamic swept-back tapered vertical fin (smooth root-to-tip connection)
    const finGeo = new THREE.CylinderGeometry(0.12, 0.55, 2.0, 8); // Tapered from base (0.55) to top (0.12)
    finGeo.translate(0, 1.0, 0); // Base at 0, goes up
    const tailFin = new THREE.Mesh(finGeo, metalMat);
    tailFin.scale.set(0.22, 1, 1.4); // Squash thickness (thin fin), stretch chord
    tailFin.position.set(0, 0.1, -2.55);
    tailFin.rotation.x = 0.12; // Swept back slightly
    tailFin.castShadow = true;
    airplaneGroup.add(tailFin);

    // Elegant dorsal fin fairing (sleek connector from fuselage to the tail fin)
    const dorsalGeo = new THREE.BoxGeometry(0.08, 0.4, 1.8);
    dorsalGeo.translate(0, 0.2, 0.9);
    const dorsal = new THREE.Mesh(dorsalGeo, metalMat);
    dorsal.position.set(0, 0.1, -2.5);
    dorsal.rotation.x = -0.22; // slopes up towards the fin
    airplaneGroup.add(dorsal);

    const propGeo = new THREE.BoxGeometry(3.5, 0.1, 0.2);
    const propeller = new THREE.Mesh(propGeo, darkMat);
    propeller.position.set(0, 0, 3.1);
    propeller.castShadow = true;
    airplaneGroup.add(propeller);

    const noseGeo = new THREE.ConeGeometry(0.8, 1, 32); // High polygon smoothness
    noseGeo.rotateX(Math.PI / 2);
    const nose = new THREE.Mesh(noseGeo, metalMat);
    nose.position.z = 3.1;
    airplaneGroup.add(nose);

    // Sleek physical dual exhaust pipes at the rear-underbelly of the fuselage
    const exhaustGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.9, 12);
    exhaustGeo.rotateX(Math.PI / 2); // align along the Z-axis
    const exhaustMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd, // Bright shiny chrome/silver steel
      roughness: 0.12,
      metalness: 0.95,
    });
    const exhaustL = new THREE.Mesh(exhaustGeo, exhaustMat);
    exhaustL.position.set(-0.28, -0.42, -2.95);
    exhaustL.rotation.set(0.08, -0.06, 0); // slightly pitched down and flared outwards
    exhaustL.castShadow = true;
    airplaneGroup.add(exhaustL);

    const exhaustR = new THREE.Mesh(exhaustGeo, exhaustMat);
    exhaustR.position.set(0.28, -0.42, -2.95);
    exhaustR.rotation.set(0.08, 0.06, 0); // slightly pitched down and flared outwards
    exhaustR.castShadow = true;
    airplaneGroup.add(exhaustR);

    // Hollow dark pipe interior cap to give high-end realistic look
    const pipeCapGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.05, 12);
    pipeCapGeo.rotateX(Math.PI / 2);
    const pipeCapL = new THREE.Mesh(pipeCapGeo, darkMat);
    pipeCapL.position.set(-0.28, -0.42, -3.40);
    airplaneGroup.add(pipeCapL);

    const pipeCapR = new THREE.Mesh(pipeCapGeo, darkMat);
    pipeCapR.position.set(0.28, -0.42, -3.40);
    airplaneGroup.add(pipeCapR);

    // --- ADDED FOR EXTENDED REALISM ---
    // Landing Gear (Left and Right struts with black wheels)
    const gearGroupL = new THREE.Group();
    gearGroupL.position.set(-1.0, -0.8, 0.8);
    const strutGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8);
    strutGeo.rotateZ(0.2); // angled outward
    const strutL = new THREE.Mesh(strutGeo, metalMat);
    strutL.castShadow = true;
    gearGroupL.add(strutL);
    const wheelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.18, 16);
    wheelGeo.rotateZ(Math.PI / 2);
    const wheelL = new THREE.Mesh(wheelGeo, darkMat);
    wheelL.position.set(-0.1, -0.55, 0);
    wheelL.castShadow = true;
    gearGroupL.add(wheelL);
    airplaneGroup.add(gearGroupL);

    const gearGroupR = new THREE.Group();
    gearGroupR.position.set(1.0, -0.8, 0.8);
    const strutR = new THREE.Mesh(strutGeo, metalMat);
    strutR.rotation.z = -0.2; // angled outward
    strutR.castShadow = true;
    gearGroupR.add(strutR);
    const wheelR = new THREE.Mesh(wheelGeo, darkMat);
    wheelR.position.set(0.1, -0.55, 0);
    wheelR.castShadow = true;
    gearGroupR.add(wheelR);
    airplaneGroup.add(gearGroupR);

    // Elegant Stunt/Aerobatic speed stripes on wings and tail
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xcc1111, roughness: 0.3 }); // Rich red paint
    const stripeLGeo = new THREE.BoxGeometry(1.2, 0.12, 2.05);
    const stripeL = new THREE.Mesh(stripeLGeo, stripeMat);
    stripeL.position.set(-3.5, 0.01, 0.5);
    airplaneGroup.add(stripeL);

    const stripeR = new THREE.Mesh(stripeLGeo, stripeMat);
    stripeR.position.set(3.5, 0.01, 0.5);
    airplaneGroup.add(stripeR);

    // Tail fin stripe adjusted to fit the new swept-back vertical fin
    const finStripeGeo = new THREE.BoxGeometry(0.15, 0.4, 1.45);
    const finStripe = new THREE.Mesh(finStripeGeo, stripeMat);
    finStripe.position.set(0, 1.4, -2.62);
    finStripe.rotation.x = 0.12; // match fin sweep
    airplaneGroup.add(finStripe);

    // Navigation and Strobe lights
    const navLightMatRed = new THREE.MeshBasicMaterial({ color: 0xff3333 });
    const navLightMatGreen = new THREE.MeshBasicMaterial({ color: 0x33ff33 });
    const navLightMatWhite = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const navLightGeo = new THREE.SphereGeometry(0.15, 8, 8);

    const leftNavLight = new THREE.Mesh(navLightGeo, navLightMatRed);
    leftNavLight.position.set(-5, 0, 0.5);
    airplaneGroup.add(leftNavLight);

    const rightNavLight = new THREE.Mesh(navLightGeo, navLightMatGreen);
    rightNavLight.position.set(5, 0, 0.5);
    airplaneGroup.add(rightNavLight);

    const tailNavLight = new THREE.Mesh(navLightGeo, navLightMatWhite);
    tailNavLight.position.set(0, 2.05, -3.25);
    airplaneGroup.add(tailNavLight);

    // Prevent Gimbal Lock and ensure local pitch/roll axes are perfectly aligned regardless of heading yaw
    airplaneGroup.rotation.order = "YXZ";

    // Bright front headlight/flashlight for night flight
    const flashlight = new THREE.SpotLight(0xfff5dd, 250.0, 1200, Math.PI / 4.5, 0.5, 1.0);
    flashlight.position.set(0, 0, 3.2); // pointing forward (+Z is forward for the airplane)
    flashlight.castShadow = true;
    flashlight.shadow.mapSize.width = 512;
    flashlight.shadow.mapSize.height = 512;
    flashlight.shadow.camera.near = 5;
    flashlight.shadow.camera.far = 1200;
    flashlight.shadow.bias = -0.002;

    const flashlightTarget = new THREE.Object3D();
    flashlightTarget.position.set(0, 0, 100);
    airplaneGroup.add(flashlightTarget);
    flashlight.target = flashlightTarget;
    airplaneGroup.add(flashlight);

    // Volumetric headlight cone effect for beautiful night and fog/storm flight feedback
    const coneGeo = new THREE.ConeGeometry(80, 500, 16, 1, true);
    coneGeo.rotateX(Math.PI / 2);
    coneGeo.translate(0, 0, 250); // apex at 0
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xfff3cc,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const lightCone = new THREE.Mesh(coneGeo, coneMat);
    lightCone.position.set(0, 0, 3.2);
    airplaneGroup.add(lightCone);

    scene.add(airplaneGroup);
    airplaneGroup.position.set(0, 480, 0); // Start safely above mountain peaks

    // Airplane exhaust particle trails (transparent lighting-aware volumetric smoke)
    const particles: Array<{ mesh: THREE.Mesh; life: number }> = [];
    const trailGeo = new THREE.SphereGeometry(0.35, 8, 8); // Slightly larger spheres
    const trailMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.65, // Start slightly more transparent
      roughness: 0.95,
      metalness: 0.05,
      depthWrite: false, // Prevents depth sorted clipping artifacts
    });
    for (let i = 0; i < 60; i++) { // Denser particle pool for dual streams
      const p = new THREE.Mesh(trailGeo, trailMat.clone());
      p.visible = false;
      scene.add(p);
      particles.push({ mesh: p, life: 0 });
    }

    // 6. REALISTIC STATIC WATER BACKGROUND
    // Giant flat background water plane to fill the horizon with zero performance cost
    const bgWaterGeo = new THREE.PlaneGeometry(35000, 35000, 64, 64);
    bgWaterGeo.rotateX(-Math.PI / 2);

    // Add color attribute to enable dynamic per-vertex water coloring based on biome
    const bgWaterColorsArray = [];
    const bgWaterVertCount = bgWaterGeo.attributes.position.count;
    for (let i = 0; i < bgWaterVertCount; i++) {
      bgWaterColorsArray.push(0.09, 0.37, 0.45); // Starting alpine blue-teal colors (r, g, b)
    }
    bgWaterGeo.setAttribute("color", new THREE.Float32BufferAttribute(bgWaterColorsArray, 3));

    const bgWaterMat = new THREE.MeshPhongMaterial({
      color: 0xffffff, // Tint base is white to render vertex colors unmodified
      vertexColors: true,
      emissive: 0x011317, // Deep blue-teal starting glow
      specular: 0x5588aa, // Sparkling sun glints
      shininess: 75,
      bumpMap: createRippleTexture(),
      bumpScale: 0.11,
      transparent: true,
      opacity: 0.9,
      flatShading: false,
    });
    const bgWater = new THREE.Mesh(bgWaterGeo, bgWaterMat);
    bgWater.position.y = WATER_LEVEL; // Positioned exactly at WATER_LEVEL as a seamless backdrop
    scene.add(bgWater);

    // 7. MULTI-BIOME PROCEDURAL VEGETATION & OBJECT GENERATOR
    const createTreeModel = (biome: BiomeType) => {
      const group = new THREE.Group();
      const randType = Math.random();

      if (randType < 0.65) {
        // Tree / Plant Generation with high variety (3 distinct types per biome)
        const subType = Math.random();

        if (biome === BiomeType.Tropical) {
          if (subType < 0.45) {
            // Type 1: Palm tree trunk & leaves (Classic)
            const trunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 4.5, 5);
            trunkGeo.translate(0, 2.25, 0);
            const pos = trunkGeo.attributes.position;
            for (let i = 0; i < pos.count; i++) {
              const yVal = pos.getY(i);
              pos.setX(i, pos.getX(i) + Math.sin(yVal * 0.4) * 0.4);
            }
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x735235, roughness: 0.9, flatShading: true });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.castShadow = true;
            group.add(trunk);

            // Palm leaves
            const leafMat = new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.7, flatShading: true });
            for (let k = 0; k < 6; k++) {
              const leafGeo = new THREE.BoxGeometry(0.5, 0.05, 2.8);
              leafGeo.translate(0, 0, 1.4);
              const leaf = new THREE.Mesh(leafGeo, leafMat);
              leaf.position.set(0, 4.3, 0);
              leaf.rotation.x = -0.3;
              leaf.rotation.y = (k * Math.PI) / 3;
              leaf.castShadow = true;
              group.add(leaf);
            }
          } else if (subType < 0.75) {
            // Type 2: Giant Jungle Shrub / Fern
            const fernMat = new THREE.MeshStandardMaterial({ color: 0x135d13, roughness: 0.8, flatShading: true });
            const centerCoreGeo = new THREE.CylinderGeometry(0.2, 0.3, 0.6, 5);
            const centerCore = new THREE.Mesh(centerCoreGeo, fernMat);
            centerCore.position.y = 0.3;
            group.add(centerCore);

            const leafCount = 8;
            for (let k = 0; k < leafCount; k++) {
              const leafGeo = new THREE.BoxGeometry(0.4, 0.04, 2.2);
              leafGeo.translate(0, 0, 1.1);
              const leaf = new THREE.Mesh(leafGeo, fernMat);
              leaf.position.set(0, 0.4, 0);
              leaf.rotation.x = -0.15 - Math.random() * 0.15;
              leaf.rotation.y = (k * Math.PI * 2) / leafCount;
              leaf.rotation.z = 0.25;
              leaf.scale.set(0.8 + Math.random() * 0.4, 1, 0.8 + Math.random() * 0.4);
              leaf.castShadow = true;
              group.add(leaf);
            }
          } else {
            // Type 3: Exotic Jungle Flower
            const stemGeo = new THREE.CylinderGeometry(0.08, 0.1, 1.8, 5);
            const stemMat = new THREE.MeshStandardMaterial({ color: 0x3d702d, roughness: 0.9, flatShading: true });
            const stem = new THREE.Mesh(stemGeo, stemMat);
            stem.position.y = 0.9;
            stem.castShadow = true;
            group.add(stem);

            const petalMat = new THREE.MeshStandardMaterial({ color: 0xe6194b, roughness: 0.6, flatShading: true });
            const petalCount = 5;
            for (let k = 0; k < petalCount; k++) {
              const petalGeo = new THREE.BoxGeometry(0.35, 0.05, 0.8);
              petalGeo.translate(0, 0, 0.4);
              const petal = new THREE.Mesh(petalGeo, petalMat);
              petal.position.set(0, 1.75, 0);
              petal.rotation.x = 0.25;
              petal.rotation.y = (k * Math.PI * 2) / petalCount;
              petal.castShadow = true;
              group.add(petal);
            }
            const coreGeo = new THREE.SphereGeometry(0.22, 6, 6);
            const coreMat = new THREE.MeshStandardMaterial({ color: 0xffe119, roughness: 0.5, emissive: 0x443c00 });
            const core = new THREE.Mesh(coreGeo, coreMat);
            core.position.set(0, 1.8, 0);
            group.add(core);
          }
        } else if (biome === BiomeType.Badlands) {
          if (subType < 0.45) {
            // Type 1: Saguaro Cactus (Classic)
            const cactusMat = new THREE.MeshStandardMaterial({ color: 0x556b2f, roughness: 0.8, flatShading: true });
            const mainTrunkGeo = new THREE.CylinderGeometry(0.2, 0.2, 3, 5);
            const mainTrunk = new THREE.Mesh(mainTrunkGeo, cactusMat);
            mainTrunk.position.y = 1.5;
            mainTrunk.castShadow = true;
            group.add(mainTrunk);

            // Branch 1
            const arm1Geo = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 5);
            const arm1 = new THREE.Mesh(arm1Geo, cactusMat);
            arm1.position.set(0.5, 1.8, 0);
            arm1.rotation.z = -Math.PI / 4;
            arm1.castShadow = true;
            group.add(arm1);

            // Branch 2
            const arm2Geo = new THREE.CylinderGeometry(0.15, 0.15, 1.0, 5);
            const arm2 = new THREE.Mesh(arm2Geo, cactusMat);
            arm2.position.set(-0.5, 1.4, 0);
            arm2.rotation.z = Math.PI / 4;
            arm2.castShadow = true;
            group.add(arm2);
          } else if (subType < 0.75) {
            // Type 2: Joshua Tree
            const woodMat = new THREE.MeshStandardMaterial({ color: 0x6e5233, roughness: 0.95, flatShading: true });
            const foliageMat = new THREE.MeshStandardMaterial({ color: 0x475e33, roughness: 0.8, flatShading: true });

            const trunkGeo = new THREE.CylinderGeometry(0.16, 0.25, 2.0, 5);
            const trunk = new THREE.Mesh(trunkGeo, woodMat);
            trunk.position.y = 1.0;
            trunk.castShadow = true;
            group.add(trunk);

            // Left crooked branch
            const b1Geo = new THREE.CylinderGeometry(0.1, 0.14, 1.2, 5);
            const b1 = new THREE.Mesh(b1Geo, woodMat);
            b1.position.set(-0.35, 2.2, 0);
            b1.rotation.z = 0.45;
            group.add(b1);

            const f1Geo = new THREE.DodecahedronGeometry(0.48, 0);
            const f1 = new THREE.Mesh(f1Geo, foliageMat);
            f1.position.set(-0.65, 2.7, 0);
            f1.castShadow = true;
            group.add(f1);

            // Right crooked branch
            const b2Geo = new THREE.CylinderGeometry(0.09, 0.13, 1.4, 5);
            const b2 = new THREE.Mesh(b2Geo, woodMat);
            b2.position.set(0.38, 2.3, 0);
            b2.rotation.z = -0.55;
            group.add(b2);

            const f2Geo = new THREE.DodecahedronGeometry(0.52, 0);
            const f2 = new THREE.Mesh(f2Geo, foliageMat);
            f2.position.set(0.8, 2.9, 0);
            f2.castShadow = true;
            group.add(f2);
          } else {
            // Type 3: Desert Agave spiky plant
            const agaveMat = new THREE.MeshStandardMaterial({ color: 0x487662, roughness: 0.7, flatShading: true });
            const agaveCount = 10;
            for (let k = 0; k < agaveCount; k++) {
              const spikeGeo = new THREE.ConeGeometry(0.15, 1.4, 4);
              spikeGeo.rotateX(0.45);
              const spike = new THREE.Mesh(spikeGeo, agaveMat);
              spike.position.set(0, 0.4, 0);
              spike.rotation.y = (k * Math.PI * 2) / agaveCount;
              spike.rotation.z = 0.15 + Math.random() * 0.15;
              spike.castShadow = true;
              group.add(spike);
            }
          }
        } else if (biome === BiomeType.Volcanic) {
          if (subType < 0.45) {
            // Type 1: Basalt Tree Structure (burnt tree, Classic)
            const trunkGeo = new THREE.CylinderGeometry(0.18, 0.35, 4.0, 5);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.95, flatShading: true });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.y = 2.0;
            trunk.castShadow = true;
            group.add(trunk);

            const branchGeo = new THREE.CylinderGeometry(0.08, 0.12, 1.8, 5);
            for (let i = 0; i < 3; i++) {
              const branch = new THREE.Mesh(branchGeo, trunkMat);
              branch.position.set(0, 2.5 + i * 0.5, 0);
              branch.rotation.z = (i % 2 === 0 ? 1 : -1) * 0.7;
              branch.rotation.y = Math.random() * Math.PI * 2;
              branch.castShadow = true;
              group.add(branch);
            }
          } else if (subType < 0.75) {
            // Type 2: Glowing Magma Crystals / Obsidian Spikes
            const crystalMat = new THREE.MeshStandardMaterial({
              color: 0x180505,
              emissive: 0xe63900,
              roughness: 0.1,
              metalness: 0.9,
              flatShading: true,
            });
            const mainSpikeGeo = new THREE.ConeGeometry(0.4, 2.6, 5);
            const mainSpike = new THREE.Mesh(mainSpikeGeo, crystalMat);
            mainSpike.position.y = 1.2;
            mainSpike.rotation.z = 0.15;
            mainSpike.castShadow = true;
            group.add(mainSpike);

            const sideSpikeGeo = new THREE.ConeGeometry(0.25, 1.6, 4);
            const sideSpike = new THREE.Mesh(sideSpikeGeo, crystalMat);
            sideSpike.position.set(0.35, 0.6, 0.2);
            sideSpike.rotation.set(0.3, 0, -0.45);
            sideSpike.castShadow = true;
            group.add(sideSpike);
          } else {
            // Type 3: Burnt Ash Shrubs (curly charcoal sticks)
            const ashMat = new THREE.MeshStandardMaterial({ color: 0x2d2d2d, roughness: 0.98, flatShading: true });
            for (let k = 0; k < 4; k++) {
              const twigGeo = new THREE.CylinderGeometry(0.06, 0.1, 1.2, 4);
              const twig = new THREE.Mesh(twigGeo, ashMat);
              twig.position.set((Math.random() - 0.5) * 0.4, 0.5, (Math.random() - 0.5) * 0.4);
              twig.rotation.set(
                (Math.random() - 0.5) * 0.6,
                Math.random() * Math.PI * 2,
                (Math.random() - 0.5) * 0.6
              );
              twig.castShadow = true;
              group.add(twig);
            }
          }
        } else {
          // Alpine Biome (or Default)
          if (subType < 0.45) {
            // Type 1: Standard Alpine Pine (Classic)
            const trunkGeo = new THREE.CylinderGeometry(0.3, 0.5, 4, 5);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a3d28, roughness: 0.9, flatShading: true });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.y = 2;
            trunk.castShadow = true;
            group.add(trunk);

            const foliageMat = new THREE.MeshStandardMaterial({ color: 0x1a4314, roughness: 0.8, flatShading: true });
            for (let i = 0; i < 3; i++) {
              const size = 2.4 - i * 0.6;
              const h = 3 - i * 0.4;
              const leavesGeo = new THREE.ConeGeometry(size, h, 5);
              const leaves = new THREE.Mesh(leavesGeo, foliageMat);
              leaves.position.y = 3.5 + i * 1.6;
              leaves.castShadow = true;
              group.add(leaves);
            }
          } else if (subType < 0.75) {
            // Type 2: Broadleaf Birch / Autumn Oak tree
            const trunkGeo = new THREE.CylinderGeometry(0.2, 0.28, 3.2, 6);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0xd9d2c9, roughness: 0.85, flatShading: true }); // Birch-white wood
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.y = 1.6;
            trunk.castShadow = true;
            group.add(trunk);

            const leavesMat = new THREE.MeshStandardMaterial({
              color: 0xdd7d20, // Autumn Orange!
              roughness: 0.75,
              flatShading: true,
            });
            const leavesGeo1 = new THREE.DodecahedronGeometry(1.5, 0);
            const leaves1 = new THREE.Mesh(leavesGeo1, leavesMat);
            leaves1.position.set(0, 3.2, 0);
            leaves1.castShadow = true;
            group.add(leaves1);

            const leavesGeo2 = new THREE.DodecahedronGeometry(1.0, 0);
            const leaves2 = new THREE.Mesh(leavesGeo2, leavesMat);
            leaves2.position.set(0.8, 3.8, 0.4);
            leaves2.castShadow = true;
            group.add(leaves2);

            const leavesGeo3 = new THREE.DodecahedronGeometry(1.1, 0);
            const leaves3 = new THREE.Mesh(leavesGeo3, leavesMat);
            leaves3.position.set(-0.6, 3.5, -0.5);
            leaves3.castShadow = true;
            group.add(leaves3);
          } else {
            // Type 3: Wild Berry Bush
            const bushMat = new THREE.MeshStandardMaterial({ color: 0x2d5a27, roughness: 0.9, flatShading: true });
            const berryMat = new THREE.MeshStandardMaterial({ color: 0xcc1111, roughness: 0.5 });

            // Bush core shape of 3 overlapping spheres
            for (let i = 0; i < 3; i++) {
              const bushCoreGeo = new THREE.DodecahedronGeometry(0.8 + Math.random() * 0.3, 0);
              const bushCore = new THREE.Mesh(bushCoreGeo, bushMat);
              bushCore.position.set(
                (i - 1) * 0.5,
                0.6 + Math.random() * 0.2,
                (Math.random() - 0.5) * 0.4
              );
              bushCore.castShadow = true;
              bushCore.receiveShadow = true;
              group.add(bushCore);

              // Add tiny berry spots on each sphere
              for (let k = 0; k < 3; k++) {
                const berryGeo = new THREE.SphereGeometry(0.12, 4, 4);
                const berry = new THREE.Mesh(berryGeo, berryMat);
                // Position randomly around the sphere top surface
                const theta = Math.random() * Math.PI;
                const phi = Math.random() * Math.PI * 2;
                const r = 0.9;
                berry.position.set(
                  bushCore.position.x + r * Math.sin(theta) * Math.cos(phi),
                  bushCore.position.y + r * Math.cos(theta),
                  bushCore.position.z + r * Math.sin(theta) * Math.sin(phi)
                );
                group.add(berry);
              }
            }
          }
        }
      } else if (randType < 0.88) {
        // Rock & Boulder Generation
        let rockColor = 0x615c57;
        if (biome === BiomeType.Volcanic) rockColor = 0x111111;
        else if (biome === BiomeType.Badlands) rockColor = 0x8c3d20;
        else if (biome === BiomeType.Tropical) rockColor = 0x948b81;

        const rockMat = new THREE.MeshStandardMaterial({ color: rockColor, roughness: 0.9, flatShading: true });
        const rockGeo = new THREE.DodecahedronGeometry(1.6, 1);
        const rock = new THREE.Mesh(rockGeo, rockMat);
        rock.scale.set(1 + Math.random() * 0.8, 0.5 + Math.random() * 1.4, 1 + Math.random() * 0.8);
        rock.position.y = 0.5;
        rock.castShadow = true;
        rock.receiveShadow = true;
        group.add(rock);
      } else {
        // Ancient Ruins & Mystery Pillar Structures
        let stoneColor = 0x82807c;
        if (biome === BiomeType.Badlands) stoneColor = 0x9c654d;
        else if (biome === BiomeType.Volcanic) stoneColor = 0x242426;

        const stoneMat = new THREE.MeshStandardMaterial({ color: stoneColor, roughness: 0.95, flatShading: true });
        // Base block
        const baseGeo = new THREE.BoxGeometry(2.2, 0.6, 2.2);
        const base = new THREE.Mesh(baseGeo, stoneMat);
        base.position.y = 0.3;
        base.castShadow = true;
        group.add(base);

        // Segmented Column Blocks
        const numBlocks = 2 + Math.floor(Math.random() * 4);
        for (let b = 0; b < numBlocks; b++) {
          const blockGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.2, 6);
          const block = new THREE.Mesh(blockGeo, stoneMat);
          block.position.set((Math.random() - 0.5) * 0.1, 0.9 + b * 1.2, (Math.random() - 0.5) * 0.1);
          block.rotation.y = Math.random() * Math.PI;
          block.castShadow = true;
          group.add(block);
        }
      }
      return group;
    };

    // Giant Hollow Cave Arch Model for dramatic fly-throughs with high variety
    const createGiantCaveArch = (type: 'sea_arch' | 'mountain_tunnel' | 'canyon_bridge' | 'classic', biome: BiomeType) => {
      const archGroup = new THREE.Group();
      
      // Dynamic color matching with biome profile
      const baseRockColor = new THREE.Color(BIOME_COLORS[biome].rock);
      const sandColor = BIOME_COLORS[biome].sand;
      const grassColor = BIOME_COLORS[biome].grass;

      // 1. Create a suite of materials with natural variations and terrain blending
      const rockMats: THREE.MeshStandardMaterial[] = [];
      for (let i = 0; i < 5; i++) {
        const c = baseRockColor.clone();
        const variation = (i - 2) * 0.06; // bright to dark
        c.multiplyScalar(1.0 + variation);
        rockMats.push(new THREE.MeshStandardMaterial({
          color: c,
          roughness: 0.85 + Math.random() * 0.15,
          flatShading: true,
        }));
      }

      const lowLevelMats: THREE.MeshStandardMaterial[] = [];
      for (let i = 0; i < 3; i++) {
        const c = baseRockColor.clone().lerp(sandColor, 0.4 + i * 0.12);
        lowLevelMats.push(new THREE.MeshStandardMaterial({
          color: c,
          roughness: 0.9,
          flatShading: true,
        }));
      }

      const midLevelMats: THREE.MeshStandardMaterial[] = [];
      for (let i = 0; i < 3; i++) {
        const c = baseRockColor.clone().lerp(grassColor, 0.35 + i * 0.1);
        midLevelMats.push(new THREE.MeshStandardMaterial({
          color: c,
          roughness: 0.88,
          flatShading: true,
        }));
      }

      // Customize radius, depth and shape based on the type
      let radius = 120;
      let depth = 200;
      let heightMult = 0.95;
      let rockSizeBase = 22;
      let numSegments = 16;
      let depthSteps = 6;
      let crystalCount = 15;

      if (type === 'sea_arch') {
        radius = 70 + Math.random() * 20;
        depth = 90 + Math.random() * 30;
        heightMult = 0.85; // slightly squatter
        rockSizeBase = 16;
        numSegments = 14;
        depthSteps = 4;
        crystalCount = 6; // fewer crystals in sea water
      } else if (type === 'mountain_tunnel') {
        radius = 130 + Math.random() * 30;
        depth = 320 + Math.random() * 80; // extremely long deep tunnel
        heightMult = 1.05; // tall and dramatic
        rockSizeBase = 26;
        numSegments = 22;
        depthSteps = 10;
        crystalCount = 35; // loads of glowing crystals inside the deep mountain
      } else if (type === 'canyon_bridge') {
        radius = 110 + Math.random() * 20;
        depth = 60 + Math.random() * 20; // thin, flat bridge
        heightMult = 0.7; // flat arch bridge
        rockSizeBase = 24;
        numSegments = 15;
        depthSteps = 3;
        crystalCount = 10;
      } else { // classic
        radius = 100 + Math.random() * 30;
        depth = 170 + Math.random() * 50;
        heightMult = 0.95;
        rockSizeBase = 22;
        numSegments = 16;
        depthSteps = 6;
        crystalCount = 15;
      }

      for (let s = 0; s < numSegments; s++) {
        const angle = (s / (numSegments - 1)) * Math.PI;
        
        for (let d = 0; d < depthSteps; d++) {
          const zProgress = (d - (depthSteps - 1) / 2) / (depthSteps - 1 || 1); // -0.5 to 0.5
          const z = zProgress * depth;
          
          // Apply a general wiggle along the tunnel length to break up straight tunnels (organic caves)
          const tunnelWiggleX = Math.sin(zProgress * Math.PI * 1.5) * (radius * 0.22);
          const tunnelWiggleY = Math.cos(zProgress * Math.PI * 1.5) * (radius * 0.08);

          // Dynamic contractions/expansions along the length for organic realism!
          const radiusScale = 1.0 + 0.25 * Math.sin(zProgress * Math.PI * 2.5);
          const currentRadius = radius * radiusScale;

          const x = Math.cos(angle) * currentRadius + tunnelWiggleX;
          const y = Math.sin(angle) * (currentRadius * heightMult) + tunnelWiggleY;

          // Random offsets on individual rocks to make the surface look jagged and natural
          const ox = (Math.sin(z * 0.05) + Math.cos(angle * 3.0)) * 5;
          const oy = (Math.cos(z * 0.05) + Math.sin(angle * 2.5)) * 5;
          const oz = (Math.random() - 0.5) * 6;

          // Height-based material selection for natural terrain blending
          const absY = y + oy;
          let rockMat = rockMats[Math.floor(Math.random() * rockMats.length)];
          if (absY < 24.0) {
            rockMat = lowLevelMats[Math.floor(Math.random() * lowLevelMats.length)];
          } else if (absY < 60.0) {
            rockMat = midLevelMats[Math.floor(Math.random() * midLevelMats.length)];
          }

          const rockSize = rockSizeBase + Math.random() * (rockSizeBase * 0.6);
          const rockGeo = new THREE.DodecahedronGeometry(rockSize, 1);
          const rock = new THREE.Mesh(rockGeo, rockMat);
          rock.position.set(x + ox, y + oy, z + oz);
          rock.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          rock.castShadow = true;
          rock.receiveShadow = true;
          archGroup.add(rock);

          // If at the pillars base, spawn extra grounding foundation rocks for smooth landscape blending
          if (s === 0 || s === numSegments - 1) {
            const groundY = -12.0 + Math.random() * 8.0;
            const groundSize = rockSize * (1.35 + Math.random() * 0.45);
            const groundGeo = new THREE.DodecahedronGeometry(groundSize, 1);
            const groundMat = lowLevelMats[Math.floor(Math.random() * lowLevelMats.length)];
            const groundRock = new THREE.Mesh(groundGeo, groundMat);
            groundRock.position.set(x + ox + (Math.random() - 0.5) * 16.0, groundY, z + oz + (Math.random() - 0.5) * 16.0);
            groundRock.rotation.set(
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI
            );
            groundRock.castShadow = true;
            groundRock.receiveShadow = true;
            archGroup.add(groundRock);
          }
        }
      }

      // Add gorgeous high-contrast glowing crystals hanging from cave ceiling
      const crystalColors = [0x00ffaa, 0x00dfff, 0xff00ff, 0xffbb00, 0xff2255];
      const crystalGeo = new THREE.ConeGeometry(2.5, 12, 4);
      for (let i = 0; i < crystalCount; i++) {
        const col = crystalColors[Math.floor(Math.random() * crystalColors.length)];
        const crystalMat = new THREE.MeshBasicMaterial({ color: col });
        const crystal = new THREE.Mesh(crystalGeo, crystalMat);
        
        const angle = 0.25 * Math.PI + Math.random() * 0.5 * Math.PI; // concentrate on ceiling
        const zProgress = (Math.random() - 0.5);
        const z = zProgress * (depth - 20);
        
        const tunnelWiggleX = Math.sin(zProgress * Math.PI * 1.5) * (radius * 0.22);
        const tunnelWiggleY = Math.cos(zProgress * Math.PI * 1.5) * (radius * 0.08);

        // Dynamic contractions/expansions along the length also for crystals
        const radiusScale = 1.0 + 0.25 * Math.sin(zProgress * Math.PI * 2.5);
        const currentRadius = radius * radiusScale;

        // Position slightly below the inner shell
        const cx = Math.cos(angle) * (currentRadius - 8) + tunnelWiggleX;
        const cy = Math.sin(angle) * (currentRadius * heightMult - 8) + tunnelWiggleY;

        crystal.position.set(cx, cy, z);
        crystal.rotation.x = Math.PI;
        crystal.rotation.z = angle - Math.PI / 2;
        archGroup.add(crystal);
      }

      // Save parameters on group for collision check
      (archGroup as any).radius = radius;
      (archGroup as any).depth = depth;
      (archGroup as any).heightMult = heightMult;
      (archGroup as any).wiggleAmpX = radius * 0.22;
      (archGroup as any).type = type;

      return archGroup;
    };

    // Helper: Create a scenic 3D waterfall model
    const createWaterfallModel = (x: number, hTop: number, z: number, hBot: number, angle: number, drop: number) => {
      const group = new THREE.Group();
      group.position.set(x, hTop, z);
      
      const width = 14 + Math.random() * 8;
      const sheetGeo = new THREE.PlaneGeometry(width, drop);
      // Pivot at top-center, facing forward
      sheetGeo.translate(0, -drop / 2, 1);
      
      const sheetMat = new THREE.MeshPhongMaterial({
        color: 0xd0f2ff,
        emissive: 0x1a3a4a,
        specular: 0xffffff,
        shininess: 100,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
        flatShading: true
      });
      
      const sheet = new THREE.Mesh(sheetGeo, sheetMat);
      sheet.rotation.y = angle + Math.PI / 2;
      group.add(sheet);

      // 1. UPPER RIVER SOURCE (Frames waterfall starting from a river channel)
      const riverLength = 40;
      const upperRiverGeo = new THREE.PlaneGeometry(width * 1.1, riverLength);
      upperRiverGeo.rotateX(-Math.PI / 2);
      // Extend backwards from the crest of the waterfall
      upperRiverGeo.translate(0, 0.25, -riverLength / 2);
      
      const upperRiverMat = new THREE.MeshPhongMaterial({
        color: 0x0c3752,
        specular: 0x5cd6ff,
        shininess: 120,
        transparent: true,
        opacity: 0.85,
        flatShading: true
      });
      const upperRiver = new THREE.Mesh(upperRiverGeo, upperRiverMat);
      upperRiver.rotation.y = angle + Math.PI / 2;
      group.add(upperRiver);

      // Rocky canyon walls flanking the river source
      const rockMat = new THREE.MeshStandardMaterial({ color: 0x565350, roughness: 0.9, flatShading: true });
      const cleftLeftGeo = new THREE.DodecahedronGeometry(6 + Math.random() * 4, 1);
      const cleftLeft = new THREE.Mesh(cleftLeftGeo, rockMat);
      cleftLeft.position.set(-width / 2 - 4, 1.2, -10);
      cleftLeft.rotation.set(Math.random(), Math.random(), Math.random());
      cleftLeft.scale.set(1.2, 1.8, 1.2);
      
      const cleftRightGeo = new THREE.DodecahedronGeometry(6 + Math.random() * 4, 1);
      const cleftRight = new THREE.Mesh(cleftRightGeo, rockMat);
      cleftRight.position.set(width / 2 + 4, 1.2, -10);
      cleftRight.rotation.set(Math.random(), Math.random(), Math.random());
      cleftRight.scale.set(1.2, 1.8, 1.2);

      // Parent rotated group to align flanking rocks along the channel
      const cleftGroup = new THREE.Group();
      cleftGroup.add(cleftLeft);
      cleftGroup.add(cleftRight);
      cleftGroup.rotation.y = angle + Math.PI / 2;
      group.add(cleftGroup);
      
      // 2. LOWER PLUNGE POOL & ROCK BASIN (Frames waterfall landing in a pool/river)
      const splashPoolGeo = new THREE.RingGeometry(0.1, width * 1.4, 12);
      splashPoolGeo.rotateX(-Math.PI / 2);
      splashPoolGeo.translate(0, -drop + 0.35, 3.5); // centered where water hits

      const splashPoolMat = new THREE.MeshPhongMaterial({
        color: 0x114e75,
        specular: 0xffffff,
        shininess: 150,
        transparent: true,
        opacity: 0.92,
        side: THREE.DoubleSide,
        flatShading: true
      });
      const splashPool = new THREE.Mesh(splashPoolGeo, splashPoolMat);
      splashPool.rotation.y = angle + Math.PI / 2;
      group.add(splashPool);

      // Ring of boulders surrounding the plunge pool
      const poolBoulders = new THREE.Group();
      poolBoulders.position.set(0, -drop, 3.5);
      
      const numBoulders = 7 + Math.floor(Math.random() * 4);
      for (let i = 0; i < numBoulders; i++) {
        const bAngle = (i / numBoulders) * Math.PI * 2 + Math.random() * 0.3;
        const bDist = width * 1.2 + Math.random() * 4.0;
        const bSize = 4.5 + Math.random() * 4.0;
        
        const bGeo = new THREE.DodecahedronGeometry(bSize, 1);
        const boulder = new THREE.Mesh(bGeo, rockMat);
        boulder.position.set(Math.cos(bAngle) * bDist, bSize * 0.35 - 2.0, Math.sin(bAngle) * bDist);
        boulder.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        boulder.scale.set(1.2 + Math.random() * 0.4, 0.75 + Math.random() * 0.6, 1.2 + Math.random() * 0.4);
        boulder.castShadow = true;
        boulder.receiveShadow = true;
        poolBoulders.add(boulder);
      }
      poolBoulders.rotation.y = angle + Math.PI / 2;
      group.add(poolBoulders);

      // Foaming splash spheres at the bottom
      const foamGroup = new THREE.Group();
      foamGroup.position.set(0, -drop, 3.5); // Match the landing offset
      
      const foamMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.85
      });
      
      const foams: THREE.Mesh[] = [];
      const numFoams = 6 + Math.floor(Math.random() * 5);
      for (let i = 0; i < numFoams; i++) {
        const size = 3 + Math.random() * 4;
        const foamGeo = new THREE.DodecahedronGeometry(size, 1);
        const foam = new THREE.Mesh(foamGeo, foamMat.clone());
        foam.position.set(
          (Math.random() - 0.5) * width,
          Math.random() * 3,
          (Math.random() - 0.5) * 5
        );
        foamGroup.add(foam);
        foams.push(foam);
      }
      group.add(foamGroup);
      
      (group as any).foams = foams;
      (group as any).timeOffset = Math.random() * 100;
      
      return group;
    };

    // Shoreline reed cluster generator
    const createReedCluster = () => {
      const group = new THREE.Group();
      const stalkMat = new THREE.MeshStandardMaterial({ color: 0x3b5e2b, roughness: 0.8, flatShading: true });
      const headMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9, flatShading: true });

      const numStalks = 10 + Math.floor(Math.random() * 10);
      for (let i = 0; i < numStalks; i++) {
        const stalkGroup = new THREE.Group();
        const h = 2.5 + Math.random() * 2.0;
        const r = 0.05 + Math.random() * 0.05;

        const stalkGeo = new THREE.CylinderGeometry(r, r * 1.2, h, 4);
        const stalk = new THREE.Mesh(stalkGeo, stalkMat);
        stalk.position.y = h / 2;
        stalk.castShadow = true;
        stalkGroup.add(stalk);

        // Reed tip/head (bulrush brown seed head)
        const headH = 0.6 + Math.random() * 0.4;
        const headGeo = new THREE.CylinderGeometry(r * 1.8, r * 1.8, headH, 4);
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = h - headH / 2;
        head.castShadow = true;
        stalkGroup.add(head);

        const radius = 1.5 + Math.random() * 2.5;
        const angle = Math.random() * Math.PI * 2;
        stalkGroup.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
        
        stalkGroup.rotation.x = (Math.random() - 0.5) * 0.15;
        stalkGroup.rotation.z = (Math.random() - 0.5) * 0.15;

        group.add(stalkGroup);
      }
      return group;
    };

    // Rock pile cluster generator
    const createRockCluster = (biome: BiomeType) => {
      const group = new THREE.Group();
      let rockColor = 0x615c57;
      if (biome === BiomeType.Volcanic) rockColor = 0x111111;
      else if (biome === BiomeType.Badlands) rockColor = 0x8c3d20;
      else if (biome === BiomeType.Tropical) rockColor = 0x948b81;

      const rockMat = new THREE.MeshStandardMaterial({ color: rockColor, roughness: 0.9, flatShading: true });
      const numRocks = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < numRocks; i++) {
        const size = 1.5 + Math.random() * 3.5;
        const rockGeo = new THREE.DodecahedronGeometry(size, 1);
        const rock = new THREE.Mesh(rockGeo, rockMat);
        
        const radius = 1.0 + Math.random() * 4.0;
        const angle = Math.random() * Math.PI * 2;
        rock.position.set(Math.cos(angle) * radius, size * 0.3, Math.sin(angle) * radius);
        
        rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        rock.scale.set(1 + Math.random() * 0.5, 0.7 + Math.random() * 0.7, 1 + Math.random() * 0.5);
        rock.castShadow = true;
        rock.receiveShadow = true;
        group.add(rock);
      }
      return group;
    };

    // 8. PROCEDURAL CHUNK BUILDER
    class TerrainChunk {
      gridX: number;
      gridZ: number;
      mesh: THREE.Group;
      caves: Array<{
        x: number;
        y: number;
        z: number;
        rotationY: number;
        radius: number;
        depth: number;
        heightMult: number;
        wiggleAmpX: number;
        type: string;
      }> = [];
      waterfalls: any[] = [];

      constructor(gridX: number, gridZ: number) {
        this.gridX = gridX;
        this.gridZ = gridZ;
        this.mesh = new THREE.Group();

        const xOffset = gridX * CHUNK_SIZE;
        const zOffset = gridZ * CHUNK_SIZE;

        const geometry = new THREE.PlaneGeometry(CHUNK_SIZE, CHUNK_SIZE, CHUNK_RES, CHUNK_RES);
        geometry.rotateX(-Math.PI / 2);

        const pos = geometry.attributes.position;
        const colors: number[] = [];
        const colorObj = new THREE.Color();
        const cols = CHUNK_RES + 1;

        // Pass 1: Set Heights with a gentle organic noise shift to break up flat cliff grids.
        // Pass 1: Set Heights on a clean uniform grid to prevent any self-intersection or protruding polygons on steep slopes
        for (let i = 0; i < pos.count; i++) {
          const vx = pos.getX(i) + xOffset;
          const vz = pos.getZ(i) + zOffset;
          
          const { height } = getTerrainHeightAndBiome(vx, vz);
          pos.setY(i, height);
        }

        geometry.computeVertexNormals();
        const normals = geometry.attributes.normal;

        // Pass 2: Physically Accurate Colors & Crevice Ambient Occlusion
        for (let i = 0; i < pos.count; i++) {
          const vx = pos.getX(i) + xOffset;
          const vz = pos.getZ(i) + zOffset;
          const h = pos.getY(i);
          const { biomeType, bValue } = getTerrainHeightAndBiome(vx, vz);

          const ny = normals.getY(i);
          const slope = 1.0 - ny;

          let hLeft = h;
          let hRight = h;
          let hBack = h;
          let hForward = h;

          const row = Math.floor(i / cols);
          const col = i % cols;

          if (col > 0) hLeft = pos.getY(i - 1);
          if (col < CHUNK_RES) hRight = pos.getY(i + 1);
          if (row > 0) hBack = pos.getY(i - cols);
          if (row < CHUNK_RES) hForward = pos.getY(i + cols);

          const avgNeighborHeight = (hLeft + hRight + hBack + hForward) / 4;
          const creviceDepth = h - avgNeighborHeight;

          let aoFactor = 1.0;
          if (creviceDepth < 0) {
            aoFactor = THREE.MathUtils.clamp(1.0 + creviceDepth * 0.04, 0.45, 1.0);
          } else {
            aoFactor = THREE.MathUtils.clamp(1.0 + creviceDepth * 0.01, 1.0, 1.15);
          }

          const profile = getBlendedColorProfile(bValue);

          let baseColor = new THREE.Color();
          if (h < 60) {
            baseColor.copy(profile.grass);
          } else if (h < 190) {
            // Smoothly transition from grass (foothills) to rock (mountains) over a wide range
            const t = THREE.MathUtils.smoothstep(h, 60, 190);
            baseColor.copy(profile.grass).lerp(profile.rock, t);
          } else if (h < 300) {
            // Smoothly transition from rock (gray) to snow (white) over a wide range
            const t = THREE.MathUtils.smoothstep(h, 190, 300);
            baseColor.copy(profile.rock).lerp(profile.snow, t);
          } else {
            baseColor.copy(profile.snow);
          }

          const sandMin = WATER_LEVEL - 5.0;
          const sandMax = WATER_LEVEL + 16.0;
          if (h < sandMax) {
            const sandWeight = THREE.MathUtils.smoothstep(h, sandMin, sandMax);
            colorObj.copy(profile.sand).lerp(baseColor, sandWeight);
          } else {
            colorObj.copy(baseColor);
          }

          if (slope > 0.22) {
            const rockBlend = THREE.MathUtils.clamp((slope - 0.22) / 0.18, 0.0, 1.0);
            colorObj.lerp(profile.rock, rockBlend);
          }

          colorObj.multiplyScalar(aoFactor);

          const microVariation = noiseInstance.noise2D(vx * 0.05, vz * 0.05) * 0.04;
          colorObj.offsetHSL(0, 0, microVariation);

          colors.push(colorObj.r, colorObj.g, colorObj.b);
        }

        geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 0.88,
          metalness: 0.03,
          flatShading: false,
        });

        const chunkMesh = new THREE.Mesh(geometry, material);
        chunkMesh.position.set(xOffset, 0, zOffset);
        chunkMesh.receiveShadow = true;
        chunkMesh.castShadow = true;
        this.mesh.add(chunkMesh);

        // --- STATIC LOCAL CHUNK WATER PLANE ---
        // Determine the dominant biome of the chunk at its center
        const centerWorldX = xOffset;
        const centerWorldZ = zOffset;
        const { biomeType: chunkBiome } = getTerrainHeightAndBiome(centerWorldX, centerWorldZ);

        // Clustered Vegetation & Environment Spawning Engine (Instanced for maximum performance)
        const instanceData: Record<string, THREE.Matrix4[]> = {
          alpineTrunk: [],
          alpineFoliage1: [],
          alpineFoliage2: [],
          alpineFoliage3: [],
          tropicalTrunk: [],
          tropicalLeaf: [],
          badlandsCactusTrunk: [],
          badlandsCactusArm1: [],
          badlandsCactusArm2: [],
          volcanicTrunk: [],
          volcanicBranch: [],
          arcticTrunk: [],
          arcticFoliage1: [],
          arcticFoliage2: [],
          forestTrunk: [],
          forestFoliage1: [],
          forestFoliage2: [],
          forestFoliage3: [],
          rockAlpine: [],
          rockVolcanic: [],
          rockBadlands: [],
          rockTropical: [],
          reedStalk: [],
          reedHead: [],
          basaltColumn: [],
          bush: [],
          flowerStem: [],
          flowerRed: [],
          flowerYellow: [],
          flowerPurple: [],
        };

        const addInstance = (type: string, pos: THREE.Vector3, rot: THREE.Euler, scale: THREE.Vector3) => {
          const matrix = new THREE.Matrix4();
          const quaternion = new THREE.Quaternion().setFromEuler(rot);
          matrix.compose(pos, quaternion, scale);
          instanceData[type].push(matrix);
        };

        let forestCount = 10 + Math.floor(Math.random() * 8); // Even more lush forests!
        if (chunkBiome === BiomeType.Badlands) {
          forestCount = 0; // Deserts have cacti instead
        } else if (chunkBiome === BiomeType.Volcanic) {
          forestCount = 7 + Math.floor(Math.random() * 6); // Richer charred forests
        } else if (chunkBiome === BiomeType.Forest) {
          forestCount = 18 + Math.floor(Math.random() * 12); // Dense green forest trees!
        } else if (chunkBiome === BiomeType.Arctic) {
          forestCount = 4 + Math.floor(Math.random() * 4); // Sparse snowy pine communities
        }

        for (let f = 0; f < forestCount; f++) {
          let cx = 0, cz = 0, cy = 0;
          let found = false;
          for (let attempts = 0; attempts < 40; attempts++) {
            cx = xOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.85;
            cz = zOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.85;
            const { height } = getTerrainHeightAndBiome(cx, cz);
            if (height > WATER_LEVEL + 5 && height < 300) {
              cy = height;
              found = true;
              break;
            }
          }
          if (!found) continue;

          // Spawn a beautifully clustered community of 50 to 95 trees for a highly populated look
          const numTrees = 50 + Math.floor(Math.random() * 45);
          const rad = 30 + Math.random() * 20; // larger grove radius
          for (let t = 0; t < numTrees; t++) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.pow(Math.random(), 1.4) * rad; // denser at the center
            const tx = cx + Math.cos(angle) * r;
            const tz = cz + Math.sin(angle) * r;
            const { height: ty } = getTerrainHeightAndBiome(tx, tz);

            if (ty > WATER_LEVEL + 4 && ty < 320) {
              const scaleVal = (0.7 + Math.random() * 1.3) * 1.35; // 35% larger vegetation!
              const scale = new THREE.Vector3(scaleVal, scaleVal, scaleVal);
              const rot = new THREE.Euler(
                (Math.random() - 0.5) * 0.08,
                Math.random() * Math.PI * 2,
                (Math.random() - 0.5) * 0.08
              );
              const pos = new THREE.Vector3(tx, ty - 0.15, tz);

              if (chunkBiome === BiomeType.Alpine) {
                addInstance("alpineTrunk", pos, rot, scale);
                addInstance("alpineFoliage1", pos, rot, scale);
                addInstance("alpineFoliage2", pos, rot, scale);
                addInstance("alpineFoliage3", pos, rot, scale);
              } else if (chunkBiome === BiomeType.Tropical) {
                addInstance("tropicalTrunk", pos, rot, scale);
                for (let k = 0; k < 6; k++) {
                  const leafRot = new THREE.Euler(-0.3, rot.y + (k * Math.PI) / 3, rot.z);
                  const leafScale = new THREE.Vector3(scaleVal, scaleVal, scaleVal);
                  const leafPos = new THREE.Vector3(0, 4.3 * scaleVal, 0).applyEuler(rot).add(pos);
                  addInstance("tropicalLeaf", leafPos, leafRot, leafScale);
                }
              } else if (chunkBiome === BiomeType.Volcanic) {
                addInstance("volcanicTrunk", pos, rot, scale);
                for (let i = 0; i < 3; i++) {
                  const bRot = new THREE.Euler(
                    rot.x,
                    rot.y + Math.random() * Math.PI * 2,
                    rot.z + (i % 2 === 0 ? 1 : -1) * 0.7
                  );
                  const bPos = new THREE.Vector3(0, (2.5 + i * 0.5) * scaleVal, 0).applyEuler(rot).add(pos);
                  const bScale = new THREE.Vector3(scaleVal, scaleVal, scaleVal);
                  addInstance("volcanicBranch", bPos, bRot, bScale);
                }
              } else if (chunkBiome === BiomeType.Forest) {
                addInstance("forestTrunk", pos, rot, scale);
                addInstance("forestFoliage1", pos, rot, scale);
                addInstance("forestFoliage2", pos, rot, scale);
                addInstance("forestFoliage3", pos, rot, scale);
              } else if (chunkBiome === BiomeType.Arctic) {
                addInstance("arcticTrunk", pos, rot, scale);
                addInstance("arcticFoliage1", pos, rot, scale);
                addInstance("arcticFoliage2", pos, rot, scale);
              }

              // Undergrowth bushes around forest trees to create high organic density
              if (Math.random() < 0.65) {
                const numShrubs = 1 + Math.floor(Math.random() * 2);
                for (let s = 0; s < numShrubs; s++) {
                  const sAngle = Math.random() * Math.PI * 2;
                  const sDist = 1.5 + Math.random() * 2.5;
                  const sx = tx + Math.cos(sAngle) * sDist;
                  const sz = tz + Math.sin(sAngle) * sDist;
                  const { height: sy } = getTerrainHeightAndBiome(sx, sz);
                  if (sy > WATER_LEVEL + 4 && sy < 320) {
                    const sScaleVal = 0.55 + Math.random() * 0.9;
                    const sScale = new THREE.Vector3(sScaleVal, sScaleVal * (0.85 + Math.random() * 0.3), sScaleVal);
                    const sRot = new THREE.Euler(0, Math.random() * Math.PI * 2, 0);
                    const sPos = new THREE.Vector3(sx, sy - 0.05, sz);
                    addInstance("bush", sPos, sRot, sScale);
                  }
                }
              }
            }
          }
        }

        // 1.5. COLORFUL MEADOW FLOWER FIELDS
        if (chunkBiome === BiomeType.Alpine || chunkBiome === BiomeType.Tropical || chunkBiome === BiomeType.Forest) {
          const flowerPatchCount = 10 + Math.floor(Math.random() * 8);
          for (let fp = 0; fp < flowerPatchCount; fp++) {
            const cx = xOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.85;
            const cz = zOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.85;
            const { height: cy } = getTerrainHeightAndBiome(cx, cz);
            
            if (cy > WATER_LEVEL + 8 && cy < 110) {
              const numFlowers = 25 + Math.floor(Math.random() * 30);
              const patchRadius = 8 + Math.random() * 12;
              for (let fl = 0; fl < numFlowers; fl++) {
                const fAngle = Math.random() * Math.PI * 2;
                const fDist = Math.sqrt(Math.random()) * patchRadius;
                const fx = cx + Math.cos(fAngle) * fDist;
                const fz = cz + Math.sin(fAngle) * fDist;
                const { height: fy } = getTerrainHeightAndBiome(fx, fz);
                
                if (fy > WATER_LEVEL + 6 && fy < 120) {
                  const stemScaleVal = 0.6 + Math.random() * 0.7;
                  const fScale = new THREE.Vector3(stemScaleVal, stemScaleVal, stemScaleVal);
                  const fRot = new THREE.Euler(
                    (Math.random() - 0.5) * 0.15,
                    Math.random() * Math.PI * 2,
                    (Math.random() - 0.5) * 0.15
                  );
                  const fPos = new THREE.Vector3(fx, fy - 0.02, fz);
                  
                  // Stem and Petals
                  addInstance("flowerStem", fPos, fRot, fScale);
                  const petalColorKeys = ["flowerRed", "flowerYellow", "flowerPurple"];
                  const chosenColorKey = petalColorKeys[Math.floor(Math.random() * petalColorKeys.length)];
                  addInstance(chosenColorKey, fPos, fRot, fScale);
                }
              }
            }
          }
        }

        // 2. STONE GARDENS & ROCK PILE CLUSTERS
        const stoneGardenCount = 8 + Math.floor(Math.random() * 8);
        for (let sg = 0; sg < stoneGardenCount; sg++) {
          let cx = 0, cz = 0, cy = 0;
          let found = false;
          for (let attempts = 0; attempts < 30; attempts++) {
            cx = xOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.85;
            cz = zOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.85;
            const { height } = getTerrainHeightAndBiome(cx, cz);
            if (height > WATER_LEVEL + 2 && height < 320) {
              cy = height;
              found = true;
              break;
            }
          }
          if (!found) continue;

          // Spawn 15 to 30 rocks piled and clustered closely
          const numRocks = 15 + Math.floor(Math.random() * 15);
          const rad = 15 + Math.random() * 12;
          let rockType = "rockAlpine";
          if (chunkBiome === BiomeType.Volcanic) rockType = "rockVolcanic";
          else if (chunkBiome === BiomeType.Badlands) rockType = "rockBadlands";
          else if (chunkBiome === BiomeType.Tropical) rockType = "rockTropical";

          for (let rIdx = 0; rIdx < numRocks; rIdx++) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.pow(Math.random(), 1.2) * rad;
            const rx = cx + Math.cos(angle) * r;
            const rz = cz + Math.sin(angle) * r;
            const { height: ry } = getTerrainHeightAndBiome(rx, rz);

            if (ry > WATER_LEVEL - 5 && ry < 340) {
              const size = 1.8 + Math.random() * 4.5;
              let posY = ry - size * 0.2;
              if (rIdx > numRocks * 0.6) {
                posY += size * 0.4 + Math.random() * 1.8;
              }
              const pos = new THREE.Vector3(rx, posY, rz);
              const rot = new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
              const scale = new THREE.Vector3(
                (1.1 + Math.random() * 0.5) * size,
                (0.65 + Math.random() * 0.7) * size,
                (1.1 + Math.random() * 0.5) * size
              );
              addInstance(rockType, pos, rot, scale);
            }
          }
        }

        // 3. SHORELINE REED GROVES
        const reedGroveCount = 12 + Math.floor(Math.random() * 10);
        for (let rg = 0; rg < reedGroveCount; rg++) {
          let cx = 0, cz = 0, cy = 0;
          let found = false;
          for (let attempts = 0; attempts < 60; attempts++) {
            cx = xOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.85;
            cz = zOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.85;
            const { height } = getTerrainHeightAndBiome(cx, cz);
            if (height >= WATER_LEVEL + 0.3 && height <= WATER_LEVEL + 4.5) {
              cy = height;
              found = true;
              break;
            }
          }
          if (!found) continue;

          // Spawn 45 to 85 reed stalks tightly clumped for a lush shoreline
          const numReeds = 45 + Math.floor(Math.random() * 40);
          const rad = 12 + Math.random() * 12;

          for (let rIdx = 0; rIdx < numReeds; rIdx++) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.pow(Math.random(), 1.1) * rad;
            const rx = cx + Math.cos(angle) * r;
            const rz = cz + Math.sin(angle) * r;
            const { height: ry } = getTerrainHeightAndBiome(rx, rz);

            if (ry >= WATER_LEVEL - 2 && ry <= WATER_LEVEL + 8.0) {
              const h = (2.8 + Math.random() * 2.5) * 1.35; // 35% larger reeds!
              const rWidth = (0.05 + Math.random() * 0.06) * 1.35; // 35% wider reeds!

              const pos = new THREE.Vector3(rx, ry - 0.1, rz);
              const rot = new THREE.Euler(
                (Math.random() - 0.5) * 0.2,
                Math.random() * Math.PI * 2,
                (Math.random() - 0.5) * 0.2
              );

              // Stalk
              const stalkScale = new THREE.Vector3(rWidth / 0.1, h, rWidth / 0.1);
              addInstance("reedStalk", pos, rot, stalkScale);

              // Head
              const headH = 0.7 + Math.random() * 0.5;
              const headScale = new THREE.Vector3(rWidth / 0.1, headH, rWidth / 0.1);
              const headPos = new THREE.Vector3(0, h - headH, 0).applyEuler(rot).add(pos);
              addInstance("reedHead", headPos, rot, headScale);
            }
          }
        }

        // 4. BIOME-SPECIFIC VEGETATION PATCHES (Desert Cactus Patches & Volcanic Basalt Columns)
        if (chunkBiome === BiomeType.Badlands) {
          const cactusPatchCount = 12 + Math.floor(Math.random() * 9);
          for (let cp = 0; cp < cactusPatchCount; cp++) {
            const cx = xOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.8;
            const cz = zOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.8;
            const { height } = getTerrainHeightAndBiome(cx, cz);
            if (height > WATER_LEVEL + 5.0 && height < 240) {
              const numCacti = 40 + Math.floor(Math.random() * 30);
              const rad = 20 + Math.random() * 15;
              for (let c = 0; c < numCacti; c++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.pow(Math.random(), 1.1) * rad;
                const tx = cx + Math.cos(angle) * r;
                const tz = cz + Math.sin(angle) * r;
                const { height: ty } = getTerrainHeightAndBiome(tx, tz);
                if (ty > WATER_LEVEL + 4.0 && ty < 260) {
                  const scaleVal = (0.8 + Math.random() * 1.2) * 1.35; // 35% larger desert cacti!
                  const scale = new THREE.Vector3(scaleVal, scaleVal, scaleVal);
                  const rot = new THREE.Euler(0, Math.random() * Math.PI * 2, 0);
                  const pos = new THREE.Vector3(tx, ty - 0.15, tz);

                  addInstance("badlandsCactusTrunk", pos, rot, scale);

                  const b1Rot = new THREE.Euler(rot.x, rot.y, rot.z - Math.PI / 4);
                  const b1Pos = new THREE.Vector3(0.5 * scaleVal, 1.8 * scaleVal, 0).applyEuler(rot).add(pos);
                  addInstance("badlandsCactusArm1", b1Pos, b1Rot, scale);

                  const b2Rot = new THREE.Euler(rot.x, rot.y, rot.z + Math.PI / 4);
                  const b2Pos = new THREE.Vector3(-0.5 * scaleVal, 1.4 * scaleVal, 0).applyEuler(rot).add(pos);
                  addInstance("badlandsCactusArm2", b2Pos, b2Rot, scale);
                }
              }
            }
          }
        } else if (chunkBiome === BiomeType.Volcanic) {
          const basaltPatchCount = 12 + Math.floor(Math.random() * 9);
          for (let bp = 0; bp < basaltPatchCount; bp++) {
            const cx = xOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.8;
            const cz = zOffset + (Math.random() - 0.5) * CHUNK_SIZE * 0.8;
            const { height } = getTerrainHeightAndBiome(cx, cz);
            if (height > WATER_LEVEL + 5.0 && height < 250) {
              const numBasalts = 55 + Math.floor(Math.random() * 45);
              const rad = 20 + Math.random() * 15;
              for (let b = 0; b < numBasalts; b++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.pow(Math.random(), 1.2) * rad;
                const tx = cx + Math.cos(angle) * r;
                const tz = cz + Math.sin(angle) * r;
                const { height: ty } = getTerrainHeightAndBiome(tx, tz);
                if (ty > WATER_LEVEL + 4.0 && ty < 300) {
                  const bHeight = 10 + Math.random() * 25;
                  const rWidth = 2 + Math.random() * 1.5;
                  const pos = new THREE.Vector3(tx, ty + bHeight / 2 - 2.0, tz);
                  const rot = new THREE.Euler(
                    (Math.random() - 0.5) * 0.05,
                    Math.floor(Math.random() * 6) * (Math.PI / 3),
                    (Math.random() - 0.5) * 0.05
                  );
                  const scale = new THREE.Vector3(rWidth, bHeight, rWidth);
                  addInstance("basaltColumn", pos, rot, scale);
                }
              }
            }
          }
        }

        // Create, fill and append all InstancedMeshes
        for (const [key, matrices] of Object.entries(instanceData)) {
          if (matrices.length > 0) {
            const config = instancedMeshConfig[key];
            const instMesh = new THREE.InstancedMesh(config.geometry, config.material, matrices.length);
            instMesh.castShadow = true;
            instMesh.receiveShadow = true;
            for (let i = 0; i < matrices.length; i++) {
              instMesh.setMatrixAt(i, matrices[i]);
            }
            instMesh.instanceMatrix.needsUpdate = true;
            this.mesh.add(instMesh);
          }
        }

        // Procedural Waterfall Spawning
        if (gridX % 2 === 0 || gridZ % 2 === 0) {
          for (let attempts = 0; attempts < 15; attempts++) {
            const tx = xOffset + (Math.random() - 0.5) * (CHUNK_SIZE * 0.8);
            const tz = zOffset + (Math.random() - 0.5) * (CHUNK_SIZE * 0.8);
            const { height: h0, biomeType } = getTerrainHeightAndBiome(tx, tz);
            
            if (h0 > 65 && h0 < 300 && biomeType !== BiomeType.Tropical) {
              const stepDist = 18;
              const angle = Math.random() * Math.PI * 2;
              const dx = Math.cos(angle) * stepDist;
              const dz = Math.sin(angle) * stepDist;
              const { height: h1 } = getTerrainHeightAndBiome(tx + dx, tz + dz);
              
              const drop = h0 - h1;
              if (drop > 35 && drop < 150) {
                const waterfall = createWaterfallModel(tx, h0, tz, h1, angle, drop);
                this.mesh.add(waterfall);
                this.waterfalls.push(waterfall);
                break; // Max 1 waterfall per chunk for gorgeous scenery
              }
            }
          }
        }

        // Procedurally spawn giant natural cave arches in appropriate locations
        const hasCave = Math.random() < 0.11; // Decreased cave probability to 0.11 for fewer caves
        if (hasCave) {
          const cx = xOffset + (Math.random() - 0.5) * (CHUNK_SIZE * 0.6);
          const cz = zOffset + (Math.random() - 0.5) * (CHUNK_SIZE * 0.6);
          const { height: cy, biomeType } = getTerrainHeightAndBiome(cx, cz);

          let caveType: 'sea_arch' | 'mountain_tunnel' | 'canyon_bridge' | 'classic' = 'classic';
          let spawnY = cy;

          if (cy >= WATER_LEVEL + 0.5 && cy <= WATER_LEVEL + 25.0) {
            caveType = 'sea_arch';
            spawnY = WATER_LEVEL + 2.0; // rises right out of the water
          } else if (biomeType === BiomeType.Badlands) {
            caveType = 'canyon_bridge';
            spawnY = cy - 4.0;
          } else if (cy > 180) {
            caveType = 'mountain_tunnel';
            spawnY = cy - 10.0;
          } else {
            caveType = 'classic';
            spawnY = cy - 8.0;
          }

          if (spawnY > WATER_LEVEL - 10) {
            const arch = createGiantCaveArch(caveType, biomeType);
            arch.position.set(cx, spawnY, cz);
            arch.rotation.y = Math.random() * Math.PI * 2;
            this.mesh.add(arch);
            
            this.caves.push({
              x: cx,
              y: spawnY,
              z: cz,
              rotationY: arch.rotation.y,
              radius: (arch as any).radius,
              depth: (arch as any).depth,
              heightMult: (arch as any).heightMult,
              wiggleAmpX: (arch as any).wiggleAmpX,
              type: caveType
            });
          }
        }

        scene.add(this.mesh);
      }

      destroy() {
        scene.remove(this.mesh);
        
        const disposeNode = (node: THREE.Object3D) => {
          if (node instanceof THREE.InstancedMesh) {
            // Do not dispose of shared assets!
            return;
          }
          if (node instanceof THREE.Mesh) {
            if (node.geometry) node.geometry.dispose();
            if (node.material) {
              if (Array.isArray(node.material)) {
                node.material.forEach((m) => m.dispose());
              } else {
                node.material.dispose();
              }
            }
          }
          if (node.children) {
            node.children.forEach(disposeNode);
          }
        };

        this.mesh.children.forEach(disposeNode);
      }
    }

    // 9. CHUNK MANAGER
    class TerrainManager {
      chunks: Map<string, TerrainChunk>;
      viewDistance: number;
      water?: THREE.Mesh;
      waterGeometry?: THREE.PlaneGeometry;
      bgWater: THREE.Mesh;

      constructor() {
        this.chunks = new Map();
        this.viewDistance = viewDistanceRef.current; // Set dynamic view distance from user setting
        this.bgWater = bgWater;

        // Force synchronous generation of the starting chunks
        const startX = 0;
        const startZ = 0;
        for (let x = -this.viewDistance; x <= this.viewDistance; x++) {
          for (let z = -this.viewDistance; z <= this.viewDistance; z++) {
            const cx = startX + x;
            const cz = startZ + z;
            const key = `${cx},${cz}`;
            this.chunks.set(key, new TerrainChunk(cx, cz));
          }
        }
      }

      update(playerPos: THREE.Vector3) {
        // Center the background water on the airplane coordinates to prevent boundary edges
        if (this.bgWater) {
          this.bgWater.position.x = playerPos.x;
          this.bgWater.position.z = playerPos.z;
        }

        const gridX = Math.floor(playerPos.x / CHUNK_SIZE);
        const gridZ = Math.floor(playerPos.z / CHUNK_SIZE);

        const activeKeys = new Set<string>();
        for (let x = -this.viewDistance; x <= this.viewDistance; x++) {
          for (let z = -this.viewDistance; z <= this.viewDistance; z++) {
            activeKeys.add(`${gridX + x},${gridZ + z}`);
          }
        }

        // Clean out-of-range chunks
        for (const [key, chunk] of this.chunks.entries()) {
          if (!activeKeys.has(key)) {
            chunk.destroy();
            this.chunks.delete(key);
          }
        }

        // Build newly entered chunks
        let generatedThisFrame = 0;
        for (const key of activeKeys) {
          if (!this.chunks.has(key)) {
            const [cx, cz] = key.split(",").map(Number);
            this.chunks.set(key, new TerrainChunk(cx, cz));
            generatedThisFrame++;
            if (generatedThisFrame >= 1) break;
          }
        }
      }
    }

    // 10. CLOUD MANAGER (Fluffy realistic puffy clouds)
    class CloudManager {
      clouds: Array<{ mesh: THREE.Group; speed: number }>;
      areaSize: number;

      constructor() {
        this.clouds = [];
        this.areaSize = 4500;
        const cloudMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.82,
          roughness: 0.9,
          flatShading: false, // Smooth shading for soft, fluffy cumulus clouds
        });

        for (let i = 0; i < 40; i++) {
          const cloud = new THREE.Group();
          const sphereCount = 5 + Math.floor(Math.random() * 6);
          for (let j = 0; j < sphereCount; j++) {
            const sizeX = 25 + Math.random() * 30;
            const sizeY = 12 + Math.random() * 15;
            const sizeZ = 25 + Math.random() * 30;
            const itemGeo = new THREE.DodecahedronGeometry(1, 1);
            itemGeo.scale(sizeX, sizeY, sizeZ);
            const item = new THREE.Mesh(itemGeo, cloudMat);
            item.position.set(
              (Math.random() - 0.5) * sizeX * 1.4,
              (Math.random() - 0.5) * sizeY * 0.45,
              (Math.random() - 0.5) * sizeZ * 1.4
            );
            item.castShadow = false; // Disable cloud shadows for superior performance and zero lag spikes
            item.receiveShadow = false;
            cloud.add(item);
          }

          cloud.position.set(
            (Math.random() - 0.5) * this.areaSize,
            350 + Math.random() * 350,
            (Math.random() - 0.5) * this.areaSize
          );

          scene.add(cloud);
          this.clouds.push({
            mesh: cloud,
            speed: 12 + Math.random() * 20,
          });
        }
      }

      update(playerPos: THREE.Vector3, dt: number) {
        this.clouds.forEach((c) => {
          c.mesh.position.x += c.speed * dt;

          const dx = c.mesh.position.x - playerPos.x;
          const dz = c.mesh.position.z - playerPos.z;
          const halfArea = this.areaSize / 2;

          if (dx > halfArea) c.mesh.position.x -= this.areaSize;
          if (dx < -halfArea) c.mesh.position.x += this.areaSize;
          if (dz > halfArea) c.mesh.position.z -= this.areaSize;
          if (dz < -halfArea) c.mesh.position.z += this.areaSize;
        });
      }
    }

    // Save references to the refs
    gameRef.current.scene = scene;
    gameRef.current.camera = camera;
    gameRef.current.renderer = renderer;
    gameRef.current.clock = clock;
    gameRef.current.airplane = {
      mesh: airplaneGroup,
      speed: 0,
      maxSpeed: 4.2, // Reduced for a smoother, highly controllable exploration flight
      rotParams: { x: 0, y: 0, z: 0 },
      targetRot: { x: 0, y: 0, z: 0 },
      propeller,
      particles,
      tailNavLight,
      flashlight,
      lightCone,
    };
    gameRef.current.terrainManager = new TerrainManager();
    gameRef.current.cloudManager = new CloudManager();
    gameRef.current.lights = { hemiLight, sun, moon };
    gameRef.current.skyDome = skyDome;
    gameRef.current.visualSun = visualSun;
    gameRef.current.visualMoon = visualMoon;
    gameRef.current.starField = starField;
    gameRef.current.rainParticles = rainParticles;

    setGameState("ready");
  };

  // Setup input listeners
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (gameState !== "playing") return;
      // Ignore clicks on buttons/sliders/inputs
      if (
        (e.target as HTMLElement).closest("button") ||
        (e.target as HTMLElement).closest("input") ||
        (e.target as HTMLElement).closest("select")
      ) {
        return;
      }
      const d = dragStateRef.current;
      d.isDragging = true;
      d.startX = e.clientX;
      d.startY = e.clientY;
      d.inputX = 0;
      d.inputY = 0;
      
      setTouchStartPos({ x: e.clientX, y: e.clientY, currentX: e.clientX, currentY: e.clientY });
    };

    const handlePointerMove = (e: PointerEvent) => {
      const d = dragStateRef.current;
      if (!d.isDragging) return;
      
      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;
      const maxDistance = 100; // Drag radius in pixels
      
      const pitchSign = invertYRef.current ? -1 : 1;
      d.inputX = Math.max(-1, Math.min(1, dx / maxDistance));
      d.inputY = Math.max(-1, Math.min(1, (dy / maxDistance) * pitchSign));

      setTouchStartPos(prev => prev ? { ...prev, currentX: e.clientX, currentY: e.clientY } : null);
    };

    const handlePointerUp = () => {
      const d = dragStateRef.current;
      d.isDragging = false;
      d.inputX = 0;
      d.inputY = 0;
      setTouchStartPos(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      gameRef.current.activeKeys.add(e.code);
      if ((e.code === "KeyF" || e.code === "KeyL") && !e.repeat) {
        setFlashlightEnabled(prev => !prev);
      }
      if (e.code === "KeyX" && !e.repeat) {
        setAcrobaticMode(prev => !prev);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      gameRef.current.activeKeys.delete(e.code);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const handleResize = () => {
      const g = gameRef.current;
      if (g.camera && g.renderer) {
        g.camera.aspect = window.innerWidth / window.innerHeight;
        g.camera.updateProjectionMatrix();
        g.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", handleResize);
    };
  }, [gameState]);

  // Main game loop
  useEffect(() => {
    let animFrameId: number;

    const renderLoop = (now: number) => {
      animFrameId = requestAnimationFrame(renderLoop);
      const g = gameRef.current;

      if (gameState !== "playing" || !g.scene || !g.camera || !g.renderer || !g.airplane || !g.clock) {
        return;
      }

      const dt = Math.min(g.clock.getDelta(), 0.1); // cap delta to prevent crazy physics jumps

      // FPS COUNTER
      g.frames++;
      if (now - g.lastFpsTime >= 1000) {
        if (valFpsRef.current) valFpsRef.current.innerText = g.frames.toString();
        g.frames = 0;
        g.lastFpsTime = now;
      }

      // 1. UPDATE TIME OF DAY & INTERPOLATE WORLD (Day-Night Cycle)
      g.timeOfDay = (g.timeOfDay + activeTimeSpeed * dt) % 24.0;
      if (valTimeRef.current) {
        const hh = Math.floor(g.timeOfDay).toString().padStart(2, "0");
        const mm = Math.floor((g.timeOfDay % 1) * 60).toString().padStart(2, "0");
        valTimeRef.current.innerText = `${hh}:${mm}`;
      }

      // Update Sky & Atmospheric Lighting Colors
      const hour = g.timeOfDay;
      let skyColor = new THREE.Color();
      let fogColor = new THREE.Color();
      let sunIntensity = 0;
      let moonIntensity = 0;
      let sunColor = new THREE.Color(0xffffff);
      let moonColor = new THREE.Color(0xaaccff);

      // Find the two surrounding keyframes for butter-smooth, continuous interpolation
      let kf1 = TIME_KEYFRAMES[0];
      let kf2 = TIME_KEYFRAMES[TIME_KEYFRAMES.length - 1];
      for (let i = 0; i < TIME_KEYFRAMES.length - 1; i++) {
        if (hour >= TIME_KEYFRAMES[i].hour && hour <= TIME_KEYFRAMES[i + 1].hour) {
          kf1 = TIME_KEYFRAMES[i];
          kf2 = TIME_KEYFRAMES[i + 1];
          break;
        }
      }

      // Calculate smooth interpolation factor
      const timeInterval = kf2.hour - kf1.hour;
      const t = timeInterval > 0 ? (hour - kf1.hour) / timeInterval : 0;

      skyColor.lerpColors(kf1.skyColor, kf2.skyColor, t);
      fogColor.lerpColors(kf1.fogColor, kf2.fogColor, t);
      sunColor.lerpColors(kf1.sunColor, kf2.sunColor, t);
      moonColor.lerpColors(kf1.moonColor, kf2.moonColor, t);
      sunIntensity = THREE.MathUtils.lerp(kf1.sunIntensity, kf2.sunIntensity, t);
      moonIntensity = THREE.MathUtils.lerp(kf1.moonIntensity, kf2.moonIntensity, t);

      // --- SMOOTH WEATHER LERP PARAMETERS ---
      // This solves sudden hard flashes or abrupt changes in density/light
      const targetWeather = WEATHER_PRESETS[activeWeather];
      const wLerpFactor = 0.65 * dt; // Transitions weather state over ~2-3 seconds
      g.currentWeatherParams.ambientIntensity += (targetWeather.ambientIntensity - g.currentWeatherParams.ambientIntensity) * wLerpFactor;
      g.currentWeatherParams.sunIntensity += (targetWeather.sunIntensity - g.currentWeatherParams.sunIntensity) * wLerpFactor;

      // Scale fog density based on user's selected draw distance so they can see far on high/ultra
      const fogMultiplier = viewDistanceRef.current === 1 ? 1.4 :
                            viewDistanceRef.current === 2 ? 1.0 :
                            viewDistanceRef.current === 3 ? 0.7 :
                            viewDistanceRef.current === 4 ? 0.5 : 0.35;
      const targetFogDensity = targetWeather.fogDensity * fogMultiplier;
      g.currentWeatherParams.fogDensity += (targetFogDensity - g.currentWeatherParams.fogDensity) * wLerpFactor;

      const targetStormFactor = activeWeather === Weather.Stormy ? 1.0 : 0.0;
      g.currentWeatherParams.stormFactor += (targetStormFactor - g.currentWeatherParams.stormFactor) * wLerpFactor;

      // Blend in Weather impacts smoothly
      sunIntensity *= g.currentWeatherParams.sunIntensity;
      const stormDim = 1.0 - g.currentWeatherParams.stormFactor * 0.72; // Dim down by max 72% when stormy
      skyColor.multiplyScalar(stormDim);
      fogColor.multiplyScalar(stormDim);
      sunColor.lerp(new THREE.Color(0x3a3c4a), g.currentWeatherParams.stormFactor);

      // Apply computed atmosphere variables
      if (g.skyDome) (g.skyDome.material as THREE.MeshBasicMaterial).color.copy(skyColor);
      if (g.scene && g.scene.fog) {
        (g.scene.fog as THREE.FogExp2).color.copy(fogColor);
        (g.scene.fog as THREE.FogExp2).density = g.currentWeatherParams.fogDensity;
      }
      g.renderer.setClearColor(fogColor);

      // Starfield twinkle and fade
      if (g.starField) {
        const starMat = g.starField.material as THREE.PointsMaterial;
        let targetStarOpacity = 0.0;
        if (hour >= 19.5 || hour < 5.5) {
          targetStarOpacity = hour >= 20.5 || hour < 4.5 ? 0.95 : 0.4;
        }
        starMat.opacity += (targetStarOpacity - starMat.opacity) * 0.1;
        g.starField.rotation.y += 0.005 * dt;
      }

      // Update light positions & target matching Sun/Moon coordinates
      const sunAngle = ((hour - 6.0) / 24.0) * Math.PI * 2;
      const cloudFactor = activeWeather === Weather.Stormy ? 0.12 : (activeWeather === Weather.Misty ? 0.35 : 1.0);

      // Animate physical celestial sun & moon matching real flight directions (placed further for bigger sky scope)
      if (g.visualSun) {
        g.visualSun.position.set(
          g.airplane.mesh.position.x + Math.cos(sunAngle) * 45000,
          g.airplane.mesh.position.y + Math.sin(sunAngle) * 45000,
          g.airplane.mesh.position.z + 4000
        );
        g.visualSun.visible = Math.sin(sunAngle) > -0.05;
        const sunMat = g.visualSun.material as THREE.MeshBasicMaterial;
        sunMat.opacity = cloudFactor;
        g.visualSun.children.forEach((child, idx) => {
          const childMat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          childMat.opacity = (idx === 0 ? 0.45 : 0.22) * cloudFactor;
        });
      }

      if (g.visualMoon) {
        const moonAngle = sunAngle + Math.PI;
        g.visualMoon.position.set(
          g.airplane.mesh.position.x + Math.cos(moonAngle) * 45000,
          g.airplane.mesh.position.y + Math.sin(moonAngle) * 45000,
          g.airplane.mesh.position.z - 4000
        );
        g.visualMoon.visible = Math.sin(moonAngle) > -0.05;
        const moonMat = g.visualMoon.material as THREE.MeshBasicMaterial;
        moonMat.opacity = cloudFactor;
        g.visualMoon.children.forEach((child) => {
          const childMat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          childMat.opacity = 0.25 * cloudFactor;
        });
      }

      if (g.lights) {
        // Hemispherical ambient sky adjustments
        g.lights.hemiLight.color.copy(skyColor);
        g.lights.hemiLight.intensity = g.currentWeatherParams.ambientIntensity;

        // Dynamic sun placement
        g.lights.sun.position.set(
          g.airplane.mesh.position.x + Math.cos(sunAngle) * 900,
          g.airplane.mesh.position.y + Math.max(0.1, Math.sin(sunAngle)) * 900,
          g.airplane.mesh.position.z + 400
        );
        g.lights.sun.intensity = sunIntensity;
        g.lights.sun.color.copy(sunColor);
        g.lights.sun.target.position.copy(g.airplane.mesh.position);
        g.lights.sun.target.updateMatrixWorld();

        // Moon placement (offset by 180 degrees)
        const moonAngle = sunAngle + Math.PI;
        g.lights.moon.position.set(
          g.airplane.mesh.position.x + Math.cos(moonAngle) * 900,
          g.airplane.mesh.position.y + Math.max(0.1, Math.sin(moonAngle)) * 900,
          g.airplane.mesh.position.z - 400
        );
        g.lights.moon.intensity = moonIntensity;
        g.lights.moon.color.copy(moonColor);
        g.lights.moon.target.position.copy(g.airplane.mesh.position);
        g.lights.moon.target.updateMatrixWorld();
      }

      // 2. WEATHER - STORM SYSTEM (RAIN & LIGHTNING FLASHES)
      if (g.rainParticles) {
        const rainMat = g.rainParticles.material as THREE.PointsMaterial;
        if (activeWeather === Weather.Stormy) {
          rainMat.opacity += (0.65 - rainMat.opacity) * 0.1;
          const pos = g.rainParticles.geometry.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            let ry = pos.getY(i) - 180 * dt;
            if (ry < 0) {
              ry = 200;
              pos.setX(i, (Math.random() - 0.5) * 400);
              pos.setZ(i, (Math.random() - 0.5) * 400);
            }
            pos.setY(i, ry);
          }
          pos.needsUpdate = true;
          g.rainParticles.position.copy(g.airplane.mesh.position);
          g.rainParticles.position.y -= 80;

          // Random spectacular lightning flash!
          if (Math.random() < 0.007 && g.lights) {
            g.lights.hemiLight.intensity = 4.0;
            g.lights.sun.intensity = 3.0;
            if (g.scene.fog) (g.scene.fog as THREE.FogExp2).color.setHex(0xffffff);
          }
        } else {
          rainMat.opacity += (0.0 - rainMat.opacity) * 0.1;
        }
      }

      // 3. ANIMATED 3D OCEAN WAVES
      // Wave animation removed as requested. Water is now a beautiful, calm, static surface with solid, biome-specific constant colors per zone.

      // 3.5 ANIMATE WATERFALLS FOAM SPRAY
      if (g.terrainManager) {
        const timeSec = now * 0.001;
        for (const chunk of g.terrainManager.chunks.values()) {
          for (const waterfall of chunk.waterfalls) {
            const timeOffset = waterfall.timeOffset || 0;
            const foams = waterfall.foams || [];
            
            foams.forEach((foam: THREE.Mesh, index: number) => {
              const speed = 2.0 + (index % 3) * 1.2;
              const cycle = (timeSec * speed + index * 0.4 + timeOffset) % 1.0; // 0.0 to 1.0
              
              // Foam rises slightly, expands, and fades out
              const baseScale = 1.0 + (index % 2) * 0.5;
              const s = baseScale * (1.0 + cycle * 1.8);
              foam.scale.set(s, s, s);
              
              // Position wiggle around splash area
              foam.position.y = cycle * 4.5;
              
              const foamMat = foam.material as THREE.MeshBasicMaterial;
              foamMat.opacity = (1.0 - cycle) * 0.85;
            });
          }
        }
      }

      // 4. FLIGHT DYNAMICS & CONTROL MIXER (Smooth Keyboard + Gesture blending)
      let targetX = 0;
      let targetY = 0;

      // Keyboard Roll controls (A/D or ArrowLeft/ArrowRight)
      if (g.activeKeys.has("ArrowLeft") || g.activeKeys.has("KeyA")) {
        targetX = -1.0;
      } else if (g.activeKeys.has("ArrowRight") || g.activeKeys.has("KeyD")) {
        targetX = 1.0;
      }

      // Keyboard Pitch controls (W/S or ArrowUp/ArrowDown)
      if (g.activeKeys.has("ArrowUp") || g.activeKeys.has("KeyW")) {
        targetY = -0.75; // Pitch down
      } else if (g.activeKeys.has("ArrowDown") || g.activeKeys.has("KeyS")) {
        targetY = 0.75; // Pitch up
      }

      // Smooth throttle adjustments via keyboard
      if (g.activeKeys.has("Space")) {
        g.input.throttle = Math.min(g.input.throttle + 1.2 * dt, 1.0);
      } else if (g.activeKeys.has("ShiftLeft") || g.activeKeys.has("KeyQ")) {
        g.input.throttle = Math.max(g.input.throttle - 1.2 * dt, 0.0);
      }

      // If pointer/touch drag is active, it takes control priority for steering
      const drag = dragStateRef.current;
      if (drag.isDragging) {
        targetX = drag.inputX;
        targetY = drag.inputY;
      }

      // Blending / damping inputs for butter-smooth reaction times (zero snapping)
      const inputSpeed = 7.5 * dt;
      g.input.x += (targetX - g.input.x) * inputSpeed;
      g.input.y += (targetY - g.input.y) * inputSpeed;

      if (acrobaticModeRef.current) {
        // --- HIGH FIDELITY 360-DEGREE AEROBATICS MODE ---
        // Inputs directly command angular rates rather than target angles
        g.airplane.rotParams.x += g.input.y * 3.5 * dt; // Full 360 pitch loop rate
        g.airplane.rotParams.z -= g.input.x * 5.0 * dt; // Full 360 roll roll rate

        // Dynamic wrap-around to prevent floating point drift and keep angles between -PI and PI
        g.airplane.rotParams.x = (g.airplane.rotParams.x + Math.PI) % (Math.PI * 2);
        if (g.airplane.rotParams.x < 0) g.airplane.rotParams.x += Math.PI * 2;
        g.airplane.rotParams.x -= Math.PI;

        g.airplane.rotParams.z = (g.airplane.rotParams.z + Math.PI) % (Math.PI * 2);
        if (g.airplane.rotParams.z < 0) g.airplane.rotParams.z += Math.PI * 2;
        g.airplane.rotParams.z -= Math.PI;

        // Gentle auto-leveling of roll when no roll input is given to make loops and flips satisfyingly stable
        if (Math.abs(g.input.x) < 0.05) {
          const targetZ = Math.round(g.airplane.rotParams.z / Math.PI) * Math.PI;
          g.airplane.rotParams.z += (targetZ - g.airplane.rotParams.z) * 1.5 * dt;
        }

        // Real-world turn-coordination: Lift vector changes yaw based on roll angle
        g.airplane.rotParams.y -= Math.sin(g.airplane.rotParams.z) * dt * 1.2;
      } else {
        // --- STABLE PASSENGER/SCENIC FLIGHT MODE ---
        const maxRoll = 1.0;
        g.airplane.targetRot.z = -g.input.x * maxRoll;
        const maxPitch = 0.8;
        g.airplane.targetRot.x = g.input.y * maxPitch;

        const lerpFactor = 2.4 * dt;
        g.airplane.rotParams.x += (g.airplane.targetRot.x - g.airplane.rotParams.x) * lerpFactor;
        g.airplane.rotParams.z += (g.airplane.targetRot.z - g.airplane.rotParams.z) * lerpFactor;
        g.airplane.rotParams.y -= g.airplane.rotParams.z * dt * 0.6; // turn heading based on roll angle
      }

      g.airplane.mesh.rotation.set(g.airplane.rotParams.x, g.airplane.rotParams.y, g.airplane.rotParams.z);

      // Real-time flashlight/headlight and volumetric light cone visibility and opacity updates
      if (g.airplane.flashlight && g.airplane.lightCone) {
        const hasFlashlight = flashlightEnabledRef.current;
        g.airplane.flashlight.visible = hasFlashlight;
        g.airplane.lightCone.visible = hasFlashlight;

        if (hasFlashlight) {
          // Dynamic volumetric cone opacity shifts organically depending on environmental conditions (fog, storms, and darkness)
          let coneOpacity = 0.08;
          if (activeWeather === Weather.Stormy) {
            coneOpacity = 0.22;
          } else if (activeWeather === Weather.Misty) {
            coneOpacity = 0.35; // Super thick foggy light beam
          } else if (hour < 5.0 || hour > 20.0) {
            coneOpacity = 0.16; // brighter in pitch black night
          }
          (g.airplane.lightCone.material as THREE.MeshBasicMaterial).opacity = coneOpacity;
        }
      }

      const targetSpeed = g.input.throttle * g.airplane.maxSpeed;
      g.airplane.speed += (targetSpeed - g.airplane.speed) * 0.05;

      const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(g.airplane.mesh.quaternion);
      g.airplane.mesh.position.add(forward.multiplyScalar(g.airplane.speed));
      g.airplane.propeller.rotation.z += g.airplane.speed * 0.5 + 0.15;

      // Stall and fall mechanics when speed is near 0
      const stallSpeed = 1.0; // speed * 280 is km/h, so 1.0 is 280 km/h
      if (g.airplane.speed < stallSpeed) {
        const stallFactor = Math.pow(1.0 - (g.airplane.speed / stallSpeed), 2);
        // Gradually pull the plane downwards on the Y-axis
        const fallAmount = stallFactor * 1.5 * (dt * 60);
        g.airplane.mesh.position.y -= fallAmount;
        
        // Push the nose down (pitch down) to gain speed/simulate stall recovery
        g.airplane.rotParams.x += (-0.45 - g.airplane.rotParams.x) * 0.05 * stallFactor * (dt * 60);
      }

      // Blink tail strobe light (Nav light)
      if (g.airplane.tailNavLight) {
        const blink = Math.floor(now / 250) % 4 === 0;
        g.airplane.tailNavLight.visible = blink;
      }

      // Update engine smoke trail particles (highly realistic dual volumetric engine streams)
      if (g.airplane.speed > 0.5) {
        // Left Nozzle stream
        const freePartL = g.airplane.particles.find((p) => p.life <= 0);
        if (freePartL) {
          freePartL.life = 45;
          freePartL.mesh.visible = true;
          const offsetL = new THREE.Vector3(-0.28, -0.42, -3.45).applyQuaternion(g.airplane.mesh.quaternion);
          freePartL.mesh.position.copy(g.airplane.mesh.position).add(offsetL);
          freePartL.mesh.scale.set(0.3, 0.3, 0.3);
          freePartL.mesh.rotation.copy(g.airplane.mesh.rotation);
        }
        // Right Nozzle stream
        const freePartR = g.airplane.particles.find((p) => p.life <= 0 && p !== freePartL);
        if (freePartR) {
          freePartR.life = 45;
          freePartR.mesh.visible = true;
          const offsetR = new THREE.Vector3(0.28, -0.42, -3.45).applyQuaternion(g.airplane.mesh.quaternion);
          freePartR.mesh.position.copy(g.airplane.mesh.position).add(offsetR);
          freePartR.mesh.scale.set(0.3, 0.3, 0.3);
          freePartR.mesh.rotation.copy(g.airplane.mesh.rotation);
        }
      }

      // Calculate dynamic ambient smoke tinting based on time of day and weather preset
      let smokeR = 1.0;
      let smokeG = 1.0;
      let smokeB = 1.0;

      if (hour < 5.0 || hour > 20.0) {
        // Night - very dark charcoal
        smokeR = 0.15;
        smokeG = 0.16;
        smokeB = 0.20;
      } else if (hour >= 5.0 && hour < 8.0) {
        // Sunrise - warm pink-orange
        const t = (hour - 5.0) / 3.0;
        smokeR = THREE.MathUtils.lerp(0.15, 1.0, t);
        smokeG = THREE.MathUtils.lerp(0.16, 0.65, t);
        smokeB = THREE.MathUtils.lerp(0.20, 0.45, t);
      } else if (hour >= 17.0 && hour < 20.0) {
        // Sunset - beautiful warm orange-purple
        const t = (hour - 17.0) / 3.0;
        smokeR = THREE.MathUtils.lerp(1.0, 0.15, t);
        smokeG = THREE.MathUtils.lerp(0.65, 0.16, t);
        smokeB = THREE.MathUtils.lerp(0.55, 0.20, t);
      } else {
        // Day - bright clean white/gray
        smokeR = 0.95;
        smokeG = 0.96;
        smokeB = 0.98;
      }

      // Weather factor impact on smoke (exhaust transparency & color shift based on climate)
      let weatherOpacityMult = 1.0;
      let weatherColorTint = new THREE.Color(1.0, 1.0, 1.0);
      if (activeWeather === Weather.Stormy) {
        weatherOpacityMult = 0.45; // dispersed/darker gray in rainstorm
        weatherColorTint.setRGB(0.55, 0.58, 0.62);
      } else if (activeWeather === Weather.Misty) {
        weatherOpacityMult = 0.35; // highly transparent pale mist in fog/mist
        weatherColorTint.setRGB(0.85, 0.85, 0.87);
      }

      g.airplane.particles.forEach((p) => {
        if (p.life > 0) {
          p.life--;
          
          // Volumetric physics draft - expand outward and drift gently upward
          p.mesh.position.y += 0.05 + Math.sin(p.life * 0.1) * 0.015;
          p.mesh.position.x += (Math.random() - 0.5) * 0.08;
          p.mesh.position.z += (Math.random() - 0.5) * 0.08;

          const progress = (45 - p.life) / 45; // 0.0 to 1.0
          // Expand smoke volume over time
          const scaleVal = 0.4 + progress * 5.5;
          p.mesh.scale.set(scaleVal, scaleVal, scaleVal);

          const mat = p.mesh.material as THREE.MeshStandardMaterial;
          if (progress < 0.15) {
            // Hot glowing combustion core
            const t = progress / 0.15;
            mat.color.setRGB(1.0, 0.95 - t * 0.25, 0.6 - t * 0.4);
            mat.opacity = 0.9 * weatherOpacityMult;
          } else {
            // Transitions to soft cloud condensation tinted dynamically by the time of day and active weather
            const t = (progress - 0.15) / 0.85;
            const cVal = 0.95 - t * 0.12; // ranges from 0.95 down to 0.83
            mat.color.setRGB(
              cVal * smokeR * weatherColorTint.r,
              (cVal + 0.01) * smokeG * weatherColorTint.g,
              (cVal + 0.04) * smokeB * weatherColorTint.b
            );
            mat.opacity = (1.0 - progress) * 0.55 * weatherOpacityMult; // Smooth fade out
          }
        } else {
          p.mesh.visible = false;
        }
      });

      // 5. CHUNKS GENERATION ROUNDED AROUND PLAYER
      if (g.terrainManager) {
        g.terrainManager.update(g.airplane.mesh.position);

        // ANIMATE WATER VERTEX WAVE SWELLS & FINE GPU SURFACE RIPPLES
        if (g.terrainManager.bgWater) {
          const time = now * 0.0012;
          const geo = g.terrainManager.bgWater.geometry;
          const pos = geo.attributes.position;
          const colorAttr = geo.attributes.color;
          const count = pos.count;
          
          for (let i = 0; i < count; i++) {
            // Stable wave phases based on world coordinates
            const worldX = pos.getX(i) + g.terrainManager.bgWater.position.x;
            const worldZ = pos.getZ(i) + g.terrainManager.bgWater.position.z;
            
            // Sum of sine/cosine waves for realistic fluid ocean swell simulation
            const y = Math.sin(worldX * 0.0035 + time * 0.9) * 1.8 +
                      Math.cos(worldZ * 0.0045 + time * 1.2) * 1.4 +
                      Math.sin((worldX + worldZ) * 0.0018 + time * 0.6) * 1.0;
            pos.setY(i, y);

            // Update water vertex color based on its exact local world biome position!
            const { bValue } = getTerrainHeightAndBiome(worldX, worldZ);
            const wt = getBlendedWaterColor(bValue !== undefined ? bValue : 0.0);
            if (colorAttr) {
              colorAttr.setXYZ(i, wt.color.r, wt.color.g, wt.color.b);
            }
          }
          pos.needsUpdate = true;
          if (colorAttr) {
            colorAttr.needsUpdate = true;
          }
          geo.computeVertexNormals();

          // Scroll high frequency water bump map texture offset for beautiful flowing ripple effect
          const { bValue: playerBValue } = getTerrainHeightAndBiome(
            g.airplane.mesh.position.x,
            g.airplane.mesh.position.z
          );
          const targetWater = getBlendedWaterColor(playerBValue !== undefined ? playerBValue : 0.0);

          const mat = g.terrainManager.bgWater.material as THREE.MeshPhongMaterial;
          // Lerp the global emissive color to match player's biome atmospheric glow smoothly
          mat.emissive.lerp(targetWater.emissive, 0.015);

          if (mat.bumpMap) {
            // World tile size of the texture: plane width (35000) / texture repeat (800) = 43.75
            const worldTileSize = 35000 / 800;
            // Counteract water mesh translation to keep ripples stationary in world space!
            const offsetX = g.terrainManager.bgWater.position.x / worldTileSize;
            const offsetZ = -g.terrainManager.bgWater.position.z / worldTileSize;

            mat.bumpMap.offset.x = offsetX + now * 0.000035;
            mat.bumpMap.offset.y = offsetZ + now * -0.000025;
          }
        }
      }

      // 6. FLOATING CLOUDS
      if (g.cloudManager) {
        g.cloudManager.update(g.airplane.mesh.position, dt);
      }

      // Update synthesized Web Audio parameters dynamically
      const audio = audioRef.current;
      if (audio.enabled && audio.ctx && audio.ctx.state === "running") {
        const timeNow = audio.ctx.currentTime;
        const currentThrottle = g.input.throttle; // 0.0 to 1.0
        const currentSpeedRatio = g.airplane.speed / g.airplane.maxSpeed; // 0.0 to 1.0

        // Smoothly scale engine frequencies and filters based on throttle
        const targetFreq1 = 38 + currentThrottle * 32; // 38Hz to 70Hz
        const targetFreq2 = 76 + currentThrottle * 64; // 76Hz to 140Hz
        const targetCutoff = 140 + currentThrottle * 220; // 140Hz to 360Hz

        audio.engineOsc1?.frequency.setTargetAtTime(targetFreq1, timeNow, 0.1);
        audio.engineOsc2?.frequency.setTargetAtTime(targetFreq2, timeNow, 0.1);
        audio.engineFilter?.frequency.setTargetAtTime(targetCutoff, timeNow, 0.15);

        // Ambient wind rush scales up gently with flight speed, modulated by a soft organic LFO for dynamic waves
        const windLfo = Math.sin(now * 0.0008) * 45 + Math.cos(now * 0.0005) * 25;
        const targetWindCutoff = 320 + currentSpeedRatio * 320 + windLfo; // 320Hz to 640Hz + waves
        audio.natureFilter?.frequency.setTargetAtTime(targetWindCutoff, timeNow, 0.25);

        const targetWindVol = 0.22 + currentSpeedRatio * 0.18;
        audio.natureGain?.gain.setTargetAtTime(targetWindVol, timeNow, 0.3);
      }

      // Keep SkyDome orbiting with airplane
      if (g.skyDome) {
        g.skyDome.position.set(
          g.airplane.mesh.position.x,
          g.airplane.mesh.position.y * 0.45,
          g.airplane.mesh.position.z
        );
      }

      // 7. SMOOTH THIRD-PERSON CAMERA INTERPOLATION
      const cameraOffset = new THREE.Vector3(0, 7.8, -20).applyMatrix4(g.airplane.mesh.matrixWorld);
      g.camera.position.lerp(cameraOffset, 0.1);
      const lookAtTarget = g.airplane.mesh.position
        .clone()
        .add(new THREE.Vector3(0, 0.8, 20).applyQuaternion(g.airplane.mesh.quaternion));
      g.camera.lookAt(lookAtTarget);

      // 8. COLLISION SENSING & PROXIMITY WARNINGS
      const { height: currentTerrainY, biomeType } = getTerrainHeightAndBiome(
        g.airplane.mesh.position.x,
        g.airplane.mesh.position.z
      );

      // Track current biome to show in debug console
      if (currentTerrainY !== undefined) {
        setActiveBiome(biomeType);
      }

      // Check collision and proximity against loaded cave structures
      let hitCave = false;
      let nearCaveWall = false;
      let insideCaveTunnel = false;
      let activeCaveFloorY = WATER_LEVEL;

      if (g.terrainManager) {
        for (const chunk of g.terrainManager.chunks.values()) {
          for (const cave of chunk.caves) {
            const dx_world = g.airplane.mesh.position.x - cave.x;
            const dz_world = g.airplane.mesh.position.z - cave.z;
            
            // Transform to local cave coords (rotate around Y)
            const cosY = Math.cos(-cave.rotationY);
            const sinY = Math.sin(-cave.rotationY);
            const lx = dx_world * cosY - dz_world * sinY;
            const lz = dx_world * sinY + dz_world * cosY;
            const ly = g.airplane.mesh.position.y - cave.y;

            // Check depth bounds with leeway
            const halfDepth = cave.depth / 2;
            if (Math.abs(lz) <= halfDepth + 18.0) {
              // Calculate wiggle and dynamic radius scale at this Z progress (matching creation)
              const zProgress = lz / cave.depth; // -0.5 to 0.5
              const wiggleX = Math.sin(zProgress * Math.PI * 1.5) * cave.wiggleAmpX;
              const wiggleY = Math.cos(zProgress * Math.PI * 1.5) * (cave.radius * 0.08);

              // Apply the same organic contraction/expansion factor as used in mesh generation
              const radiusScale = 1.0 + 0.25 * Math.sin(zProgress * Math.PI * 2.5);
              const dynamicRadius = cave.radius * radiusScale;

              const dx = lx - wiggleX;
              const dy = ly - wiggleY;

              const rY = dynamicRadius * cave.heightMult;
              const ellipseDist = Math.sqrt((dx * dx) / (dynamicRadius * dynamicRadius) + (dy * dy) / (rY * rY));

              if (dy >= 0) {
                // Inside the upper arch: safe if inside tunnel or above arch. 
                // Adjusted thresholds for much more forgiving, satisfying fly-throughs!
                if (ellipseDist >= 0.86 && ellipseDist <= 1.25) {
                  hitCave = true;
                } else if (ellipseDist >= 0.78 && ellipseDist < 0.86) {
                  nearCaveWall = true;
                } else if (ellipseDist < 0.78) {
                  insideCaveTunnel = true;
                  activeCaveFloorY = cave.y;
                }
              } else {
                // Below arch center: pillars are at dx = ±dynamicRadius
                const pillarDistL = Math.abs(dx + dynamicRadius);
                const pillarDistR = Math.abs(dx - dynamicRadius);
                const thickness = 16.0; // rock pillar collision thickness (reduced from 28 for high forgiveness)
                
                if (pillarDistL < thickness || pillarDistR < thickness) {
                  hitCave = true;
                } else if (pillarDistL < thickness + 10.0 || pillarDistR < thickness + 10.0) {
                  nearCaveWall = true;
                } else if (Math.abs(dx) < dynamicRadius - thickness) {
                  insideCaveTunnel = true;
                  activeCaveFloorY = cave.y;
                }
              }
            }
          }
        }
      }

      // Check proximity for warning signals if warning toggle is enabled
      const effectiveTerrainY = insideCaveTunnel ? activeCaveFloorY : currentTerrainY;
      const isOverWater = !insideCaveTunnel && (effectiveTerrainY < WATER_LEVEL);
      const surfaceY = isOverWater ? WATER_LEVEL : effectiveTerrainY;
      const aglAltitude = Math.max(0, g.airplane.mesh.position.y - surfaceY);
      
      let showWarning = false;
      let warningText = "";

      if (warningsEnabledRef.current) {
        if (nearCaveWall) {
          showWarning = true;
          warningText = "⚠️ WARNING: CAVERN COLLISION IMMINENT!";
        } else if (!isOverWater && aglAltitude < 32.0 && aglAltitude >= 1.2) {
          showWarning = true;
          warningText = "⚠️ WARNING: DANGEROUS ALTITUDE — RED ZONE!";
        } else if (isOverWater && aglAltitude < 22.0 && aglAltitude >= 0.35) {
          showWarning = true;
          warningText = "⚠️ WARNING: LOW ALTITUDE OVER WATER!";
        }
      }

      if (warningRef.current) {
        if (showWarning) {
          warningRef.current.innerText = warningText;
          warningRef.current.style.display = "flex";
          const flash = Math.floor(now / 150) % 2 === 0; // Rapid pulsing rate
          if (flash) {
            warningRef.current.style.color = "#ff1a1a";
            warningRef.current.style.borderColor = "#ff1a1a";
            warningRef.current.style.boxShadow = "0 0 35px rgba(255, 26, 26, 0.75)";
            warningRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.35)";
          } else {
            warningRef.current.style.color = "#ffffff";
            warningRef.current.style.borderColor = "#ff9900";
            warningRef.current.style.boxShadow = "0 0 15px rgba(255, 153, 0, 0.45)";
            warningRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
          }
        } else {
          warningRef.current.style.display = "none";
        }
      }

      if (hitCave) {
        handleGameOver("CRASHED INTO CAVE WALLS");
      } else if (isOverWater) {
        if (g.airplane.mesh.position.y < WATER_LEVEL + 0.35) {
          handleGameOver("CRASHED INTO OCEAN");
        }
      } else {
        if (g.airplane.mesh.position.y < effectiveTerrainY + 1.2) {
          handleGameOver("CRASHED INTO TERRAIN");
        }
      }

      // 9. ULTRA FAST HUD UPDATES (Zero React lag, direct DOM text injections)
      if (valSpdRef.current) valSpdRef.current.innerText = Math.round(g.airplane.speed * 280).toString();
      if (valAltRef.current) valAltRef.current.innerText = Math.round(g.airplane.mesh.position.y).toString();
      if (valGndRef.current) valGndRef.current.innerText = Math.round(aglAltitude).toString();
      if (valThrRef.current) valThrRef.current.innerText = Math.round(g.input.throttle * 100).toString();
      if (valXRef.current) valXRef.current.innerText = Math.round(g.airplane.mesh.position.x).toString();
      if (valZRef.current) valZRef.current.innerText = Math.round(g.airplane.mesh.position.z).toString();

      if (horizonLineRef.current) {
        const deg = g.airplane.rotParams.z * (180 / Math.PI);
        const pitchOffset = g.airplane.rotParams.x * 55;
        horizonLineRef.current.style.transform = `translateY(-50%) rotate(${-deg}deg)`;
        horizonLineRef.current.style.top = `${50 + pitchOffset}%`;
      }

      g.renderer.render(g.scene, g.camera);
    };

    animFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animFrameId);
      // Clean up shared materials and geometries
      if (sharedMaterialsRef.current) {
        Object.values(sharedMaterialsRef.current).forEach((mat: any) => mat.dispose());
      }
      if (instancedMeshConfigRef.current) {
        Object.values(instancedMeshConfigRef.current).forEach((cfg: any) => cfg.geometry.dispose());
      }
    };
  }, [gameState, activeWeather, activeTimeSpeed]);

  // Clean up Web Audio on component unmount
  useEffect(() => {
    return () => {
      const a = audioRef.current;
      if (a.birdTimer) {
        clearInterval(a.birdTimer);
        a.birdTimer = null;
      }
      if (a.ctx) {
        try {
          a.engineOsc1?.stop();
          a.engineOsc2?.stop();
          a.engineLfo?.stop();
          a.waveLfo?.stop();
          a.natureNode?.stop();
          a.ctx.close();
        } catch (err) {}
        a.ctx = null;
        a.engineOsc1 = null;
        a.engineOsc2 = null;
        a.engineLfo = null;
        a.waveLfo = null;
        a.natureNode = null;
        a.enabled = false;
      }
    };
  }, []);

  // Initial engine bootstrap
  useEffect(() => {
    startSimulation();
  }, []);

  const initAudio = () => {
    const a = audioRef.current;
    if (a.ctx) return;

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      a.ctx = ctx;

      // Master volume
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0, ctx.currentTime); // start silent, fade in
      masterGain.connect(ctx.destination);
      masterGain.gain.linearRampToValueAtTime(0.65, ctx.currentTime + 0.8);
      a.masterGain = masterGain;

      // 1. ENGINE SYNTHESIZER (Smooth, non-irritating cockpit rumble)
      // Triangle wave at 40Hz for the deep sub-rumble
      const osc1 = ctx.createOscillator();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(40, ctx.currentTime);

      // Sine wave at 80Hz for the main pitch of propeller engine
      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(80, ctx.currentTime);

      const engineGain1 = ctx.createGain();
      engineGain1.gain.setValueAtTime(0.6, ctx.currentTime);
      const engineGain2 = ctx.createGain();
      engineGain2.gain.setValueAtTime(0.35, ctx.currentTime);

      osc1.connect(engineGain1);
      osc2.connect(engineGain2);

      // Lowpass filter to keep the sound warm and remove harsh whistles
      const engineFilter = ctx.createBiquadFilter();
      engineFilter.type = "lowpass";
      engineFilter.frequency.setValueAtTime(140, ctx.currentTime); // Low cut-off makes it super smooth
      engineFilter.Q.setValueAtTime(1.5, ctx.currentTime);

      engineGain1.connect(engineFilter);
      engineGain2.connect(engineFilter);

      // Propeller Tremolo (LFO) to create a warm spinning propeller chop-chop sound
      const engineLfo = ctx.createOscillator();
      engineLfo.type = "sine";
      engineLfo.frequency.setValueAtTime(12.5, ctx.currentTime); // 12.5 Hz spinning rate

      const engineLfoGain = ctx.createGain();
      engineLfoGain.gain.setValueAtTime(0.2, ctx.currentTime); // depth of volume tremolo

      engineLfo.connect(engineLfoGain);

      const engineGain = ctx.createGain();
      engineGain.gain.setValueAtTime(0.22, ctx.currentTime); // Baseline engine volume

      // Modulate the master engine gain with our LFO gain!
      engineLfoGain.connect(engineGain.gain);

      engineFilter.connect(engineGain);
      engineGain.connect(masterGain);

      osc1.start();
      osc2.start();
      engineLfo.start();

      a.engineOsc1 = osc1;
      a.engineOsc2 = osc2;
      a.engineLfo = engineLfo;
      a.engineFilter = engineFilter;
      a.engineGain = engineGain;

      // 2. SOOTHING NATURE AMBIENCE (White noise wave synthesizer)
      const bufferSize = ctx.sampleRate * 2.0; // 2 seconds
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2.0 - 1.0;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter 1: Lowpass filter for ocean wave swells
      const natureFilter = ctx.createBiquadFilter();
      natureFilter.type = "lowpass";
      natureFilter.frequency.setValueAtTime(260, ctx.currentTime);
      natureFilter.Q.setValueAtTime(1.2, ctx.currentTime);

      // Slow LFO for ocean tide swells (fades wave intensity in and out)
      const waveLfo = ctx.createOscillator();
      waveLfo.type = "sine";
      waveLfo.frequency.setValueAtTime(0.12, ctx.currentTime); // 8-second waves

      const waveLfoGain = ctx.createGain();
      waveLfoGain.gain.setValueAtTime(180, ctx.currentTime); // modulate filter frequency between 80Hz and 440Hz

      waveLfo.connect(waveLfoGain);
      waveLfoGain.connect(natureFilter.frequency);

      // Modulate nature volume too for breathing effect
      const waveVolumeLfoGain = ctx.createGain();
      waveVolumeLfoGain.gain.setValueAtTime(0.14, ctx.currentTime);
      waveLfo.connect(waveVolumeLfoGain);

      const natureGain = ctx.createGain();
      natureGain.gain.setValueAtTime(0.25, ctx.currentTime); // base wave volume

      waveVolumeLfoGain.connect(natureGain.gain);

      whiteNoise.connect(natureFilter);
      natureFilter.connect(natureGain);
      natureGain.connect(masterGain);

      whiteNoise.start();
      waveLfo.start();

      a.natureNode = whiteNoise;
      a.natureFilter = natureFilter;
      a.natureGain = natureGain;
      a.waveLfo = waveLfo;

      // Helper to synthesize occasional, ultra-relaxing bird chirping melodies
      const triggerBirdChirp = () => {
        if (!a.ctx || !a.enabled || a.ctx.state !== "running") return;
        const nowTime = a.ctx.currentTime;
        const notes = 2 + Math.floor(Math.random() * 3); // 2 to 4 rapid chirps
        let delayTime = 0;

        for (let i = 0; i < notes; i++) {
          const birdOsc = a.ctx.createOscillator();
          const birdGain = a.ctx.createGain();

          birdOsc.type = "sine";
          const startFreq = 2400 + Math.random() * 600;
          const endFreq = startFreq + 500 + Math.random() * 300;
          const duration = 0.05 + Math.random() * 0.05;

          birdOsc.frequency.setValueAtTime(startFreq, nowTime + delayTime);
          birdOsc.frequency.exponentialRampToValueAtTime(endFreq, nowTime + delayTime + duration);

          birdGain.gain.setValueAtTime(0.0, nowTime + delayTime);
          birdGain.gain.linearRampToValueAtTime(0.012, nowTime + delayTime + duration * 0.2);
          birdGain.gain.exponentialRampToValueAtTime(0.0001, nowTime + delayTime + duration);

          birdOsc.connect(birdGain);
          birdGain.connect(masterGain);

          birdOsc.start(nowTime + delayTime);
          birdOsc.stop(nowTime + delayTime + duration + 0.02);

          delayTime += duration + 0.07 + Math.random() * 0.05;
        }
      };

      // Periodically trigger birds chirping in the background
      a.birdTimer = setInterval(() => {
        if (Math.random() < 0.7) {
          triggerBirdChirp();
        }
      }, 7000);

      a.enabled = true;
      setAudioEnabled(true);
      localStorage.setItem("flight_sim_audio_enabled", "true");
    } catch (e) {
      console.warn("Failed to initialize Web Audio API:", e);
    }
  };

  const playCrashSound = (ctx: AudioContext) => {
    try {
      const now = ctx.currentTime;

      // 1. Heavy Low-Frequency Explosion Rumble
      const osc1 = ctx.createOscillator();
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(120, now);
      osc1.frequency.exponentialRampToValueAtTime(20, now + 1.2);

      const filter1 = ctx.createBiquadFilter();
      filter1.type = "lowpass";
      filter1.frequency.setValueAtTime(400, now);
      filter1.frequency.exponentialRampToValueAtTime(40, now + 1.0);

      const gain1 = ctx.createGain();
      gain1.gain.setValueAtTime(0.9, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      osc1.connect(filter1);
      filter1.connect(gain1);
      gain1.connect(ctx.destination);

      osc1.start(now);
      osc1.stop(now + 1.5);

      // 2. High-Frequency Metallic Shattering/Debris Noise
      const bufferSize = ctx.sampleRate * 1.5; // 1.5s duration
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2.0 - 1.0;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;

      const filter2 = ctx.createBiquadFilter();
      filter2.type = "bandpass";
      filter2.frequency.setValueAtTime(2000, now);
      filter2.frequency.exponentialRampToValueAtTime(150, now + 0.9);
      filter2.Q.setValueAtTime(3.0, now);

      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0.5, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

      noiseSource.connect(filter2);
      filter2.connect(gain2);
      gain2.connect(ctx.destination);

      noiseSource.start(now);
      noiseSource.stop(now + 1.2);

      // 3. Middle Impact Thump (Shockwave)
      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(220, now);
      osc2.frequency.linearRampToValueAtTime(60, now + 0.6);

      const gain3 = ctx.createGain();
      gain3.gain.setValueAtTime(0.75, now);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      osc2.connect(gain3);
      gain3.connect(ctx.destination);

      osc2.start(now);
      osc2.stop(now + 0.8);
    } catch (err) {
      console.warn("Failed to synthesize crash sound:", err);
    }
  };

  const handleAudioCrash = () => {
    const a = audioRef.current;
    if (a.birdTimer) {
      clearInterval(a.birdTimer);
      a.birdTimer = null;
    }

    if (a.ctx) {
      // Play procedural crash sound!
      playCrashSound(a.ctx);

      // Smoothly stop the background engine noise and waves so the crash is crystal clear
      try {
        a.engineGain?.gain.setValueAtTime(a.engineGain.gain.value, a.ctx.currentTime);
        a.engineGain?.gain.linearRampToValueAtTime(0.0, a.ctx.currentTime + 0.15);

        a.natureGain?.gain.setValueAtTime(a.natureGain.gain.value, a.ctx.currentTime);
        a.natureGain?.gain.linearRampToValueAtTime(0.0, a.ctx.currentTime + 0.15);
      } catch (err) {}

      const savedCtx = a.ctx;
      const osc1 = a.engineOsc1;
      const osc2 = a.engineOsc2;
      const lfo = a.engineLfo;
      const wlfo = a.waveLfo;
      const noise = a.natureNode;

      setTimeout(() => {
        try {
          osc1?.stop();
          osc2?.stop();
          lfo?.stop();
          wlfo?.stop();
          noise?.stop();
          savedCtx?.close();
        } catch (err) {}
      }, 1600); // Wait for the crash sound to finish before closing the AudioContext

      a.ctx = null;
      a.engineOsc1 = null;
      a.engineOsc2 = null;
      a.engineLfo = null;
      a.natureNode = null;
      a.natureFilter = null;
      a.natureGain = null;
      a.waveLfo = null;
      a.enabled = false;
    }
  };

  const stopAudio = () => {
    const a = audioRef.current;
    if (a.birdTimer) {
      clearInterval(a.birdTimer);
      a.birdTimer = null;
    }

    if (a.ctx) {
      try {
        a.masterGain?.gain.setValueAtTime(a.masterGain.gain.value, a.ctx.currentTime);
        a.masterGain?.gain.linearRampToValueAtTime(0.0, a.ctx.currentTime + 0.3);
      } catch (err) {}

      const savedCtx = a.ctx;
      const osc1 = a.engineOsc1;
      const osc2 = a.engineOsc2;
      const lfo = a.engineLfo;
      const wlfo = a.waveLfo;
      const noise = a.natureNode;

      setTimeout(() => {
        try {
          osc1?.stop();
          osc2?.stop();
          lfo?.stop();
          wlfo?.stop();
          noise?.stop();
          savedCtx?.close();
        } catch (err) {}
      }, 350);

      a.ctx = null;
      a.engineOsc1 = null;
      a.engineOsc2 = null;
      a.engineLfo = null;
      a.natureNode = null;
      a.natureFilter = null;
      a.natureGain = null;
      a.waveLfo = null;
      a.enabled = false;
    }
    setAudioEnabled(false);
    localStorage.setItem("flight_sim_audio_enabled", "false");
  };

  const toggleAudio = () => {
    if (audioRef.current.enabled) {
      stopAudio();
    } else {
      initAudio();
    }
  };

  const handleStartEngines = () => {
    setGameState("playing");
    const g = gameRef.current;
    if (g.clock) {
      g.clock.start();
    }
    g.lastFpsTime = performance.now();

    // Auto-initialize audio if enabled by user (defaults to true if null)
    const savedAudio = localStorage.getItem("flight_sim_audio_enabled");
    if (savedAudio === "true" || savedAudio === null) {
      initAudio();
    }
  };

  const handleGameOver = (reason: string) => {
    setGameState("crashed");
    setCrashReason(reason);
    
    // Play crash sound and stop engine continuous rumbles
    handleAudioCrash();
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-900 select-none touch-none">
      {/* Three.js Canvas mount container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Holographic relative pointer drag HUD (only appears while active dragging) */}
      {touchStartPos && (
        <div 
          className="absolute pointer-events-none z-30"
          style={{
            left: touchStartPos.x,
            top: touchStartPos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Outer Ring */}
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-sky-500/30 flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 rounded-full bg-sky-500/60 shadow-sm" />
          </div>
          {/* Active Joystick handle */}
          <div 
            className="absolute w-10 h-10 rounded-full bg-sky-500/10 border-2 border-sky-500/60 shadow-md flex items-center justify-center"
            style={{
              transform: `translate(${Math.max(-50, Math.min(50, touchStartPos.currentX - touchStartPos.x))}px, ${Math.max(-50, Math.min(50, touchStartPos.currentY - touchStartPos.y))}px)`,
              left: "calc(50% - 20px)",
              top: "calc(50% - 20px)",
            }}
          />
        </div>
      )}

      {/* Retro HUD overlay but with calm, premium, modern design */}
      {gameState === "playing" && (
        <div className="absolute inset-0 w-full h-full pointer-events-none font-mono z-10 text-slate-300">
          {/* Top Left Cockpit Readout */}
          {hudReadoutExpanded ? (
            <div className="absolute top-5 left-5 bg-slate-950/80 border border-slate-800 backdrop-blur-md rounded-lg p-3 min-w-[180px] shadow-lg pointer-events-auto flex flex-col gap-1.5 transition-all duration-300">
              <div 
                onClick={() => setHudReadoutExpanded(false)}
                className="flex items-center justify-between text-[10px] text-sky-400 font-bold uppercase tracking-wider cursor-pointer border-b border-slate-900 pb-1.5 mb-1 select-none"
              >
                <span>✈️ TELEMETRY</span>
                <span className="text-xs text-slate-500 hover:text-sky-400 transition">◀</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-slate-400 text-xs">
                  <span>SPD (SPEED):</span>
                  <span>
                    <b ref={valSpdRef} className="text-white font-bold font-mono">0</b> KM/H
                  </span>
                </div>
                <div className="flex justify-between text-slate-400 text-xs">
                  <span>ALT (ALTITUDE):</span>
                  <span>
                    <b ref={valAltRef} className="text-white font-bold font-mono">0</b> M
                  </span>
                </div>
                <div className="flex justify-between text-slate-400 text-xs">
                  <span>GND (TERRAIN):</span>
                  <span>
                    <b ref={valGndRef} className="text-white font-bold font-mono">0</b> M
                  </span>
                </div>
                <div className="flex justify-between text-slate-400 text-xs">
                  <span>THR (THROTTLE):</span>
                  <span>
                    <b ref={valThrRef} className="text-white font-bold font-mono">0</b> %
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setHudReadoutExpanded(true)}
              className="absolute top-5 left-5 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none"
              title="Expand Telemetry"
            >
              ▶
            </button>
          )}

          {/* Left Side Interactive Throttle Control (Perfect for left thumb on mobile) */}
          {hudThrottleExpanded ? (
            <div className="absolute top-[165px] left-5 bg-slate-950/80 border border-slate-800 backdrop-blur-md rounded-lg p-2.5 shadow-lg pointer-events-auto select-none flex flex-col items-center gap-1.5 transition-all duration-300">
              <div 
                onClick={() => setHudThrottleExpanded(false)}
                className="text-[9px] text-sky-400/80 tracking-wider font-semibold uppercase pb-1 border-b border-slate-800/80 w-full text-center flex items-center justify-between gap-2 cursor-pointer"
              >
                <span>THROTTLE</span>
                <span className="text-[10px] text-slate-500 hover:text-sky-400 transition">◀</span>
              </div>
              <div className="flex flex-col items-center gap-2 mt-1">
                <button
                  onTouchStart={() => gameRef.current.activeKeys.add("Space")}
                  onTouchEnd={() => gameRef.current.activeKeys.delete("Space")}
                  onMouseDown={() => gameRef.current.activeKeys.add("Space")}
                  onMouseUp={() => gameRef.current.activeKeys.delete("Space")}
                  onMouseLeave={() => gameRef.current.activeKeys.delete("Space")}
                  className="w-11 h-11 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 text-xl font-bold rounded flex items-center justify-center cursor-pointer select-none transition transform active:scale-95"
                  title="Increase throttle (Space)"
                >
                  +
                </button>
                <button
                  onTouchStart={() => gameRef.current.activeKeys.add("ShiftLeft")}
                  onTouchEnd={() => gameRef.current.activeKeys.delete("ShiftLeft")}
                  onMouseDown={() => gameRef.current.activeKeys.add("ShiftLeft")}
                  onMouseUp={() => gameRef.current.activeKeys.delete("ShiftLeft")}
                  onMouseLeave={() => gameRef.current.activeKeys.delete("ShiftLeft")}
                  className="w-11 h-11 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 text-xl font-bold rounded flex items-center justify-center cursor-pointer select-none transition transform active:scale-95"
                  title="Decrease throttle (Shift)"
                >
                  -
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setHudThrottleExpanded(true)}
              className="absolute top-[165px] left-5 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none"
              title="Expand Throttle"
            >
              ▶
            </button>
          )}

          {/* Top Right Navigation & Environmental Sensors */}
          {hudEnvironmentExpanded ? (
            <div className="absolute top-5 right-5 bg-slate-950/80 border border-slate-800 backdrop-blur-md rounded-lg p-3 min-w-[200px] text-right shadow-lg pointer-events-auto transition-all duration-300">
              <div 
                onClick={() => setHudEnvironmentExpanded(false)}
                className="flex items-center justify-between text-[10px] text-sky-400 font-bold uppercase tracking-wider cursor-pointer border-b border-slate-900 pb-1.5 mb-1.5 select-none"
              >
                <span className="text-xs text-slate-500 hover:text-sky-400 transition">▶</span>
                <span>🧭 SENSORS & MAP</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between gap-4 text-xs text-slate-400">
                  <span>POS X:</span>
                  <span ref={valXRef} className="text-white font-bold font-mono">0</span>
                </div>
                <div className="flex justify-between gap-4 text-xs text-slate-400">
                  <span>POS Z:</span>
                  <span ref={valZRef} className="text-white font-bold font-mono">0</span>
                </div>
                <div className="flex justify-between gap-4 border-t border-slate-900 pt-1.5 text-xs text-slate-400">
                  <span>BIOME:</span>
                  <span className="text-amber-400 font-bold">{activeBiome}</span>
                </div>
                <div className="flex justify-between gap-4 text-xs text-slate-400">
                  <span>WEATHER:</span>
                  <span className="text-sky-300 font-bold">{activeWeather}</span>
                </div>
                <div className="flex justify-between gap-4 text-xs text-slate-400">
                  <span>TIME:</span>
                  <span ref={valTimeRef} className="text-white font-bold font-mono">12:00</span>
                </div>
                <div className="flex justify-between gap-4 text-xs text-slate-500">
                  <span>FPS:</span>
                  <span ref={valFpsRef} className="font-mono">60</span>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setHudEnvironmentExpanded(true)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none"
              title="Expand Sensors"
            >
              ◀
            </button>
          )}

          {/* Proximity Collision warning indicator */}
          <div
            ref={warningRef}
            className="absolute top-[28%] left-1/2 -translate-x-1/2 px-6 py-3.5 border-2 font-mono text-[13px] font-bold tracking-widest uppercase rounded-lg flex items-center justify-center pointer-events-none transition duration-150 shadow-2xl text-center z-50 min-w-[280px]"
            style={{ display: "none" }}
          />

          {/* Electronic Flight Horizon Indicator */}
          {hudHorizonExpanded ? (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 min-w-[240px] border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60 backdrop-blur-md shadow-lg flex flex-col pointer-events-auto transition-all duration-300">
              <div 
                onClick={() => setHudHorizonExpanded(false)}
                className="text-[9px] text-sky-400 font-bold uppercase tracking-wider py-1 px-3 border-b border-slate-900 bg-slate-950/40 flex items-center justify-between cursor-pointer select-none"
              >
                <span>🧭 ARTIFICIAL HORIZON</span>
                <span className="text-[10px] text-slate-500 hover:text-sky-400 transition">▼</span>
              </div>
              <div className="relative w-[240px] h-[100px] bg-slate-950/20 overflow-hidden">
                <div ref={horizonLineRef} className="absolute top-1/2 left-[-40px] right-[-40px] h-0.5 bg-sky-400" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-0.5 bg-rose-500" />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setHudHorizonExpanded(true)}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none"
              title="Expand Horizon"
            >
              ▲
            </button>
          )}

          {/* Environmental Controller / Weather and Time (Interactive Cockpit controls) */}
          {hudSettingsExpanded ? (
            <div className="absolute bottom-5 right-5 bg-slate-950/85 border border-slate-800 backdrop-blur-md rounded-xl p-3 shadow-xl pointer-events-auto flex flex-col gap-2 max-w-[280px] min-w-[250px] transition-all duration-300">
              <div 
                onClick={() => setHudSettingsExpanded(false)}
                className="text-xs text-sky-400 border-b border-slate-800/80 pb-1.5 font-bold flex items-center justify-between cursor-pointer select-none"
              >
                <span>🛠️ CONTROL PANEL</span>
                <span className="text-[10px] text-slate-500 hover:text-sky-400 transition">▼</span>
              </div>
              
              <div className="flex flex-col gap-2 mt-1">
                {/* Weather settings */}
                <div>
                  <div className="text-[10px] text-slate-400 mb-1 flex justify-between items-center">
                    <span>WEATHER:</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setAutoWeather(!autoWeather);
                      }}
                      className={`px-1.5 py-0.5 text-[8px] font-bold rounded cursor-pointer transition ${
                        autoWeather
                          ? "bg-amber-600 text-white shadow-sm"
                          : "bg-transparent text-slate-400 border border-slate-800 hover:bg-slate-900"
                      }`}
                      title="Toggle automatic weather cycle"
                    >
                      {autoWeather ? "AUTO CYCLE: ON" : "AUTO CYCLE: OFF"}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {Object.values(Weather).map((w) => (
                      <button
                        key={w}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveWeather(w);
                          setAutoWeather(false); // Manually choosing a weather disables auto cycle
                        }}
                        className={`px-1 py-0.5 text-[9px] border uppercase rounded cursor-pointer transition ${
                          activeWeather === w
                            ? "bg-sky-600 text-white border-sky-600 shadow-sm font-medium"
                            : "bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Day cycle settings */}
                <div>
                  <div className="text-[10px] text-slate-400 mb-1">TIME SPEED:</div>
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { label: "STOP", val: 0.0 },
                      { label: "1X", val: 0.01 },
                      { label: "5X", val: 0.04 },
                      { label: "15X", val: 0.2 },
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTimeSpeed(item.val);
                        }}
                        className={`px-1 py-0.5 text-[9px] border rounded cursor-pointer transition ${
                          activeTimeSpeed === item.val
                            ? "bg-sky-600 text-white border-sky-600 shadow-sm font-medium"
                            : "bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Flight Equipment & Controls */}
                <div className="border-t border-slate-800/85 pt-2 flex flex-col gap-1.5">
                  <div className="text-[10px] text-slate-400">SYSTEM CONTROLS:</div>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlashlightEnabled(!flashlightEnabled);
                      }}
                      className={`py-1 text-[8px] border rounded cursor-pointer transition flex flex-col items-center justify-center gap-0.5 min-h-[36px] ${
                        flashlightEnabled
                          ? "bg-sky-600 text-white border-sky-600 font-medium shadow-sm"
                          : "bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"
                      }`}
                      title="Toggle airplane headlight (Key: F)"
                    >
                      <span className="text-xs">🔦</span>
                      <span className="font-bold tracking-tight">HEADLIGHT: {flashlightEnabled ? "ON" : "OFF"}</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInvertY(!invertY);
                      }}
                      className={`py-1 text-[8px] border rounded cursor-pointer transition flex flex-col items-center justify-center gap-0.5 min-h-[36px] ${
                        invertY
                          ? "bg-sky-600 text-white border-sky-600 font-medium shadow-sm"
                          : "bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"
                      }`}
                      title="Toggle pitch inversion (Y-axis)"
                    >
                      <span className="text-xs">🔄</span>
                      <span className="font-bold tracking-tight">INVERT Y: {invertY ? "ON" : "OFF"}</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setWarningsEnabled(!warningsEnabled);
                      }}
                      className={`py-1 text-[8px] border rounded cursor-pointer transition flex flex-col items-center justify-center gap-0.5 min-h-[36px] ${
                        warningsEnabled
                          ? "bg-sky-600 text-white border-sky-600 font-medium shadow-sm"
                          : "bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"
                      }`}
                      title="Toggle onscreen warnings"
                    >
                      <span className="text-xs">⚠️</span>
                      <span className="font-bold tracking-tight">WARNINGS: {warningsEnabled ? "ON" : "OFF"}</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAudio();
                      }}
                      className={`py-1 text-[8px] border rounded cursor-pointer transition flex flex-col items-center justify-center gap-0.5 min-h-[36px] ${
                        audioEnabled
                          ? "bg-amber-600 text-white border-amber-600 font-medium shadow-sm"
                          : "bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"
                      }`}
                      title="Toggle engine and ambient audio (Key: S)"
                    >
                      <span className="text-xs">🔊</span>
                      <span className="font-bold tracking-tight">AUDIO: {audioEnabled ? "ON" : "OFF"}</span>
                    </button>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAcrobaticMode(!acrobaticMode);
                    }}
                    className={`w-full py-1.5 text-[9px] border rounded cursor-pointer transition flex items-center justify-center gap-1.5 min-h-[36px] ${
                      acrobaticMode
                        ? "bg-rose-600 text-white border-rose-600 font-extrabold shadow-md"
                        : "bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"
                    }`}
                    title="Toggle acrobatics mode for loops and rolls (Key: X)"
                  >
                    <span className="text-xs">🤸</span>
                    <span className="font-bold tracking-wider uppercase">ACROBATICS (360°): {acrobaticMode ? "ON" : "OFF"}</span>
                  </button>

                  {/* Render Distance Settings selector */}
                  <div className="mt-2.5 pt-2 border-t border-slate-900 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Draw Distance:</span>
                      <span className="text-[9px] text-sky-400 font-extrabold font-mono">
                        {viewDistanceSetting === 1 ? "3x3 CHUNKS (LOW)" :
                         viewDistanceSetting === 2 ? "5x5 CHUNKS (MEDIUM)" :
                         viewDistanceSetting === 3 ? "7x7 CHUNKS (HIGH)" :
                         viewDistanceSetting === 4 ? "9x9 CHUNKS (MAX)" : "11x11 CHUNKS (ULTRA)"}
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-1">
                      {[1, 2, 3, 4, 5].map((dist) => (
                        <button
                          key={dist}
                          onClick={(e) => {
                            e.stopPropagation();
                            setViewDistanceSetting(dist);
                          }}
                          className={`py-1 text-[8px] font-bold border rounded cursor-pointer transition ${
                            viewDistanceSetting === dist
                              ? "bg-sky-600 text-white border-sky-600 font-extrabold shadow-sm"
                              : "bg-transparent text-slate-400 border-slate-800 hover:bg-slate-900"
                          }`}
                          title={`Terrain draw distance: ${
                            dist === 1 ? "Minimum performance impact" :
                            dist === 2 ? "Balanced (Standard)" :
                            dist === 3 ? "Extended horizon" :
                            dist === 4 ? "Very high detail" : "Extreme draw distance"
                          }`}
                        >
                          {dist === 1 ? "1x" : dist === 2 ? "2x" : dist === 3 ? "3x" : dist === 4 ? "4x" : "5x"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setHudSettingsExpanded(true)}
              className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-slate-950/85 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none"
              title="Expand Controls"
            >
              ▲
            </button>
          )}
        </div>
      )}

      {/* Screen states overlay (Initial loading or crashed screen) */}
      {(gameState === "init" || gameState === "loading" || gameState === "ready" || gameState === "crashed") && (
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-slate-950/95 font-mono z-20 text-white p-6 animate-fade-in">
          <div className="max-w-md text-center">
            {gameState === "crashed" ? (
              <>
                <h1 className="text-4xl sm:text-5xl font-black text-rose-500 tracking-wider mb-2 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                  {crashReason}
                </h1>
                <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
                  Your aircraft has suffered extreme structural impact. Observe the terrain shapes and aim for the horizon in your next flight!
                </p>
                <button
                  onClick={handleRestart}
                  className="px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold tracking-widest rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 text-lg"
                >
                  REFLY / RESTART
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-slate-100 mb-6 uppercase">
                  FLIGHT SIMULATOR 4.0
                </h1>

                {gameState === "ready" ? (
                  <>
                    <button
                      onClick={handleStartEngines}
                      className="px-10 py-4 bg-sky-600 hover:bg-sky-500 text-white font-extrabold tracking-widest rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 text-lg"
                    >
                      START ENGINES
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin" />
                    <p className="text-slate-500 text-xs mt-2">Initializing procedural terrain and 3D components...</p>
                  </div>
                )}

                <div className="mt-8 text-[11px] text-slate-500 leading-normal border-t border-slate-900 pt-5 space-y-2">
                  <div>
                    <b>PC Controls:</b> Click & drag anywhere on the screen or use Arrow keys / WASD | Space / Shift = Throttle | Key X = Acrobatics Mode (360° loops)
                  </div>
                  <div>
                    <b>Mobile Controls:</b> Touch and drag anywhere on the screen | Buttons +/- on left side = Throttle | Acrobatics toggle button on bottom-right
                  </div>
                  <div className="text-emerald-500/80 font-bold border-t border-slate-900/50 pt-2 flex items-center justify-center gap-1">
                    <span>📡</span>
                    <span>OFFLINE SUPPORT: Load the game once with internet to cache assets, then play anywhere completely offline!</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
