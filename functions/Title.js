import Head from 'next/head';
const Title = (Page)=>{
    return (
        <Head>
            <title>{Page.children} | Medicall</title>
        </Head>
    )
};
export default Title;