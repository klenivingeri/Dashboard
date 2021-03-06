import { Flex, Button, Stack,  } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'


import { Heads } from '../components/Heads'
import Link from 'next/link';

type SignInFormData={
  email:string;
  password:string;
}

const signInFormSchema  = yup.object().shape({
  email: yup.string().required('E-mail Obrigatorio!').email(),
  password: yup.string().required('Senha Obrigatoria!'),
})

export default function SignIn() {
  const { register, handleSubmit, formState:{errors, isSubmitting} } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  console.log(errors)
  const handleCreateUser: SubmitHandler<SignInFormData> =  async(value) =>{
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(value)
    return true;
    
  }


  return (
    <>
        <Heads title="Home"/>
      <Flex 
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
      >
         <Flex 
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={handleSubmit(handleCreateUser)}
         >
          <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail" 
            error={errors.email}
            {...register("email") /* ref*/}
            />
          <Input
            name="password" 
            type="password" 
            label="Password" 
            error={errors.password}
            {...register("password")/* ref*/}
            />
          </Stack>

          <Button  type="submit" mt={6} colorScheme="pink" size="lg" isLoading={isSubmitting}>Entrar</Button>

          <Link href="/dashboard">
          <Button

          bg="transparent"
          _hover={{
            bg: 'transparent',
          }}
          _active={{
            bg: 'transparent',
          }}

           as="a">Entrar Dashboard</Button>
          </Link>
         </Flex>
      </Flex>
    </>
  )
}


/**
 * O Evento SubmitHandler
  const home: SubmitHandler<SignInFormData> = (value, *event) =>{
    ele auxilia passar n??o somente o nosso data como os eventos do form
 * 
 */