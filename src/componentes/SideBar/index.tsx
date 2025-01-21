import { UserPlus, SignOut, Database } from "phosphor-react"



export function SideBar() {
    return (
        <aside className="group fixed top-0 left-0 h-full w-14 shadow-2xl bg-red-600 transition-all duration-300 ease-in-out hover:w-64 ">

            <div className="flex flex-col mt-12 text-white gap-5">
                <div className="flex justify-center items-center hover:bg-gray-800 cursor-pointer gap-2">
                    <span>
                        <UserPlus size={32} />
                    </span>
                    <span className="hidden group-hover:inline-block">Cadastrar</span>
                </div>

                <div className="flex justify-center items-center hover:bg-gray-800 cursor-pointer gap-2">
                    <span>
                        <Database size={32} />
                    </span>
                    <span className="hidden group-hover:inline-block">Base</span>
                </div>

                <div className="flex justify-center items-center hover:bg-gray-800 cursor-pointer gap-2">
                    <span>
                        <SignOut size={32} />
                    </span>
                    <span className="hidden group-hover:inline-block">Sair</span>
                </div>
            </div>
        </aside>
    )
}