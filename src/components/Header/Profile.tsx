import {Flex, Box, Text, Avatar } from '@chakra-ui/react'
export function Profile(){
    return(
        <Flex>
        <Box>
            <Text mr="4" textAlign="right">
                Erick Kleniving
            </Text>
            <Text mr="4" color="gray.700" fontSize="smal">
                klenivingeri@gmail.com
            </Text>
        </Box>
        <Avatar size="md" name="Erick Kleniving" src="https://github.com/klenivingeri.png"/>
    </Flex>
    )
}