import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="bg-cyan-500 text-white flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="font-bold text-2xl sm:text-3xl">
          Hospital das Clínicas
        </h1>

        <button
          className="text-white text-3xl sm:hidden focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? "X" : "Menu"}
        </button>
      </header>

      <nav className="hidden sm:flex bg-cyan-100 h-14 text-lg items-center justify-center shadow-inner">
        <Link
          to="/"
          className="m-2 text-gray-800 px-3 py-2 rounded-md hover:bg-cyan-50 hover:font-semibold transition"
        >
          Home
        </Link>
        <Link
          to="/funcionarios"
          className="m-2 text-gray-800 px-3 py-2 rounded-md hover:bg-cyan-50 hover:font-semibold transition"
        >
          Lista de Funcionários
        </Link>
      </nav>

      {menuAberto && (
        <nav className="sm:hidden flex flex-col bg-cyan-100 text-lg text-center shadow-md animate-fade-in">
          <Link
            to="/"
            className="py-3 border-b border-cyan-200 hover:bg-cyan-50 transition"
            onClick={() => setMenuAberto(false)}
          >
            Home
          </Link>
          <Link
            to="/funcionarios"
            className="py-3 hover:bg-cyan-50 transition"
            onClick={() => setMenuAberto(false)}
          >
            Lista de Funcionários
          </Link>
        </nav>
      )}
    </>
  );
}
