class Particle {
    constructor(private color: string, private sprite: string) {}

    public move(coords:Coords, vector: Coords, speed: number):void {
        // Some implementation here
    }

    public draw(coords:Coords, canvas: string):void {
        // Some implementation here
    }

}

class MovingParticle {

    constructor( private particle: Particle, private coords: Coords, private vector: Coords, private speed: number) {}

    public move(): void {
        this.particle.move(this.coords,this.vector,this.speed)
    }

    public draw(canvas: string): void {
        this.particle.draw(this.coords,canvas)
    }

}

export class Game {
    private movingParticles: MovingParticle[] = []
    private particles: Record<string,Particle> = {};

    public addParticle(coords: Coords, vector: Coords, speed: number, color: string, sprite: string) {
        let particle = this.particles[`${color}${sprite}`]
        if(!particle) {
            particle = new Particle(color,sprite)
            this.particles[`${color}${sprite}`] = particle
        }
        const movingParticle = new MovingParticle(particle, coords, vector, speed)
        this.movingParticles.push(movingParticle)
    }

    public draw(canvas: string): void {
        for(const movingParticle of this.movingParticles) {
            movingParticle.draw(canvas)
        }
    }
}


interface Coords {
    x: number;
    y: number;
    z: number;
}