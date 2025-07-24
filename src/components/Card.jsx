import { NavLink } from "react-router-dom";


const Card = ({ gadget }) => {

    const {product_id, product_image, product_title, price } = gadget || {};

    return (


        <div className="card bg-base-100">
            <figure className="w-full h-48 object-cover overflow-hidden px-10 pt-10 ">
                <img
                    src={product_image}
                    alt="Product"
                    className="h-full rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{product_title}</h2>
                <p className="text-lg pb-2">Price: {price}k</p>
                <div className="card-actions">

                    <NavLink
                    to={`/gadget/${product_id}`}
                    className="btn border-2 border-[rgb(149,56,226)] rounded-3xl text-[rgb(149,56,226)] text-lg hover:bg-[rgb(149,56,226)] hover:text-white"
                    >
                        View Details
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Card;