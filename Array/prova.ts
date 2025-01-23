// Aggiungi un'annotazione di tipo per questo array.
// Utilizza la sintassi del tipo letterale array: type[]
// Suggerimento: osserva il tipo che TypeScript ha dedotto.

const valute1: string[] = ["NZD", "THB", "NGN"];

// Aggiungi un'annotazione di tipo per questo array.
// Usa il tipo di interfaccia generico Array: Array

const valute2: Array<string> = ["EUR", "COP", "INR"];

// Aggiungi un'annotazione di tipo per questo array.
// Usa la sintassi del tipo letterale array: type[]

const popolazioni1: number[] = [50_372_424, 1_352_642_280, 211_400_708];

// Aggiungi un'annotazione di tipo per questo array.
// Usa il tipo di interfaccia generico Array: Array

const popolazioni2: Array<number> = [5_135_300, 331_893_745, 1_412_600_000];

// ----

// Utilizzerai questa interfaccia per descrivere la forma degli oggetti negli array sottostanti. Modifica i tipi per le proprietà in questa interfaccia in modo che siano corretti.

interface Country {
  name: string;
  code: string;
  population: number;
}
// Aggiungi un'annotazione di tipo per questo array di oggetti.
// Utilizza la sintassi del tipo letterale array: Type[]
// Suggerimento: utilizza il Countrytipo.

const countries1: Country[] = [
  {
    name: "China",
    code: "CN",
    population: 1_412_600_000,
  },
  {
    name: "Italy",
    code: "IT",
    population: 60_317_116,
  },
];
// Aggiungere un'annotazione di tipo per questo array di oggetti.
// Utilizzare il tipo di interfaccia generico Array: Array
// Suggerimento: usa il Countrytipo.

const countries2: Array<Country> = [
  {
    name: "Thailand",
    code: "TH",
    population: 69_950_850,
  },
  {
    name: "Greece",
    code: "GR",
    population: 10_678_632,
  },
];
// ----
const populations: number[] = [
  1_412_600_000, 60_317_116, 69_950_850, 10_678_632,
];
//Il metodo Array reduce ci consente di generare un singolo valore da un array di valori.
//Di seguito lo stiamo usando per sommare i valori dell'array populations.
//Il populationparametro nel callback ha un tipo inferito di number.
//Modifica il valore iniziale ( false) in un valore con lo stesso tipo di population. Questo dovrebbe correggere l'errore di tipo sulla riga 23.

const sumOfPopulations = populations.reduce((total, population) => {
  return total + population;
}, 0);

console.log(sumOfPopulations);
