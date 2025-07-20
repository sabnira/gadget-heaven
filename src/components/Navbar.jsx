import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";


const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        <NavLink to='/'>Home</NavLink>
                        <NavLink>Statistics</NavLink>
                        <NavLink to='/dashboard'>Dashboard</NavLink>

                    </ul>
                </div>
                <a className="text-xl font-bold text-white">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-gray-800 text-white">

                    <NavLink to='/'>Home</NavLink>
                    <NavLink>Statistics</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>

                </ul>
            </div>
            <div className="navbar-end gap-4 text-xl">
                <div className="border p-2 rounded-full border-gray-500 bg-white">
                    <NavLink to='/cart'><IoCartOutline></IoCartOutline></NavLink>
                </div>

                <div className="border p-2 rounded-full border-gray-500 bg-white">
                    <NavLink to='/wishlist'><MdFavoriteBorder></MdFavoriteBorder></NavLink>
                </div>
            </div>
        </div>
        </div>
        


    );
};

export default Navbar;