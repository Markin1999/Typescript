interface Cardprops {
  nome: string;
  eta: number;
  email: string;
}

export function Card({ nome, eta, email }: Cardprops) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{eta}</p>
      <p>{email}</p>
    </div>
  );
}
