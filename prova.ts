// Aggiungere tipi a questa dichiarazione di funzione.

function doubleThePopulation(value: number): number {
  return value * 2;
}
// Correggere o rimuovere le chiamate di funzione che causano errori di tipo.

doubleThePopulation(5);

//doubleThePopulation("6.12");

doubleThePopulation(8_526);

//doubleThePopulation(false);
// Modifica questa funzione in modo che il language2parametro sia facoltativo.
// Suggerimento: language2non controllare undefinedprima di passarlo a console.log().

function languagesSpoken(
  country: string,
  language1: string,
  language2?: string
): void {
  console.log(`The languages spoken in ${country} are:`);

  console.log(language1);

  if (language2) {
    console.log(language2);
  }
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");

//---

function getPopulation(): number {
  return 69_950_850;
}
// Aggiungere un'asserzione di tipo dopo la chiamata a getPopulation().
// Suggerimento: qual è il tipo effettivo del valore restituito da getPopulation()?

const population = getPopulation();

// Ora che hai aggiunto un'asserzione di tipo, c'è un errore di tipo nel codice sottostante.
// Rimuovi il codice non corretto.

//console.log(population.toUpperCase());

console.log(population * 2);
// ----
// Crea un Countryalias di tipo per il stringtipo.
// Modifica il tipo per ogni variabile per utilizzare il Countrytipo.

type Nazione = string;

const country1: Nazione = "Nigeria";

const country2: Nazione = "Italy";

const country3: Nazione = "China";
// ----

// Aggiungere il anytipo per correggere gli errori di tipo nel codice seguente.

let currency: any = { name: "Indian rupee" };

currency.code = "THB";

currency = "Baht";
// Correggi l'istruzione if in questa funzione in modo che il tipo di valuevenga ridotto a string.

function countryNameLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length);
  }
}

countryNameLength("United States of America");
// Correggi l'errore di tipo che vediamo quando chiamiamo questa funzione.
// Suggerimento: sostituisci uno dei nevertipi con un tipo diverso.

function throwCountryError(message: string): never {
  throw new Error(`Could not find country: ${message}`);
}

throwCountryError("Narnia");
// ----
