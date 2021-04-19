import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title> DashGo | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          
          <FormControl>
            <FormLabel htmlForm="email">E-mail</FormLabel>
            <Input 
              id="email"
              name="email" 
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlForm="password">Password</FormLabel>
            <Input
              id="password"
              name="password" 
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>

          </Stack>
          <Button type="submit" mt={6} colorScheme="pink" size="lg">Entrar</Button>
         </Flex>
      </Flex>
    </div>
  )
}
