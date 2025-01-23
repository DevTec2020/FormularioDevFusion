import { UserPlus, SignOut, Database, UserCircle } from "phosphor-react"

import { Link } from "react-router-dom"

import Logo from "../../assets/logo.jpg"




export function SideBar() {
    return (
        <aside className="hidden group sm:flex flex-col justify-evenly px-2 fixed top-0 left-0 h-full w-24 shadow-2xl bg-blue-900 transition-all duration-300 ease-in-out text-white hover:w-64 ">
            <div className="flex flex-col items-center">
                <img 
                    src={Logo} 
                    alt="Frontend Fusion logo"
                    className="rounded-lg" />
            </div>

            <div className="flex flex-col items-center">
                <UserCircle size={99} />
                <p className="text-xl font-semibold">Usuário</p>
            </div>

            <div className="flex flex-col items-center mt-12 gap-5">
                <div className="flex justify-center items-center hover:text-orange-400 cursor-pointer gap-2">
                    <span>
                        <UserPlus size={32} />
                    </span>
                    
                    <span className="hidden group-hover:inline-block">
                        <Link to="/cadastro">Cadastro</Link>
                    </span>
                   
                </div>

                <div className="flex justify-center items-center hover:text-orange-400 cursor-pointer gap-2">
                    <span>
                        <Database size={32} />
                    </span>
                    
                    <span className="hidden group-hover:inline-block">
                      <Link to="/membros">Membros</Link>
                    </span>

                </div>

                <div className="flex justify-center items-center hover:text-orange-400 cursor-pointer gap-2">
                    <span>
                        <SignOut size={32} />
                    </span>
                    <span 
                    className="hidden group-hover:inline-block"
                    onClick={()=> {alert("Saindo...")}}>
                        Sair
                    </span>
                </div>
            </div>
        </aside>
    )
}