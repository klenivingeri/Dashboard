import { Flex, IconButton, Icon, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header(){
    const { onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({ // controla visão mobile
        base:false,
        lg:true,
    })

    return(
        <Flex 
            as="header" 
            w="100%"
            maxWidth={1400}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            alignItems="center"
        >
            { !isWideVersion && (
                <IconButton
                 aria-label="Open Navigation"
                 icon={<Icon as={RiMenuLine} />}
                 fontSize="24"
                 variant="unstyled"
                 onClick={onOpen}
                 mr="2"
                >

                </IconButton>
            )

            }


            <Logo />
             <SearchBox /> 

            <Flex alignItems="center" ml="auto">
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>

        </Flex>
    )
}