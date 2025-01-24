import { useState } from "react";
interface User {
  nome: string;
  eta: number;
}
export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User>({ nome: "Luca", eta: 25 });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>incrementa</button>
      <button onClick={() => setCount((c) => c - 1)}>decrementa</button>
    </div>
  );
}
