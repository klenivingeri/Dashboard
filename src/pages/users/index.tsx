import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Heads } from "../../components/Heads";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
    return(
        <>
        <Heads title="Lista de Usuários"/>
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth="1400" mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justifyContent="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}  >
                            Criar novo
                        </Button>
                    </Flex>
                    
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.600" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Erick Kleniving</Text>
                                        <Text fontSize="sm" color="gray.300">Klenivingeri@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td> 21 de Abril, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="sm" 
                                        colorScheme="purple"   
                                        leftIcon={<Icon as={RiPencilFill} fontSize="16" />}
                                    >
                                        Editar
                                    </Button>

                                </Td>

                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Erick Kleniving</Text>
                                        <Text fontSize="sm" color="gray.300">Klenivingeri@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td> 21 de Abril, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="sm" 
                                        colorScheme="purple"   
                                        leftIcon={<Icon as={RiPencilFill} fontSize="16" />}
                                    >
                                        Editar
                                    </Button>

                                </Td>

                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Erick Kleniving</Text>
                                        <Text fontSize="sm" color="gray.300">Klenivingeri@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td> 21 de Abril, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="sm" 
                                        colorScheme="purple"   
                                        leftIcon={<Icon as={RiPencilFill} fontSize="16" />}
                                    >
                                        Editar
                                    </Button>

                                </Td>

                            </Tr>
                        </Tbody>
                    </Table>

                </Box>
            </Flex>
        </Box>
        </>
    )
}