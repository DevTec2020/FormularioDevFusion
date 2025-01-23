import Logo from "../assets/logo.jpg"


export function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img src={Logo} alt="Frontend Fusion logo" className="rounded-lg " />

            <div className="pt-7 w-full max-w-sm text-center">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Bem Vindo!</h1>
                <p className="text-gray-700">
                    Navegue através do menu lateral para cadastrar e visualizar os membros. 
                </p>
            </div>
        </div>
    );
}
