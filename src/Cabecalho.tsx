import { Link } from "react-router-dom";

export default function Cabecalho(){
    return (
        <>
        <header className="bg-cyan-500 h-24 ">
            <h1 className="flex p-6 font-bold text-white text-4xl">Hospital das Clínicas</h1>
        </header>
        <nav className="flex bg-cyan-100 h-12 text-2xl items-center justify-center">
            <Link to="/" className="m-1 text-black px-2 pb-1 rounded-md hover:font-bold hover:bg-cyan-50 hover:text-gray-800">Home</Link><Link to="/funcionarios" className="m-1 text-black px-2 pb-1 rounded-md hover:font-bold hover:bg-cyan-50 hover:text-gray-800">Lista de Funcionários</Link>
        </nav>
        </>
    )
}