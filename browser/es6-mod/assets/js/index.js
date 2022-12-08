import { Game } from './game.js';

/* once page is fully loaded, instantiate a new instance of Class, assign it to game and invoke start method */
window.onload = () => {
    const game = new Game();
    game.start();
};