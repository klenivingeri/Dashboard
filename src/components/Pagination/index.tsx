import { Box, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationsProps{
    totalCounteOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void
}

/** Quantas paginas quero mostrar ao lado da pagina foco */
const siblingsCount = 1;

function generatePageArray(from: number, to:number){
    return [...new Array(to - from)]
    .map((_, index)=>{
        return from + index + 1;

    }).filter(page => page > 0)
}


export function Pagination({ 
    totalCounteOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange
 }: PaginationsProps) {

    /** Numero de registros dividido / quantidade de pagina */
    const lastPage = Math.floor(totalCounteOfRegisters / registersPerPage);

    /** Quais vão ser as paginas que vão ser mostradas antes da pagina atual */
    const previousPages = currentPage > 1
        ?  generatePageArray(currentPage - 1 - siblingsCount, currentPage -1)
        :[]

        const nextPages = currentPage < lastPage
        ?  generatePageArray(currentPage, Math.min(currentPage +  siblingsCount, lastPage) )
        :[]


    return(
        <Stack
            direction={["column", "row"]}
            spacing="6"
            mt="8"
            justifyContent="space-between"
            alignItems="center"
        >

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack  direction="row" spacing="2">

                {currentPage > (1 + siblingsCount ) && (
                    <>
                     <PaginationItem  number={1} />
                     { currentPage > (2 + siblingsCount) && (
                     <Text color="gray.300" width="8" textAlign="center">...</Text>)}
                     </>
                )}

                {previousPages.length > 0 && previousPages.map(page =>{
                    return <PaginationItem key={page} number={page} />
                })}

               <PaginationItem number={currentPage} isCurrent/>
               
                {nextPages.length > 0 && nextPages.map(page =>{
                    return <PaginationItem key={page} number={page} />
                })}

                {(currentPage + siblingsCount ) < lastPage && (
                    <>
                    { (currentPage + 1 + siblingsCount) < lastPage && (
                    <Text color="gray.300" width="8" textAlign="center">...</Text>)}
                     <PaginationItem  number={lastPage} />
                     
                     </>
                )}


            </Stack>
       
        </Stack>
    )
}