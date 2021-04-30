import { useQuery } from "react-query";
import { api } from "../api";

/** Hooks são pedaços de codigos que podem complementar varios components */

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string
}
type GetUsersResponse ={
    totalCount: number;
    users: User[];
}
/** funções async sempre retornam promise */
export async function gerUsers(page:number): Promise<GetUsersResponse> {
    const { data, headers } = await api.get('users',{
        params: {
            page,
        }
    })

    const totalCount  = Number(headers['x-total-count'])
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

    return {users,
        totalCount};

}

export function useUsers(page: number) {

  return  useQuery(['users',page], () => gerUsers(page),{
        staleTime: 1000 * 60 * 10, // 10 minute
        /** fresh - Controla o time que a query buscas os dados na API */
    })

}