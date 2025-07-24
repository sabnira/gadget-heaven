import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";


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

            <Heading title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>

           detail {product_title}
        </div>
    );
};

export default GadgetDetails;