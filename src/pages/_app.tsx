import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

if(process.env.NODE_ENV == 'development') {//1
  makeServer(); //2
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp

/**
 Depois de configurado o servidor do miragejs services/mirage/index

 1 - Verifique se estamos em um ambiente de desemvolvimento NODE_ENV é uma
 variavel setada automaticamente pelo next;

 2 - Chama o servidor

 */