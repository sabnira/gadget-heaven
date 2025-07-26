import { NavLink } from "react-router-dom";
import banner from "../assets/banner.jpg"

const Banner = () => {
    return (
        <>
            <div className="p-2 border rounded-4xl border-gray-300">
                <div className="hero bg-[rgb(149,56,226)] rounded-3xl pt-20 pb-52">
                    <div className="hero-content text-center">
                        <div className="max-w-5xl text-white">
                            <h1 className="text-5xl md:text-6xl font-medium">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-8 max-w-2xl mx-auto">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <NavLink to="/dashboard" className="btn text-[rgb(149,56,226)] font-bold shadow-none px-6 py-6 rounded-4xl text-lg">Shop Now</NavLink>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-xs md:w-2xl lg:w-4xl md:h-[480px] relative -top-50  p-3 border rounded-2xl border-white bg-white/30 ">
                <img className="w-full h-full object-cover rounded-2xl" src={banner} alt="" />
            </div>
        </>

    );
};

export default Banner;