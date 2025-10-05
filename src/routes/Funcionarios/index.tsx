import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type TypeFuncionario = {
    id:number,
    nome: string,
    cargo: string,
    setor: string,
    turno: string,
    salario: number
}

export default function Funcionarios(){

    const [funcionario, setFuncionario] = useState<TypeFuncionario[]>([])

    useEffect(()=>{
        fetch('http://localhost:5000/funcionario')
        .then(resp=>resp.json())
        .then(resp=>setFuncionario(resp))
    },[])

    const handleDelete = (id:number)=>{
        fetch(`http://localhost:5000/funcionario/${id}`,{method:"delete"})
        .then(()=> {setFuncionario(prev => prev.filter(p=> p.id !== id))})
        .catch(error=>console.log(error)
        )
    }

    return(
        <div className="sm:w-11/12 lg:w-3/4 mt-8 m-auto min-h-screen px-2">
            <h1 className="text-blue-800 text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-8">
                Lista de Funcionários
            </h1>

            <div className="flex justify-center sm:justify-start mb-4">
                <Link className="p-2.5 bg-green-500 text-white font-bold rounded-md text-sm sm:text-base hover:bg-green-600 transition"
                to={'/inserir-funcionario'}>
                    Inserir Funcionário
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-2 border-gray-400 my-5 text-sm sm:text-base">
                    <thead>
                        <tr className="*:p-2.5 bg-blue-800 text-white">
                            <th>Nome</th><th>Cargo</th><th>Setor</th><th>Turno</th><th>Salário</th><th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            funcionario.map(f=>(
                                <tr className="even:bg-gray-400 *:text-center *:p-2.5" key={f.id}>
                                    <td>{f.nome}</td>
                                    <td>{f.cargo}</td>
                                    <td>{f.setor}</td>
                                    <td>{f.turno}</td>
                                    <td>R${f.salario.toFixed(2)}</td>
                                    <td>
                                        <Link className="m-1 bg-blue-600 text-white px-2 pb-1 rounded-md hover:font-bold text-sm sm:text-base"
                                        to={`/funcionario/${f.id}`}>Editar</Link>
                                        <button onClick={() => handleDelete(f.id)} className="m-1 bg-red-600 text-white px-2 pb-0.75 rounded-md hover:font-bold text-sm sm:text-base">
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr className="*:p-2.5 bg-gray-700 text-center text-white">
                            <td colSpan={6}>Funcionários cadastrados encontrados!</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
