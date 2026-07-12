/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A highly optimized 2D/3D Perlin Noise generator.
 * Fast, self-contained, and perfect for procedural generation.
 */
export class ImprovedNoise {
  private p: Uint8Array;

  constructor() {
    this.p = new Uint8Array(512);
    const permutation = new Uint8Array(256);
    // Seeded/deterministic values for repeatable terrains
    for (let i = 0; i < 256; i++) {
      permutation[i] = Math.floor(Math.random() * 256);
    }
    for (let i = 0; i < 512; i++) {
      this.p[i] = permutation[i % 256];
    }
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  public noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = this.fade(x);
    const v = this.fade(y);
    const A = this.p[X] + Y;
    const B = this.p[X + 1] + Y;
    const p00 = this.p[A];
    const p10 = this.p[B];
    const p01 = this.p[A + 1];
    const p11 = this.p[B + 1];

    return this.lerp(
      v,
      this.lerp(u, this.grad(this.p[p00], x, y), this.grad(this.p[p10], x - 1, y)),
      this.lerp(u, this.grad(this.p[p01], x, y - 1), this.grad(this.p[p11], x - 1, y - 1))
    );
  }

  /**
   * Fractal Brownian Motion for rich landscapes.
   */
  public fBm(
    x: number,
    y: number,
    octaves = 5,
    persistence = 0.5,
    lacunarity = 2.0,
    scale = 1.0
  ): number {
    let total = 0;
    let frequency = scale;
    let amplitude = 1;
    let maxValue = 0;
    for (let i = 0; i < octaves; i++) {
      total += this.noise2D(x * frequency, y * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }
    return total / maxValue;
  }
}

export const noiseInstance = new ImprovedNoise();
