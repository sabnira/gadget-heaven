import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div>

            <div role="tablist" className="tabs tabs-box flex flex-col bg-white">
                {
                categories.map(category => (
                    <NavLink
                    key={category.category}
                    to={`/category/${category.category}`}
                    role="tab" 
                    className="tab !rounded-full bg-gray-100 !text-gray-500 font-medium m-4 text-lg"
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