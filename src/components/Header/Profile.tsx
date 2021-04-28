import {Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}
export function Profile({showProfileData = true }: ProfileProps){
    return(
    <Flex align="center" pr="5px">
            { showProfileData  && ( // controla visão mobile
        <Box mr="4" textAlign="right">
            <Text>Erick Kleniving</Text>
            <Text color="gray.700" fontSize="small">
                klenivingeri@gmail.com
            </Text>
        </Box>
        ) }
        <Avatar size="md"  name="Erick Kleniving" src="https://github.com/klenivingeri.png"/>
    </Flex>
    )
}