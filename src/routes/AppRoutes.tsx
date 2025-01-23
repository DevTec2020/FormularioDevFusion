import { BrowserRouter, Routes, Route } from "react-router-dom"

import {SideBar} from "../componentes/SideBar"
import {FormCadastro} from "../pages/Cadastro.tsx"
import {Home} from "../pages/Home.tsx"
import {Membros} from "../pages/Membros.tsx"




export function App() {
  return (
    <BrowserRouter>
      <SideBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<FormCadastro/>}/>
          <Route path="/membros" element={<Membros/>}/>
        </Routes>
   </BrowserRouter>
  )
}
