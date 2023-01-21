"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MazeGame = void 0;
class MazeGame {
    // Note that, despite its name, the creator's primary
    // responsibility isn't creating (calling new objects). It usually
    // contains some core business logic that relies on product
    // objects returned by the factory method. Subclasses can
    // indirectly change that business logic by overriding the
    // factory method and returning a different type of product
    // from it.
    play() {
        this.room = this.makeRoom();
        console.log(`Playing inside ${this.room.getRoomName()}`);
    }
}
exports.MazeGame = MazeGame;
/**
 * Factory Method pattern uses inheritance and relies on a subclass to handle the desired object instantiation.
 */
class MagicMazeGame extends MazeGame {
    makeRoom() {
        return new MagicRoom();
    }
}
class OrdinaryMazeGame extends MazeGame {
    makeRoom() {
        return new OrdinaryRoom();
    }
}
class Room {
    getRoomName() {
        return '';
    }
}
class OrdinaryRoom extends Room {
    getRoomName() {
        return 'Ordinary Room';
    }
}
class MagicRoom extends Room {
    getRoomName() {
        return 'Magic Room';
    }
}
const initializeGame = (gameType) => {
    let game;
    if (gameType === 'ordinary') {
        game = new OrdinaryMazeGame();
    }
    else {
        game = new MagicMazeGame();
    }
    game.play();
};
initializeGame('magic');
