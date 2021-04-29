import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Heads } from "../../components/Heads";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";

// stale while revalidate

import { useQuery } from 'react-query' // configurar providers no arquivo app

interface User  {
    id: string;
    name: string;
    email: string;
    createdAt: string;

}

export default function UserList(){

    const {data, isLoading, isFetching, error, refetch } = useQuery('users', async ()=> {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()

        /** Trata os dados antes de devolver para query, coonseguimos acessar dentro de {data } useQuery */
        const users = data.users.map((user: User)=>{ 
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

    },{ /** fresh - Controla o time que a query buscas os dados na API */
        staleTime: 1000 * 5 //5 seconds
    }
    
    )

    

   const isWideVersion = useBreakpointValue({
       base: false,
       lg: true,
   })




    return(
        <>
        <Heads title="Lista de Usuários"/>
        <Box>
            <Header />
            <Flex w={["501px","100%"]} my="6" maxWidth="1400" mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justifyContent="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
                            </Heading>

                        <Link href="/users/create" passHref>
                        <Button
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="pink" 
                            leftIcon={<Icon as={RiAddLine} 
                            fontSize="20"/>}  
                        >
                            Criar novo
                        </Button>
                        </Link>
                    </Flex>
                    { isLoading ? (
                        <Flex  justifyContent="center">
                            <Spinner/>
                        </Flex>
                    ) : error ? (
                        <Flex justifyContent="center">
                            <Text>Falha ao obter dados do usuário</Text>
                        </Flex>
                    ):(
                    <>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.600" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                           
                            { data.map( (user: User)=>{
                                return (
                                    <Tr key={user.id}>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">{user.name}</Text>
                                        <Text fontSize="sm" color="gray.300">{ user.email}</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td> {user.createdAt}</Td> } 
                                <Td>
                                {isWideVersion &&    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="sm" 
                                        colorScheme="purple"   
                                        leftIcon={<Icon as={RiPencilFill} fontSize="16" />}
                                    >
                                        Editar
                                    </Button> }

                                </Td>

                            </Tr>
                                )
                            })

                            }
                            
                        </Tbody>
                    </Table>
                    <Pagination />
                    </>
                    )}
                    
                </Box>
            </Flex>
        </Box>
        </>
    )
}


/** trocamos de
    useEffect(() =>{
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => console.log(data))
   }) 
 para query


 */