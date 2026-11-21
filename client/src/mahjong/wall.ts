import type * as tileType from "./types";

export function createWall(): tileType.Tile[]{
    const wall: tileType.Tile[] = [];

    const suits: tileType.Shupai[] = ["Man", "Pin", "Sou"];
    const jihais: tileType.Jihai[] = ["Ton", "Nan", "Sha", "Pei", "Haku", "Hatsu", "Chu"];

    let id = 0;
    for (const suit of suits){
        for (let value = 1; value <=9; value++){
            const notation = `${value}${suit[0]}`;

            const tile: tileType.ShupaiTile = {
                id: String(id++),
                type: "shupai",
                notation,
                suit,
                value,
                image: `/assets/mahjong-tiles/Regular/${suit}${value}.svg`
            }
            wall.push(...Array(4).fill(tile));
            console.log(`Tile: ${tile}`);
        }
    }

for (const [index, jihai] of jihais.entries()){
    const notation = `${index + 1}z`;
            const tile: tileType.JihaiTile = {
            id: String(id++),
            type: "jihai",
            notation,
            value: jihai,
            image: `/assets/mahjong-tiles/Regular/${jihai}.svg`
        };
            wall.push(...Array(4).fill(tile));
}
       console.log(`Wallcreated: ${wall.length}`);
       console.table(wall);
    return wall;
}
