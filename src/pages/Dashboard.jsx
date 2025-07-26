import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addCart, getAllCarts, getAllWishlist, removeCart, removeWishlist } from '../utils';
import AddToCart from '../components/AddToCart';
import { GiSettingsKnobs } from "react-icons/gi";
import WishList from '../components/WishList';
import image from '../assets/Group.png'


const Dashboard = () => {

    const data = useLoaderData();
    const navigate = useNavigate();


    const [gadget, setGadget] = useState([])
    const [wishlist, setWishlist] = useState([]);


    useEffect(() => {
        const allCarts = getAllCarts()
        const cartList = data.filter(cart => allCarts.includes(cart.product_id))
        setGadget(cartList)

        const allWishlist = getAllWishlist()
        const wishList = data.filter(wish => allWishlist.includes(wish.product_id))
        setWishlist(wishList)

    }, [data])

    const handleRemove = (id) => {
        removeCart(id)
        const updatedCartIds = getAllCarts()
        const updatedCartList = data.filter(item => updatedCartIds.includes(item.product_id))
        setGadget(updatedCartList)
    }

    const handleRemoveWishlist = (id) => {
        removeWishlist(id)
        const updatedWishlistIds = getAllWishlist()
        const updatedWishlist = data.filter(item => updatedWishlistIds.includes(item.product_id))
        setWishlist(updatedWishlist)
    }


    const handleAddToCart = (id) => {
        addCart(id);
        const updatedCartIds = getAllCarts();
        const updatedCartList = data.filter(item => updatedCartIds.includes(item.product_id));
        setGadget(updatedCartList);
    };

    const totalCost = gadget.reduce((acc, item) => acc + Number(item.price), 0);

    const handleSort = () => {
        const sorted = [...gadget].sort((a, b) => b.price - a.price)
        setGadget(sorted)
    }

    const handlePurchase = () => {
        document.getElementById('my_modal_1').showModal();
    };



    return (
        <div>
            <Tabs>
                <div className="bg-[rgb(149,56,226)] text-center text-white py-8">
                    <div className="w-full lg:w-2xl mx-auto">
                        <h1 className="text-2xl font-bold  pb-2">Dashboard</h1>
                        <p className="font-thin pb-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                        <div className='border-none'>
                            <TabList className="flex gap-4  justify-center items-center">
                                <Tab className="border px-10 py-1 !rounded-4xl focus:outline-none ![&.react-tabs__tab--selected]:rounded-4xl text-lg ">Cart</Tab>

                                <Tab className="border px-8 py-1 !rounded-4xl focus:outline-none  text-lg ![&.react-tabs__tab--selected]:rounded-4xl">Wishlist</Tab>

                            </TabList>
                        </div>

                    </div>
                </div>


                <div className='bg-gray-100 pb-10'>
                    <TabPanel>
                        <div className='w-full md:w-6xl mx-auto'>

                            <div className='flex flex-col md:flex-row justify-between pt-6 pb-2  items-center'>
                                <div className='px-4 font-bold'>
                                    <h2 className='text-xl'>Cart</h2>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <h2 className='font-semibold'>Total cost: ${totalCost}</h2>

                                    <button onClick={() => handleSort('price')} className='flex gap-2 items-center border-2 p-2 rounded-4xl text-[rgb(149,56,226)] border-[rgb(149,56,226)] font-semibold'>Sort By Price <GiSettingsKnobs></GiSettingsKnobs></button>



                                    <button
                                        disabled={gadget.length === 0 || totalCost === 0}
                                        onClick={() => handlePurchase()}
                                        className={`px-4 py-2 rounded-4xl text-white ${gadget.length === 0 || totalCost === 0
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-[rgb(149,56,226)]'
                                            }`}
                                    >
                                        Purchase
                                    </button>


                                </div>
                            </div>

                            {

                                gadget.map((gadget, index) => (
                                    <AddToCart handleRemove={handleRemove} key={index} gadget={gadget} />
                                ))

                            }


                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='w-full md:w-6xl mx-auto'>

                            <div className='px-4 pt-6 pb-2 font-bold'>
                                <h2 className='text-xl'>WishList</h2>
                            </div>


                            {
                                wishlist.map(wishlist => <WishList handleAddToCart={handleAddToCart} handleRemoveWishlist={handleRemoveWishlist} key={wishlist.product_id} wishlist={wishlist}></WishList>)
                            }
                        </div>

                    </TabPanel>
                </div>
            </Tabs>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center">

                    <img className='mx-auto w-10 h-10' src={image} alt="" />
                    <h1 className='text-2xl font-bold py-4'>Payment Successfully</h1>
                    <p className="py-2 text-gray-600">Thanks for purchasing.</p>
                    <h2 className=' text-gray-600'>Total: ${totalCost}</h2>
                    <div className="modal-action justify-center ">
                        <form method="dialog">
                            <button
                                onClick={() => {
                                    localStorage.removeItem('carts');
                                    setGadget([]);
                                    navigate('/');
                                }}
                                className="md:px-20 btn bg-gray-300 rounded-full hover:bg-[rgb(120,40,180)] hover:text-white"
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default Dashboard;