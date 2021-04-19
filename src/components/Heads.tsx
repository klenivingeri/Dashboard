import Head from "next/head";

interface titleProps{
    title:string
}

export function Heads({title}: titleProps){
    return(
        <Head>
            <title>DashGo | {title} </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}