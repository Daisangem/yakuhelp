import type { Tile } from "../src/mahjong/types.ts"

export function renderTile(tile: Tile): string {
    return `
        <div class="p-1 w-24 h-34 object-contain  drop-shadow-sm
        draggable=true cursor-grab select-none
        border-8 border-double hover:border-blue-500 active:border-blue-500
        id='${tile.id}'">
            <img
                src="${tile.image}"
                alt="${tile.notation}"
                class="w-full h-full"
            >
        </div>
    `;
}
