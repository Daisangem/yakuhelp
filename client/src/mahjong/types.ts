export type Shupai = "man" | "pin" | "sou";
export type Kazehai = "ton" | "nan" | "sha" | "pei";
export type Sangenpai = "haku" | "hatsu" | "chun";
export type Jihai = Kazehai | Sangenpai;

export interface BaseTile {
    id: string;
    notation: string;
    img: string;
}

export interface ShupaiTile extends BaseTile {
    type: "shupai";
    suit: Shupai;
    value: number;
    red?: boolean;
}

export interface JihaiTile extends BaseTile {
    type: "jihai";
    value: Jihai;
}

export type Tile = ShupaiTile | JihaiTile;
