import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PaginaInicial from './routes/PaginaInicial/index.tsx'
import Funcionarios from './routes/Funcionarios/index.tsx'
import EditarFuncionario from './routes/Formulario/index.tsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'/', element:<PaginaInicial/>},
    {path:'/funcionarios', element:<Funcionarios/>},
    {path:'/funcionario/:id', element:<EditarFuncionario/>},
    {path:'/inserir-funcionario', element:<EditarFuncionario/>},
    
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
