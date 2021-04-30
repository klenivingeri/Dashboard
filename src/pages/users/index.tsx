import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Heads } from "../../components/Heads";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";

// stale while revalidate

import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";



export default function UserList(){
    const [ page, setPage ] = useState(1)
    const {data, isLoading, isFetching, error, refetch } = useUsers(page)
    
console.log(page)
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
                           
                            { data.users.map( user => {
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
                    <Pagination
                    totalCounteOfRegisters={data.totalCount}
                    currentPage={5}
                    onPageChange={setPage}/>
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