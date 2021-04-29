import { useQuery } from "react-query";
import { api } from "../api";

/** Hooks são pedaços de codigos que podem complementar varios components */

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string
}
/** funções async sempre retornam promise */
export async function gerUsers(): Promise<User[]> {
    const { data } = await api.get('users')
    /** Trata os dados antes de devolver para query, coonseguimos acessar dentro de {data } useQuery */
    const users = data.users.map(user => { 
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            })
        };
    });

    return users;

}

export function useUsers() {

  return  useQuery('users', gerUsers,{
        staleTime: 1000 * 5 //5 seconds  
        /** fresh - Controla o time que a query buscas os dados na API */
    })

}