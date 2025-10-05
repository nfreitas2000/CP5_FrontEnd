import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

type TypeFuncionarioAtualizar = {
    nome: string,
    cargo: string,
    setor: string,
    turno: string,
    salario: string
}


export default function EditarFuncionario(){

    const {id} = useParams()

    const navegacao = useNavigate()

    const [funcionarioAtualizar, setfuncionarioAtualizar] = useState<TypeFuncionarioAtualizar>(
        {nome:"", cargo:"", setor:"", turno:"" , salario: ""}
    )

    let metodo:string = "POST"

    if (id) metodo = "PUT"

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setfuncionarioAtualizar({...funcionarioAtualizar, [name]:value})
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault()
        const funcionario = {...funcionarioAtualizar, nome:(funcionarioAtualizar.nome), cargo:(funcionarioAtualizar.cargo), setor:(funcionarioAtualizar.setor), turno:(funcionarioAtualizar.turno) ,salario:Number(funcionarioAtualizar.salario),}

        fetch(`http://localhost:5000/funcionario/${(id ? id : "")}`, {
            method:metodo,
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify(funcionario)
        })
        .then(()=>navegacao("/"))
        .catch(error=>console.log(error))
    }

    useEffect(()=>{
        if (id){
            fetch (`http://localhost:5000/funcionario/${id}`)
            .then(resp => resp.json())
            .then(data=>setfuncionarioAtualizar(data))
            .catch(error => console.log(error))
        }
    }, [id])

    return(
        <div className="max-w-2xl m-auto my-7">
            <h1 className="text-blue-800 text-5xl text-center font-bold mb-8">Formulário Produtos</h1>

            <form className="border-2 border-gray-400 p-4 rounded-md" onSubmit={handleSubmit}>
                <input className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" type="text" name="nome" value={funcionarioAtualizar?.nome} placeholder="Nome" onChange={handleChange}/><br />
                <input className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" type="text" name="cargo" value={funcionarioAtualizar?.cargo} placeholder="Cargo" onChange={handleChange}/><br />
                <input className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" type="text" name="setor" value={funcionarioAtualizar?.setor} placeholder="Setor" onChange={handleChange}/><br />
                <input className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" type="text" name="turno" value={funcionarioAtualizar?.turno} placeholder="Turno" onChange={handleChange}/><br />
                <input className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" type="number" name="salario" value={funcionarioAtualizar?.salario} placeholder="Salário" onChange={handleChange}/><br />
                <div className="flex flex-col">
                    <button className="bg-green-400 rounded-4xl text-white font-bold py-2 px-4 m-2" type="submit">Enviar</button>
                    <Link className="bg-red-500 rounded-4xl text-white font-bold py-2 px-4 m-2 text-center" to={"/"}>Cancelar</Link>
                </div>
                
            </form>
        </div>
    )
}