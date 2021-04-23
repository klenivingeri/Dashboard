import { Button } from '@chakra-ui/react'

interface PaginationItemProps{
    isCurrent?: boolean;
    number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps){

    if(isCurrent){
    return(
        <Button
            size="sm"
            fontSize="x5"
            Width="4"
            colorScheme="pink"
            disabled
            _disabled={{
                bgColor: 'pink.500',
                cursor: 'default',

                }}
            >
                {number}
            </Button>
    )}

    return (
        <Button
            size="sm"
            fontSize="x5"
            Width="4"
            colorScheme="gray.700"
            _hover={{
                bgColor: 'gray.500'
            }}
        >
            {number}
        </Button>
    )
}