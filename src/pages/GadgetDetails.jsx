import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const GadgetDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();

    const[gadget, setGadget] = useState({});

    useEffect(() => {
        const singleData = data.find(gadget => gadget.product_id == id)
        setGadget(singleData)
    }, [data, id])


    const {product_title, product_image, price, description, Specification, availability, rating} = gadget;

    return (
        <div>
           detail {product_title}
        </div>
    );
};

export default GadgetDetails;