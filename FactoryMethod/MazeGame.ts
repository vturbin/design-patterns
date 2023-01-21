export abstract class MazeGame {

    private room!: Room;
    
    // Note that, despite its name, the creator's primary
    // responsibility isn't creating (calling new objects). It usually
    // contains some core business logic that relies on product
    // objects returned by the factory method. Subclasses can
    // indirectly change that business logic by overriding the
    // factory method and returning a different type of product
    // from it.
    public play(): void {
        this.room = this.makeRoom()
        console.log(`Playing inside ${this.room.getRoomName()}`)
    }

    /**
     * The MazeGame uses Rooms but it puts the responsibility of creating Rooms to its subclasses which create the concrete classes.
     * Thus factory methods decouple callers (MazeGame) from the implementation of the concrete classes.
     */
    public abstract makeRoom(): Room
}

/**
 * Factory Method pattern uses inheritance and relies on a subclass to handle the desired object instantiation.
 */
class MagicMazeGame extends MazeGame{
    public makeRoom(): Room {
        return new MagicRoom()
    } 
}

class OrdinaryMazeGame extends MazeGame{
    public makeRoom(): Room {
        return new OrdinaryRoom()
    } 
}

abstract class Room {
    public getRoomName(): string{
        return ''
    }
}

class OrdinaryRoom extends Room{
    public getRoomName(): string{
        return 'Ordinary Room'
    }
}

class MagicRoom extends Room{
    public getRoomName(): string{
        return 'Magic Room'
    }
}
 
const initializeGame = (gameType: string): void => {
    let game: MazeGame;
    if (gameType === 'ordinary') {
        game = new OrdinaryMazeGame()
    } else {
        game = new MagicMazeGame()
    }
    game.play()
}


initializeGame('magic')