let numero: number = 23;
let stringa: string = "marco";
let booleano: boolean = true;
let array: number[] = [1, 2, 3, 4];
let arrayvs: Array<string> = ["marco", "luca", "giuseppe"];
let tupla: [string, number, boolean] = ["Marco", 45, false];

function somma(a: number, b: number = 3): number {
  return a + b;
}

console.log(somma(numero));

array.sort((a, b) => b - a);

console.log(array);

let nuovoArray = array.map((a) => {
  if (a === 2) {
    return Number(a);
  } else {
    return String(a);
  }
});

console.log(nuovoArray);
