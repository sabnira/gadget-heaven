import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayouts = () => {
    return (
        <>
       
            <div className="mx-auto container absolute top-8 left-1/2 -translate-x-1/2">
               
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