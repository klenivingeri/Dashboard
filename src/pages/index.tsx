import { Flex, Button, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

import { Input } from '../components/Form/Input'
import { Heads } from '../components/Heads'

export default function SignIn() {
  return (
    <div>
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
         >
          <Stack spacing="4">
          <Input name="email" type="email" label="E-mail"/>
          <Input name="password" type="password" label="Password"/>
          </Stack>

          <Link href="/dashboard" passHref>
          <Button as="a" type="submit" mt={6} colorScheme="pink" size="lg">Entrar</Button>
          </Link>         
         </Flex>
      </Flex>
    </div>
  )
}
