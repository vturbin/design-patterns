"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Particle {
    constructor(color, sprite) {
        this.color = color;
        this.sprite = sprite;
    }
    move(coords, vector, speed) {
        // Some implementation here
    }
    draw(coords, canvas) {
        // Some implementation here
    }
}
class MovingParticle {
    constructor(particle, coords, vector, speed) {
        this.particle = particle;
        this.coords = coords;
        this.vector = vector;
        this.speed = speed;
    }
    move() {
        this.particle.move(this.coords, this.vector, this.speed);
    }
    draw(canvas) {
        this.particle.draw(this.coords, canvas);
    }
}
class Game {
    constructor() {
        this.movingParticles = [];
        this.particles = {};
    }
    addParticle(coords, vector, speed, color, sprite) {
        let particle = this.particles[`${color}${sprite}`];
        if (!particle) {
            particle = new Particle(color, sprite);
            this.particles[`${color}${sprite}`] = particle;
        }
        const movingParticle = new MovingParticle(particle, coords, vector, speed);
        this.movingParticles.push(movingParticle);
    }
    draw(canvas) {
        for (const movingParticle of this.movingParticles) {
            movingParticle.draw(canvas);
        }
    }
}
exports.Game = Game;
