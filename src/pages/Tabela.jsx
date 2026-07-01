import { useState } from "react";

export default function Tabela() {
  const [dados] = useState([
    { id: 1, nome: "Ricardo", cargo: "Dev" },
    { id: 2, nome: "Ana", cargo: "Designer" },
    { id: 3, nome: "Carlos", cargo: "Gerente" },
  ]);

  return (
    <div>
      <h1>Tabela</h1>

      <table className="tabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
          </tr>
        </thead>

        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.cargo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
