import Game from "./game/game.js";
import GameView from "./game/gameView.js";



console.log('index.js')

const row = 5;
const cell =5;
const bn  = `1111100000111110000011111`;

const gameStart  = new Game({row,cell});
let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = i => {
  console.log(`Tile clicked : ${i}`);
}