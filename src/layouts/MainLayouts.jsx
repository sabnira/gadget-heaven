import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';


const MainLayouts = () => {

    const location = useLocation();
   
    const isHomePage =
        location.pathname === "/" ||
        location.pathname === "/category" ||
        location.pathname.startsWith("/category/");


    return (
        <>
            <Toaster />
            <div className= {`mx-auto container ${isHomePage ? 'absolute top-8 left-1/2 -translate-x-1/2 text-white' : ''}`} >
                <Navbar></Navbar>
            </div>
            
             <div className="min-h-[calc(100vh-450px)]">
                <Outlet></Outlet> 
            </div>


            <div className="container mx-auto">
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayouts;