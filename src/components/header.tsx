import * as React from "react";
import Head from 'next/head'
import Navbar from "./navbar";

const Header = () => {
    return (
        <>
            <Head>
                <title>DBTR</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        </>
    )
}

export default Header;