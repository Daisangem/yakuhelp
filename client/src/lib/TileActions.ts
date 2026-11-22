export class TileActions{
    // Tile Shuffling
    static randomize(xar: number[]): void {
        const arrShuf = (arr: number[]): void =>{
            arr.sort(() => Math.random() - 0.5);
        }
        arrShuf(xar);
        console.log(xar);
    };
}
