import next from "next";
import { Children } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";



const Layout = ({children}:any)=>{


    return(
        
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    );

}

export default Layout