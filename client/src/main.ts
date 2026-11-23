import 'htmx.org'
import './style.css'
import {TileGenerator} from "./lib/TileGenerator.ts"
import {TileActions} from "./lib/TileActions.ts"
import {renderWall} from '../views/wall.ts'

const generator = new TileGenerator();

const button = document.querySelector<HTMLButtonElement>("#load-wall");
const buttonHand = document.querySelector<HTMLButtonElement>("#load-hand");
button?.addEventListener("click", async () => {
    const tiles = generator.generate();
    TileActions.randomize(tiles);
    content!.innerHTML = await renderWall(tiles);
});



let nums: number[] = [1,6, 5,9, 4 ,3];
let nums2: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
TileActions.randomize(nums);

TileActions.randomizeFY(nums2);
