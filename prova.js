// Aggiungere tipi a questa dichiarazione di funzione.
function doubleThePopulation(value) {
    return value * 2;
}
// Correggere o rimuovere le chiamate di funzione che causano errori di tipo.
doubleThePopulation(5);
//doubleThePopulation("6.12");
doubleThePopulation(8526);
//doubleThePopulation(false);
// Modifica questa funzione in modo che il language2parametro sia facoltativo.
// Suggerimento: language2non controllare undefinedprima di passarlo a console.log().
function languagesSpoken(country, language1, language2) {
    console.log("The languages spoken in ".concat(country, " are:"));
    console.log(language1);
    if (language2) {
        console.log(language2);
    }
}
languagesSpoken("Colombia", "Spanish", "English");
languagesSpoken("Greece", "Greek");
languagesSpoken("New Zealand", "English", "Māori");
//---
function getPopulation() {
    return 69950850;
}
// Aggiungere un'asserzione di tipo dopo la chiamata a getPopulation().
// Suggerimento: qual è il tipo effettivo del valore restituito da getPopulation()?
var population = getPopulation();
// Ora che hai aggiunto un'asserzione di tipo, c'è un errore di tipo nel codice sottostante.
// Rimuovi il codice non corretto.
//console.log(population.toUpperCase());
console.log(population * 2);
var country1 = "Nigeria";
var country2 = "Italy";
var country3 = "China";
// ----
// Aggiungere il anytipo per correggere gli errori di tipo nel codice seguente.
var currency = { name: "Indian rupee" };
currency.code = "THB";
currency = "Baht";
// Correggi l'istruzione if in questa funzione in modo che il tipo di valuevenga ridotto a string.
function countryNameLength(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
}
countryNameLength("United States of America");
// Correggi l'errore di tipo che vediamo quando chiamiamo questa funzione.
// Suggerimento: sostituisci uno dei nevertipi con un tipo diverso.
function throwCountryError(message) {
    throw new Error("Could not find country: ".concat(message));
}
throwCountryError("Narnia");
// ----
