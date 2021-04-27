import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';

import { Heads } from '../components/Heads';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'),{
    ssr: false // carrega apenas do lado do Browser, SSR desativado pra essa função
})



export default function (){
    const options = {
        chart:{
            toolbar:{
                show: false, //desativa o menu
            },
            zoom: {
                enabled: false, // tira o zoom padrão do grafico
            },
            foreColor: theme.colors.gray[500], // cor dos numeros nos angulor X e Y
        },
        grid:{
            show: false, // tira os grid's do fundo
        },
        dataLabels:{
            enabled:false, // remove as Labels/marcações dos dados
        },
        tooltip:{
            enabled: false, // remover o hover, mas é uma boa configurar
        },
        xaxis: {
            axisBorder: {
                color: theme.colors.gray[600] // borda inferior
             },
             axisTicks: {
                color: theme.colors.pink[600] // Traços/pontos na borda inferior
             },
             categories:[
                 '19 Mar',
                 '20 Mar',
                 '21 Mar',
                 '22 Mar',
                 '23 Mar',
                 '24 Mar',
                 '25 Mar',
             ],
        },
        
        fill: { // styles do grafico
            opacity: 0.3, // parte debaixo da linha do grafico
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7, // onde começa a opacidade
                opacityTo:  0.3, // onde termina aopacidade
            }
        }
    };
    const series = [
        {
            name: 'series1',
            data: [31, 120, 10, 28, 61, 18, 109]
        }
    ];

    return(
        <Flex direction="column" h="100vh">
            <Heads title="Dashboard"/>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6" >
                <Sidebar />
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"    
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160}/>
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"    
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160}/>

                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}