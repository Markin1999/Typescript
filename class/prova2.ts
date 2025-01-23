//CLASSE FIGLIA

class Currency2 {
  // Aggiungi i tipi per questi campi e rendili privati.
  // Suggerimento: Guarda il tipo di valori passati quando viene chiamato `new Currency()` qui sotto.

  private name: string;
  private code: string;
  private symbol: string;

  // Aggiungi i tipi ai parametri del costruttore.
  constructor(name: string, code: string, symbol: string) {
    this.name = name;
    this.code = code;
    this.symbol = symbol;
  }

  // I metodi sono pubblici per impostazione predefinita.
  // Aggiungi un modificatore di visibilità per chiarire che questo metodo è pubblico.
  //
  // Aggiungi un tipo di ritorno a questo metodo.
  // Suggerimento: Guarda il tipo di ritorno dedotto.

  public describe() {
    // Replace the `null` values below with the appropriate field values.
    // Hint: Access field values with: this.fieldName

    let description = `The ${this.name} currency `;
    description += `has the code ${this.code} `;
    description += `and uses the symbol ${this.symbol}.`;

    console.log(description);
  }
}

// ----
const currencyNaira1 = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira1);

currencyNaira1.describe();

const currencyUsDollar1 = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar1);

currencyUsDollar1.describe();
