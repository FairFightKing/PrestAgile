import Header from "./header";
import Footer from "./footer";
import {Component} from "react";

function Layout({children}: any) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;