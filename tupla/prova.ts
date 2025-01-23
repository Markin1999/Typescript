// Aggiungere un'annotazione di tipo tupla per questa tupla.

const countryPopulation: [string, number] = ["Cina", 1_412_600_000];

// Cambia il CountryWithCurrencytipo in un tipo tupla.
// Questo dovrebbe correggere l'errore di tipo alla riga 14.

type CountryWithCurrency = [string, string, string];

const countryCurrency: CountryWithCurrency = ["Italy", "Euro", "EUR"];
// Aggiungi un'annotazione di tipo tupla che impedisce che questa tupla venga modificata.
// Usa il modificatore readonly e la sintassi del tipo tupla: readonly [type, type]
// Ciò causerà un errore di tipo. Rimuovi il codice che ora ha un errore di tipo.

const countryLanguage: readonly [string, string] = ["Greece", "Greek"];

//countryLanguage.reverse();

console.log(countryLanguage);
// ----
