import type { Tile } from "../src/mahjong/types.ts"

export function renderTile(tile: Tile): string {
    return `
        <div class="p-1 w-24 h-34 object-contain border-2 draggable="true" hover:border-blue-500
        data-id="${tile.id}"
>
            <img
                src="${tile.image}"
                alt="${tile.notation}"
                class="tile-image"
            >
        </div>
    `;
}
