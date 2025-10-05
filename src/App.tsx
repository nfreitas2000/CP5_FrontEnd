import { Outlet } from "react-router-dom";
import Cabecalho from "../src/Components/Cabecalho";
import Rodape from "../src/Components/Rodape";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />

      {/* Conteúdo principal cresce e empurra o footer */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Rodape />
    </div>
  );
}