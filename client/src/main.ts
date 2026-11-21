import 'htmx.org'
import './style.css'
import {TileGenerator} from "./lib/TileGenerator.ts"
//import {createWall} from './mahjong/wall.ts'
import {renderWall} from '../views/wall.ts'
//import {renderHand} from '../views/hand.ts'

//let mywall = createWall();

const generator = new TileGenerator();

const button = document.querySelector<HTMLButtonElement>("#load-wall");
const buttonHand = document.querySelector<HTMLButtonElement>("#load-hand");
button?.addEventListener("click", async () => {
    const tiles = generator.generate();
    content!.innerHTML = await renderWall(tiles);
});

