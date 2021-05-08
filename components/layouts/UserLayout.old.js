import Nav from "../global/nav/Nav";
import Head from 'next/head';
import {useEffect} from "react";
const UserLayout = (Page) => {
    return (
        <>
            <Head>
                <title>Medicall</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/styles/main.css"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                {/*<link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"/>*/}
                <script src="https://cdn.jsdelivr.net/npm/peerjs@0.3.20/dist/peer.min.js"></script>

            </Head>
            <div>
                <Nav />
                {Page.children}

            </div>
            <style global jsx>{`
                h1 {
                  background: red;
                }
                @font-face {
                    font-family: 'CustomFont';
                    src: url('${process.env.URL}/static/font/kalpurush/Kalpurush.eot?#iefix') format('embedded-opentype'),  url('${process.env.URL}/static/font/kalpurush/Kalpurush.woff') format('woff'), url('${process.env.URL}/static/font/kalpurush/Kalpurush.ttf')  format('truetype'),
                    url('${process.env.URL}/static/font/kalpurush/Kalpurush.svg#Kalpurush') format('svg');
                    font-weight: normal;
                    font-style: normal;
                }
                body, .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6, p, a, span{
                    font-family: 'CustomFont';
                }
              `}
            </style>

        </>
    );
};

export default UserLayout;