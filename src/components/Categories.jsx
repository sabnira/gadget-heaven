import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div>

            <div role="tablist" className="tabs tabs-box flex flex-col bg-white">

             

                <NavLink 
                to="/category"
                end
                className= {({isActive}) => `tab !rounded-full bg-gray-100 text-gray-500 font-medium m-4 text-lg hover:bg-[rgb(149,56,226)] hover:text-white ${isActive ? 'tab-active !bg-[rgb(149,56,226)] !text-white' : ''}`}>All Product</NavLink>

                {
                categories.map(category => (
                    <NavLink
                    key={category.category}
                    to={`/category/${category.category}`}
                    role="tab" 
                
                    className= {({isActive}) => `tab !rounded-full bg-gray-100 !text-gray-500 font-medium m-4 text-lg hover:bg-[rgb(149,56,226)] hover:!text-white ${isActive ? 'tab-active !bg-[rgb(149,56,226)] !text-white' : ''}`}

                    >
                        {category.category}
                    </NavLink>
                ))
                } 
            </div>

        </div>
    );
};

export default Categories;