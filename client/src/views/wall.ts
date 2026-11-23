import type { Tile } from "../../mahjong/types";
import { renderTile } from "./tile";

export function renderWall(tiles: Tile[]): string {
    const renderedTiles = tiles.map(tile => renderTile(tile));

    return `
        <div class="flex flex-wrap gap-2">
            ${renderedTiles.join("")}
        </div>
    `;
}
