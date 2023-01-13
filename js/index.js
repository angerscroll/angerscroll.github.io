import Game from "./game/Game.js";
import GameView from "./game/GameView.js";



console.log('index.js')

const row = 5;
const cell =5;
const bn  = `1111100000111110000011111`;

const gameStart  = new Game({row,cell});
let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = i => {
  console.log(`Tile clicked : ${i}`);
}