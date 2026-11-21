import type * as TileTypes from "./Tile.ts"

export class TileGenerator{
    private static readonly SUITS: TileTypes.Shupai[] = [
        "Man", "Pin", "Sou"
    ];

    private static readonly JIHAIS: TileTypes.Jihai[] = [
        "Ton", "Nan", "Shaa", "Pei", "Haku", "Hatsu", "Chun"
    ];

    private id = 0;

    public id = 0;
    private BrightTiles = `/assets/mahjong-tiles/Regular/${suit}${value}.svg`;
    private DarkTiles = `/assets/mahjong-tiles/Black/${suit}${value}.svg`;

    public generate(): TileTypes.Tile[]{
       this.id = 0;

       const tiles: TileTypes.tile[] = [];

       this.generateShupai(tiles);
       this.generateJihai(tiles);
        return tiles;
    }

    private generateShupai(tiles: TileTypes.Tile[]): void{
       for (const suit of TileGenerator.SUITS){
           for (let value = 1; value <= 9; value++){
               for (let copy = 0; copy < 4; copy++){
                     tiles.push({
                        id: String(this.id++),
                        type: "shupai",
                        notation: `${value}${suit[0]}`,
                        suit,
                        value,
                        red: value === 5 && copy === 0,
                        image: BrightTiles
                    });
               }
           }
       }
    }

    private generateJihai(tiles: TileTypes.Tile[]): void{
        for (const [index, jihai] of TileGenerator.JIHAIS.entries()){
            for (let copy = 0; copy < 4; copy++){
                tiles.push({
                    id: String(this.id++),
                    type: "jihai",
                    notation: `${index + 1}z`,
                    value: jihai,
                    image: BrightTiles
                })
            }
        }
    }
}
