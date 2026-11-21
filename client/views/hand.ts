import type { Tile } from "../../mahjong/types";
import { renderTile } from "./tile";

export function renderHand(tile: Tile): string {
    return `
        <div class="p-1 w-24 h-34 object-contain border-3 draggable=true hover:border-blue-500 cursor-grab active:border-blue-500 select-none
        data-id="${tile.id}"
>
            <img
                src="${tile.image}"
                alt="${tile.notation}"
                class="w-full h-full"
            >
        </div>
    `;
}
