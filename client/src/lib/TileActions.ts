export class TileActions{
    // Tile Shuffling (Not Fisher Yates)
    // MUST! Implement Fisher Yates, sort used to test tile cards
    static randomize(xar: number[]): void {
        const arrShuf = (arr: number[]): void =>{
            arr.sort(() => Math.random() - 0.5);
        }
        arrShuf(xar);
        console.log(xar);
    };

    // Fisher-Yates - Random permutation of array elements.
    static randomizeFY(xar: number[], debug = false): Array{
        const n = xar.length - 1;
        for (let i=n; i>=0; i--){
           let j = Math.floor(Math.random() * (i + 1));
           [xar[i], xar[j]] = [xar[j], xar[i]];
            if(debug){
                console.log(`Switching array elemets: ${i} and ${j}`);
            }
       }
        if(debug){
            console.table(xar);
        }
        return xar;
    }
}
