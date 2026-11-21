import type * as tileType from "./types";

export function createWall(): tileType.Tile[]{
    const wall: tileType.Tile[] = [];

    const suits: tileType.Shupai[] = ["man", "pin", "sou"];
    const jihais: tileType.Jihai[] = ["ton", "nan", "sha", "pei", "haku", "hatsu", "chu"];

    for (const suit of suits){
        for (let value = 1; value <=9; value++){
            const tile = [`${value}${suit[0]}`, suit, value, 0];
            wall.push(...Array(4).fill(tile));
        console.log(`Tile: ${tile}`);
        }
    }
    for (const [index, jihai] of jihais.entries()){
            const tile = [`${index+1}z`, jihai, jihai, 0];
            wall.push(...Array(4).fill(tile));
        console.log(`Tile: ${tile}`);
    }
       console.log(`Wallcreated: ${wall.length}`);
       console.table(wall);
    return wall;
}
