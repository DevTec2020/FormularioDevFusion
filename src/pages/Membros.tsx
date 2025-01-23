import { useEffect, useState } from "react";

import { Banner } from "../componentes/Banner"

interface UserStorage {
    id: string
    nome: string
    email: string
    telefone: string
    cargo: string
    linkedin?: string
    github?: string
}

export function Membros() {
    const [candidates, setCandidates] = useState<UserStorage[]>([]);
    

    // Carregar Candidatos salvos do localStorage
    useEffect(() => {
        const CandidatesSalvos = localStorage.getItem("candidates");
        if (CandidatesSalvos) {
            setCandidates(JSON.parse(CandidatesSalvos));
        }
        console.log(candidates)
    }, []);



    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
          <Banner />
    
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
              <h1 className="text-2xl font-bold mb-4 text-center">
                Membros Cadastrados
              </h1>
    
              {candidates.length > 0 ? (
                <ul className="space-y-4">
                  {candidates.map((user) => (
                        <li key={user.id} className="p-4 bg-gray-100 rounded-md shadow-sm flex flex-col">
                        <strong className="text-blue-600">{user.nome}</strong>
                        <p>Email: {user.email}</p>
                        <p>Telefone: {user.telefone}</p>
                        <p>Cargo: {user.cargo}</p>
                        
                        {user.linkedin && (
                            <p>LinkedIn:{" "}
                            <a href={user.linkedin} target="_blank" className="text-blue-500 underline">
                                {user.linkedin}
                            </a>
                            </p>
                        )}

                        {user.github && (
                            <p>GitHub:{" "}
                            <a href={user.github} target="_blank" className="text-blue-500 underline">
                                {user.github}
                            </a>
                            </p>                        
                        )}
                        </li>
                    ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500">
                  Nenhum membro cadastrado.
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }
