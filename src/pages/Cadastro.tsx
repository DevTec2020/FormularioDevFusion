import { useEffect, useState } from "react";

import { Banner } from "../componentes/Banner";

import { z } from "zod"
import { useForm } from "react-hook-form" 
import { zodResolver } from "@hookform/resolvers/zod";

// Schema de validação do Zod
const FormSchema = z.object({ 
    nome: z.string() 
    .nonempty("O campo Nome é obrigatório") 
    .regex(/^[A-Za-z\s]+$/i, "Somente letras são permitidas"), 

    email: z.string() 
    .nonempty("O campo E-mail é obrigatório")
    .email("E-mail inválido"), 

    telefone: z.string() 
    .nonempty("O campo Telefone é obrigatório")
    .regex(/^\d+$/, "Somente números são permitidos"),

    cargo: z.string() 
    .nonempty("O campo Cargo é obrigatório"),
    
    linkedin: z.string()
    .optional(),
    
    github: z.string()
    .optional(),
}) 

//Tipagem do Form
type FormData = z.infer<typeof FormSchema>;

interface UserStorage {
    id: string
    nome: string
    email: string
    telefone: string
    cargo: string
    linkedin?: string
    github?: string
}
  
export function FormCadastro() {
    const [candidates, setCandidates] = useState<UserStorage[]>([]);

    // Usando o useForm com o FormSchema para validar 
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
            resolver: zodResolver(FormSchema),
    });

    // Carregar Candidatos salvos do localStorage
    useEffect(() => {
        const CandidatesSalvos = localStorage.getItem("candidates");
        if (CandidatesSalvos) {
            setCandidates(JSON.parse(CandidatesSalvos));
        }
    }, []);


    // Função para salvar favoritos no localStorage
    const saveLocalStorage = (updatedCandidates: UserStorage[]) => {
        setCandidates(updatedCandidates);
        localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
    };    
    
    
    const onSubmit = (data: FormData) => {
        const newCandidate: UserStorage = {
            //Gerando ID
            id: crypto.randomUUID(),
            ...data,
        };

        const updatedCandidates = [...candidates, newCandidate];
        saveLocalStorage(updatedCandidates);

        alert("Dados salvos com sucesso!");

        //Limpando Formulário
        reset();
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
            <Banner/>

            <div className="flex-1 flex flex-col items-center justify-center">     
                <form
                onSubmit={handleSubmit(onSubmit)} 
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
    
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Formulário de Cadastro
                    </h1>

                    {/* Campo Nome */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nome completo*</label>
                        <input type="text"
                        {...register("nome")}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
                    </div>

                    {/* Campo E-mail */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">E-mail*</label>
                        <input type="text" 
                        {...register("email")}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p> }
                    </div>

                    {/* Campo Telefone */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Telefone*</label>
                        <input type="text" 
                        {...register("telefone")}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p> }
                    </div>                    

                    {/* Campo Cargo */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Cargo pretendido*</label>
                        <select
                        {...register("cargo")} 
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" >
                            <option value="">Selecione um cargo</option>
                            <option value="Desenvolvedor Frontend">Desenvolvedor Frontend</option>
                            <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
                            <option value="Desenvolvedor Full Stack">Desenvolvedor Full Stack</option>
                            <option value="Desenvolvedor Mobile">Desenvolvedor Mobile</option>
                            <option value="Desenvolvedor de Software">Desenvolvedor de Software</option>
                            <option value="Engenheiro de Software">Engenheiro de Software</option>
                            <option value="Arquiteto de Software">Arquiteto de Software</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Analista de Sistemas">Analista de Sistemas</option>
                            <option value="Analista Programador">Analista Programador</option>
                            <option value="DevOps Engineer">DevOps Engineer</option>
                            <option value="Engenheiro de Dados">Engenheiro de Dados</option>
                            <option value="QA Engineer">QA Engineer</option>
                            <option value="Scrum Master">Scrum Master</option>
                            <option value="Product Owner">Product Owner</option>
                        </select>
                        {errors.cargo && <p className="text-red-500 text-sm">{errors.cargo.message}</p>}
                    </div>

                    {/* Campo LinkedIn */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn</label>
                        <input type="text" 
                        {...register("linkedin")}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin.message}</p> }
                    </div> 

                    {/* Campo GitHub */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">GitHub</label>
                        <input type="text" 
                        {...register("github")}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        {errors.github && <p className="text-red-500 text-sm">{errors.github.message}</p> }
                    </div> 

                    <div>
                        <button type="submit"
                        className="w-full py-2 bg-blue-600 rounded-lg text-center text-lg text-white font-semibold">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
