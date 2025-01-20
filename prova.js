var numero = 23;
var stringa = "marco";
var booleano = true;
var array = [1, 2, 3, 4];
var arrayvs = ["marco", "luca", "giuseppe"];
var tupla = ["Marco", 45, false];
function somma(a, b) {
    if (b === void 0) { b = 3; }
    return a + b;
}
console.log(somma(numero));
array.sort(function (a, b) { return b - a; });
console.log(array);
var nuovoArray = array.map(function (a) {
    if (a === 2) {
        return Number(a);
    }
    else {
        return String(a);
    }
});
console.log(nuovoArray);
