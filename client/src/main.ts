import 'htmx.org'
import './style.css'

import {createWall} from './mahjong/wall.ts'
import {renderWall} from '../views/wall.ts'

let mywall = createWall();

const button = document.querySelector<HTMLButtonElement>("#load-wall");
const content = document.querySelector<HTMLDivElement>("#content");

button?.addEventListener("click", async () => {
    const wall = createWall();
    content!.innerHTML = await renderWall(wall);
});
