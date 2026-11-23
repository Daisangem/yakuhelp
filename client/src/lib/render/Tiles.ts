import type { Tile } from "../src/mahjong/types.ts"
export class Tiles{
    static function renderTile(tile: Tile): string {
        return `
        <div class="tile-cards p-1 w-24 h-34 object-contain border-3 draggable=true hover:border-blue-500 cursor-grab active:border-blue-500 select-none
        id="${tile.id}"
>
            <img
                src="${tile.image}"
                alt="${tile.notation}"
                class="w-full h-full"
            >
        </div>
    `;}


}
