import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react'

interface SidebarDrawerProviverProps{
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData );


export function SidebarDrawerProvider({ children }:SidebarDrawerProviverProps){
    const disclosure = useDisclosure()

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)