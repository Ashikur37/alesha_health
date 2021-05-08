import Head from 'next/head';
import Nav from "../Admin/global/nav/Nav";
import LeftSidebar from "../Doctor/global/nav/LeftSidebar";
const AdminLayout = (Page) => {
    return (
        <>
            <Head>
                <title>My styled page</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/styles/main.css"/>
                <link rel="stylesheet" href="/styles/admin.css"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <script src="https://cdn.jsdelivr.net/npm/peerjs@0.3.20/dist/peer.min.js"></script>
            </Head>
            <div id="wrapper" className="active">
                <div id="sidebar-wrapper">
                    <LeftSidebar />
                </div>

                <div id="page-content-wrapper">
                    <div className="page-content inset">
                        <Nav />
                        {Page.children}
                    </div>
                </div>

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
    )
};

export default AdminLayout;