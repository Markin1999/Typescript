// Impedisce che l'array venga modificato.
// Utilizzare il tipo di interfaccia generico ReadonlyArray: ReadonlyArray
// Questo causerà un errore di tipo. Rimuovi il codice che ora ha un errore di tipo.

const languages: ReadonlyArray<string> = [
  "Mongolian",
  "French",
  "Basque",
  "Thai",
];

//languages[2] = "Hausa";

console.log(languages);
// Impedisci che l'array venga modificato.
// Utilizza il modificatore readonly e la sintassi del tipo letterale array: readonly type[]
// Ciò causerà un errore di tipo. Rimuovi il codice che ora ha un errore di tipo.

const currencies: readonly string[] = [
  "NZD",
  "THB",
  "NGN",
  "EUR",
  "COP",
  "INR",
];

//currencies.reverse();

console.log(currencies);
// ----
