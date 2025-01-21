
export function Form() {
    return (
        <form className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nome completo*</label>
                <input type="text" className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"  />

                <label className="block text-gray-700 text-sm font-bold mb-2">Nome completo*</label>
                <input type="text" className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <label className="block text-gray-700 text-sm font-bold mb-2">E-mail*</label>
                <input type="text" className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <label className="block text-gray-700 text-sm font-bold mb-2">Telefone*</label>
                <input type="text" className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"  />

                <label className="block text-gray-700 text-sm font-bold mb-2">Nome completo*</label>
                <input type="text"  className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <label className="block text-gray-700 text-sm font-bold mb-2">Cargo pretendido*</label>
                <select name="" id="" className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" >
                    <option value="">Desenvolvedor Frontend</option>
                    <option value="">Desenvolvedor Backend</option>
                    <option value="">Desenvolvedor Full Stack</option>
                    <option value="">Desenvolvedor Mobile</option>
                    <option value="">Desenvolvedor de Software</option>
                    <option value="">Engenheiro de Software</option>
                    <option value="">Arquiteto de Software</option>
                    <option value="">UI/UX Designer</option>
                    <option value="">Analista de Sistemas</option>
                    <option value="">DevOps Engineer</option>
                    <option value="">Engenheiro de Dados</option>
                    <option value="">QA Engineer</option>
                    <option value="">Analista Programador</option>
                    <option value="">Scrum Master</option>
                    <option value="">Product Owner</option>
                </select>
                
                <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn</label>
                <input type="text"  className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <label className="block text-gray-700 text-sm font-bold mb-2">GitHub</label>
                <input type="text" className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
            </div>
        </form>

    )
}
