import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Heads } from "../../components/Heads";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import Link from "next/link";

type  CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormDataSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatorio'),
    email: yup.string().required('E-mail inválido').email(),
    password: yup.string().required('Senha: obrigatoria'),
    password_confirmation: yup.string().oneOf([ 
        null, 
        yup.ref('password')],
        'As senhas precisam ser iguais'), // ref deixa validar com outro campo
})


export default function UserCreate(){
    
    const {register, handleSubmit, formState:{errors, isSubmitting} } = useForm({
        resolver: yupResolver(createUserFormDataSchema)
    })
    const home: SubmitHandler<CreateUserFormData> =  async(value) =>{
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(value)
        return true;
    }
    return(
        <>
            <Heads title="Lista de Usuários"/>
            <Box>
                <Header />
                <Flex w={["507px","100%"]} my="6" maxWidth={1400} mx="auto" px="6">
                    <Sidebar/>

                    <Box 
                    as="form"
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p={["6","8"]}
                    onSubmit={handleSubmit(home)}
                    >
                        <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                        <Divider my="6" borderColor="gray.700" />
                    
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input 
                            name="name" 
                            label="Nome Completo"
                            error={errors.name}
                            {...register("name")} />
                            <Input 
                            name="email" 
                            type="email" 
                            label="E-mail"
                            error={errors.email}
                            {...register("email")} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input 
                            name="password" 
                            label="Password"
                            type="password"
                            error={errors.password}
                            {...register('password')} />
                            <Input 
                            name="password_confirmation" 
                            type="password" 
                            label="Confirmar senha"
                            error={errors.password_confirmation}
                            {...register('password_confirmation')}
                             />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justifyContent="flex-end">
                        <HStack spacing="4">
                        <Link href="/users" passHref>
                            <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                            <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>

                    </Box>
                </Flex>
            </Box>
        </>
    )
}
