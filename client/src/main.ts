import 'htmx.org'
import './style.css'

import {createWall} from './mahjong/wall.ts'
import {renderWall} from '../views/wall.ts'
import {renderHand} from '../views/hand.ts'

let mywall = createWall();

const button = document.querySelector<HTMLButtonElement>("#load-wall");
const buttonHand = document.querySelector<HTMLButtonElement>("#load-hand");
const content = document.querySelector<HTMLDivElement>("#content");
const contentHand = document.querySelector<HTMLDivElement>("#content-hand");

button?.addEventListener("click", async () => {
    const wall = createWall();
    content!.innerHTML = await renderWall(wall);
});

buttonHand?.addEventListener("click", async () => {
    const hand = createWall();
    contentHand!.innerHTML = await renderWall(hand);
});
