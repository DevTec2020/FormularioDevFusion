import { useState } from "react";
import { UserPlus, SignOut, Database, UserCircle } from "phosphor-react"

import { Link } from "react-router-dom"

import Logo from "../../assets/logo.jpg"




export function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
        {/* aside para telas maiores desktop*/}
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


        {/* Manu Button para celular*/}
        <div className="sm:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-4 left-4 z-50 p-2 bg-blue-900 text-white rounded-md">
                    <div className="flex flex-col gap-1">
                        <span className="block w-6 h-1 bg-white"></span>
                        <span className="block w-6 h-1 bg-white"></span>
                        <span className="block w-6 h-1 bg-white"></span>
                    </div>
                </button>

                {/* Menu ativado no click */}
                {isOpen && (
                    <aside className="fixed top-0 left-0 h-full w-64 bg-blue-900 text-white shadow-lg z-40">
                        <div className="flex justify-center items-center p-4">
                            <img src={Logo} alt="Frontend Fusion logo" className="rounded-lg w-40" />
                        </div>
                        <div className="text-center mt-8">
                            <Link
                                to="/cadastro"
                                className="block py-2 px-4 hover:bg-blue-800 hover:text-orange-400"
                            >
                                <UserPlus size={24} className="inline-block mr-2" /> Cadastro
                            </Link>
                            <Link
                                to="/membros"
                                className="block py-2 px-4 hover:bg-blue-800 hover:text-orange-400"
                            >
                                <Database size={24} className="inline-block mr-2" /> Membros
                            </Link>
                            <button onClick={() => {alert("Saindo..."); setIsOpen(false);}}
                            className=" block py-2 px-4 hover:bg-blue-800 hover:text-orange-400 w-full">
                                <SignOut size={24} className="inline-block mr-2" /> 
                                Sair
                            </button>
                        </div>
                    </aside>
                )}
            </div>        
    </>    
    )
}