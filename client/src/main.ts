import 'htmx.org'
import './style.css'

import {createWall} from './mahjong/wall.ts'

console.log("Yakuhelper!");
const tiles: Tile[] = [
    { id: "1m", suit: "man", value: 1 },
    { id: "2m", suit: "man", value: 2 },
    { id: "5p", suit: "pin", value: 5 },
    { id: "0p", suit: "pin", value: 5, red: true },
    { id: "1z", suit: "honor", value: 1 }
];

console.log(tiles[3]);

let mywall = createWall();
