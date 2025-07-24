import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

    const GadgetCards = () => {

        const {category} = useParams();
        const data = useLoaderData();
        const location = useLocation();

        const [gadgets, setGadgets] = useState([]);


        useEffect(() => {
            if(category){
                const filteredByCategory = [...data].filter( gadget => gadget.category === category)
                setGadgets(filteredByCategory)
            }
            else if (location.pathname === "/category") {
                setGadgets(data)
            }
            else {
                setGadgets(data.slice(0, 6))
            }
            
        },[category, data, location.pathname])
        
        
        return (
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gadgets.map(gadget => (
                        <Card key={gadget.product_id} gadget={gadget}></Card>
                    ))
                }
            </div>
            </>
            
        );
    };
    
    export default GadgetCards;