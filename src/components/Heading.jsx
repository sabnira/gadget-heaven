

const Heading = ({title, subtitle}) => {
    return (
        <div className="bg-[rgb(149,56,226)] text-center text-white pb-50">
            <div className="w-2xl mx-auto">
                <h1 className="text-2xl font-bold pt-4 pb-2">{title}</h1>
                <p className="font-thin">{subtitle}</p>
            </div>
        </div>
    );
};

export default Heading;