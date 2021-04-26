import { Input as ChakraInput, InputProps as ChakraInputProps, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError;
} 

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ( { name, label, error, ...rest }, ref ) => {
    
  return(
      <FormControl isInvalid={!!error}>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
        <ChakraInput 
          id={name}
          name={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size="lg"
          ref={ref}
          {...rest}
        />
        { !!error && (
          <FormErrorMessage fontSize="0.8rem">
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
}

export const Input = forwardRef(InputBase)

/**
 * Encaminhamento de constante usando ForwardRef(), 
 * de 
 * export function Input (){}
 * para const
 * export const Input = ()=>{}
 * de
 * para 
 * const InputBase: tirando a export direta do component e passa pra baixo
 * 
 * export const Input = forwardRef(InputBase)
 * 
 * dessa forma ele pega a ref que esta sendo passado e encaminha para o
 * componente InputBase
 * 
 * 
 * 
 * 
 * 
 * !! transforma a variavel em um valor boolean, caso exista algo ela é true se não é false
 */