import { useParams } from "react-router-dom";

    const GadgetCards = () => {

        const {category} = useParams();
        

        return (
            <div>
                gadget cards {category}
            </div>
        );
    };
    
    export default GadgetCards;