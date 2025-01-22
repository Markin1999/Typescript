// Aggiungere un'annotazione di tipo a questa variabile che descriva l'oggetto in essa contenuto.

const countryPopulation: { code: string; population: number } = {
  code: "NZ",
  population: 5_135_300,
};
// Definisci Countryun'interfaccia che descrive l'oggetto in questa variabile.
// Aggiungi il Countrytipo come annotazione di tipo per questa variabile.

interface Nazione {
  name: string;
  code: string;
  population: number;
}

const countryData: Nazione = {
  name: "India",
  code: "IN",
  population: 1_352_642_280,
};
// Definisci un Currencyalias di tipo che descrive l'oggetto in questa variabile.
// Aggiungi il Currencytipo come annotazione di tipo per questa variabile.

type Nation = {
  name: string;
  code: string;
  symbol: string;
};

const currencyData1: Nation = {
  name: "Euro",
  code: "EUR",
  symbol: "€",
};
// ----

// Modifica l' Countryinterfaccia in modo che la populationproprietà sia facoltativa
// Questo correggerà l'errore di tipo per countryB.
interface Country {
  name: string;
  code: string;
  population?: number;
}

const countryD: Country = {
  name: "India",
  code: "IN",
  population: 1_352_642_280,
};

const countryE: Country = {
  name: "Italy",
  code: "IT",
};

const countryF: Country = {
  name: "Spain",
  code: "ES",
  population: 47_450_795,
};
// Cambia l' Currencyalias di tipo in modo che la nameproprietà non possa essere modificata.
// Ciò causerà un errore di tipo. Rimuovi il codice che ora ha un errore di tipo.

type Currency = {
  readonly name: string;
  code: string;
  symbol: string;
};

const currencyData: Currency = {
  name: "Euro",
  code: "EUR",
  symbol: "€",
};

//currencyData.name = "Gold";

currencyData.code = "GGG";
// ----

interface Country {
  name: string;
  code: string;
}
// Completa l' CountryWithPopulationinterfaccia:
//
// - Estendi l' Countryinterfaccia
// - Aggiungi una populationproprietà con un tipo appropriato

interface CountryWithPopulation extends Country {
  population: number;
}

const countryA: CountryWithPopulation = {
  name: "India",
  code: "IN",
  population: 1_352_642_280,
};

const countryB: Country = {
  name: "Italy",
  code: "IT",
};

const countryC: CountryWithPopulation = {
  name: "Spain",
  code: "ES",
  population: 47_450_795,
};
// ----

// Rendi generica questa funzione di identità.
// Questo dovrebbe correggere gli errori di tipo alle righe 13 e 15.
// Suggerimento: il tipo per il valueparametro della funzione dovrebbe utilizzare una variabile di tipo.

function identity<Type>(value: Type) {
  return value;
}

let value1 = identity<string>("France");

let value2 = identity<number>(67_413_000);
// ----

async function fetchData<Type>(url: string) {
  const response = await fetch(url);
  const responseBody = await response.json();

  return responseBody as Type;
}

interface User {
  name: string;
}
// Passare il Usertipo come argomento di tipo alla fetchData()funzione generica.
// Questo dovrebbe correggere l'errore di tipo alla riga 35.

let user = await fetchData<User>("http://api.com/user/1");

console.log(user.name);
// ----
export {};
// Rendi generica questa LanguagesTypeinterfaccia.
// Questo dovrebbe correggere gli errori di tipo alle righe 14 e 21.
// Suggerimento: il tipo per la languagesproprietà dovrebbe utilizzare una variabile di tipo.

interface Country1<T> {
  name: string;
  languages: T;
}

const languagesObj1: Country1<string> = {
  name: "New Zealand",
  languages: "English, Māori",
};

console.log(languagesObj1.languages);

const languagesObj2: Country1<string[]> = {
  name: "Spain",
  languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", "));
