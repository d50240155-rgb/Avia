/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Weather {
  Sunny = "SUNNY",
  Misty = "MISTY",
  Stormy = "STORMY",
}

export enum BiomeType {
  Alpine = "ALPINE",
  Tropical = "TROPICAL",
  Badlands = "BADLANDS",
  Volcanic = "VOLCANIC",
  Arctic = "ARCTIC",
  Forest = "FOREST",
}

export interface GameInput {
  x: number;
  y: number;
  throttle: number;
}

export interface FlightStats {
  spd: number;
  alt: number;
  thr: number;
  x: number;
  z: number;
  fps: number;
  pitch: number;
  roll: number;
}
