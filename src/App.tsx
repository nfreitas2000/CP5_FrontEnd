import Rodape from "../src/Rodape"
import { Outlet } from "react-router-dom";
import Cabecalho from "../src/Cabecalho"

export default function App(){

  return(
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}