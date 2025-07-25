import { MdOutlineCancel } from "react-icons/md";

const AddToCart = ({gadget}) => {

    const {product_image, product_title, price, description} = gadget

    return (
        <div className="flex flex-col md:flex-row gap-4 my-4 p-4 bg-white rounded-2xl">

            <div className="md:w-2/9 flex justify-center items-center">
            <div className="w-full h-20">
                <img className="h-full object-contain mx-auto" src={product_image} alt="" />
            </div>
            </div>

            <div className="md:w-6/9">
                <h1 className="text-lg font-semibold">{product_title}</h1>
                <h2 className="py-2 text-gray-600">{description}</h2>
                <h4 className="font-semibold">Price: ${price}</h4>
            </div>

            <div className="md:w-1/9 text-3xl  text-red-400">
                <MdOutlineCancel></MdOutlineCancel>
            </div>
        </div>
    );
};

export default AddToCart;