import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header(){
    const isWideVersion = useBreakpointValue({ // controla visão mobile
        base:false,
        md:true,
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
            <Logo />
            { isWideVersion ?? <SearchBox /> }

            <Flex alignItems="center" ml="auto">
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>

        </Flex>
    )
}