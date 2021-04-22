import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Heads } from "../../components/Heads";
import { Sidebar } from "../../components/Sidebar";

export default function UserCreate(){
    return(
        <>
            <Heads title="Lista de Usuários"/>
            <Box>
                <Header />
                <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                    <Sidebar/>

                    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                        <Heading size="lg" fontweight="normal">Criar usuário</Heading>
                        <Divider my="6" borderColor="gray.700" />
                    
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" label="password" />
                            <Input name="password_confirmation" type="password" label="Confirmar senha" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justifyContent="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>

                    </Box>
                </Flex>
            </Box>
        </>
    )
}