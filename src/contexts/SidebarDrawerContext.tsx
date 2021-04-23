import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useRouter } from 'next/router';

interface SidebarDrawerProviverProps{
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn // ele vai aceitar tudo que o UseDisclosureReturn retornar
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData );


export function SidebarDrawerProvider({ children }:SidebarDrawerProviverProps){
    const disclosure = useDisclosure()
    const router = useRouter()
    
    useEffect(()=>{
        disclosure.onClose();
    },[router.asPath])

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)