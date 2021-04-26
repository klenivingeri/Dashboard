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
            type: 'datetime',
            axisBorder: {
                color: theme.colors.gray[600] // borda inferior
             },
             axisTicks: {
                color: theme.colors.pink[600] // Traços/pontos na borda inferior
             },
             categories:[
                 '2021-03-18T00:00:00.000Z',
                 '2021-03-19T00:00:00.000Z',
                 '2021-03-20T00:00:00.000Z',
                 '2021-03-21T00:00:00.000Z',
                 '2021-03-22T00:00:00.000Z',
                 '2021-03-23T00:00:00.000Z',
                 '2021-03-24T00:00:00.000Z',
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
                   
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}