import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";


const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <div className="static p-6">
                <Banner></Banner>
            </div>
                
            <h1 className="text-3xl font-bold text-center -mt-40 mb-15">Explore Cutting-Edge Gadgets</h1>

            <div className="container mx-auto flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6">
                        <Categories categories={categories}></Categories>
                </div>

                <div className="bg-blue-300 md:w-5/6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        card
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;