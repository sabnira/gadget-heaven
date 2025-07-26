import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import ReactStarsRating from 'react-awesome-stars-rating';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addCart, addWishlist } from "../utils";

const GadgetDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [gadget, setGadget] = useState({});
 

    useEffect(() => {
        const singleData = data.find(gadget => gadget.product_id == id)
        setGadget(singleData)

    }, [data, id])


   
    const {product_id, product_title, product_image, price, description, Specification, availability, rating } = gadget;

    const handleGadget = id => {
        addCart(id)
    }

    const handleWishGadget = id => {
        addWishlist(id)
    }
   
    return (
        <div className="bg-gray-100">

            <div className="static">
                <div className="bg-[rgb(149,56,226)] text-center text-white pb-50">
                    <div className="w-full lg:w-2xl mx-auto">
                        <h1 className="text-2xl font-bold pt-4 pb-2">Product Details</h1>
                        <p className="font-thin">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
            </div>


            <div className="relative -top-40 w-full md:w-2xl lg:w-6xl mx-auto bg-white rounded-2xl">
                <div className="flex flex-col md:flex-row gap-5 py-6 rounded-2xl">
                    <div className="md:w-1/2 flex justify-center items-center">
                        <figure className="w-full h-64">
                            <img
                                className="h-full object-contain mx-auto"
                                src={product_image}
                                alt="product" />
                        </figure>
                    </div>

                    <div className="md:w-1/2">

                        <h2 className="text-xl font-bold">{product_title}</h2>
                        <h2 className="font-semibold text-lg py-2">Price: ${price}</h2>

                        <div
                            className={`badge badge-soft rounded-2xl my-2 ${availability ? 'badge-success border-green-700 text-green-700' : 'badge-error border-red-400'}`}
                        >
                            {availability ? 'In Stock' : 'Out of Stock'}
                        </div>

                        <h2 className="text-gray-600 py-2">{description}</h2>

                        <div>
                            <h1 className="font-bold py-2">Specification:</h1>
                            <ul className="pl-4 text-gray-600">
                                {
                                    Specification && Specification.map((details, idx) => (
                                        <li key={idx} className="list-decimal">{details}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="my-2">
                            <h2 className="font-bold mb-2">Rating:</h2>
                            <div className="flex gap-3">
                                <ReactStarsRating
                                    className="flex text-sm"
                                    value={rating}
                                    isEdit={false}
                                />
                                <div className="badge badge-lg bg-gray-200">{rating}</div>
                            </div>
                        </div>


                        <div className="flex mt-6 gap-3">

                            <button
                                onClick={() => handleGadget(product_id)}
                                className="btn rounded-4xl bg-[rgb(149,56,226)] text-white hover:bg-white hover:text-[rgb(149,56,226)] hover:border-[rgb(149,56,226)] text-lg">
                                Add To Card <IoCartOutline className="text-lg"></IoCartOutline>
                            </button>


                            <button onClick={() => handleWishGadget(product_id)} className="border px-3 rounded-full border-gray-500 hover:bg-[rgb(149,56,226)] hover:text-white text-lg"><FaRegHeart></FaRegHeart></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;