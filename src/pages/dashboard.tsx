import { Flex, flexbox } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Heads } from '../components/Heads'
import { Sidebar } from '../components/Sidebar'



export default function (){
    return(
        <Flex direction="column" h="100vh">
            <Heads title="Dashboard"/>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6" >
                <Sidebar/>
            </Flex>
        </Flex>
    )
}