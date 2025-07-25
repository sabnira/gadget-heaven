import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAllCarts, getAllWishlist } from '../utils';
import AddToCart from '../components/AddToCart';
import { GiSettingsKnobs } from "react-icons/gi";
import WishList from '../components/WishList';


const Dashboard = () => {

    const data = useLoaderData();

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

                            <div className='flex flex-col md:flex-row pt-6 pb-2  items-center'>
                                <div className='md:w-4/6 px-4 font-bold'>
                                    <h2 className='text-xl'>Cart</h2>
                                </div>
                                <div className='md:w-2/6 flex gap-4 items-center'>
                                    <h2>Total cost: 999</h2>
                                    <button className='flex gap-2 items-center border-2 p-2 rounded-4xl text-[rgb(149,56,226)] border-[rgb(149,56,226)] font-semibold'>Sort By Price <GiSettingsKnobs></GiSettingsKnobs></button>

                                    <button className='px-4 py-2 rounded-4xl text-white bg-[rgb(149,56,226)]'>Purchase</button>
                                </div>
                            </div>

                            {
                                gadget.map(gadget => <AddToCart key={gadget.product_id} gadget={gadget}></AddToCart>)
                            }
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='w-full md:w-6xl mx-auto'>

                            <div className='px-4 pt-6 pb-2 font-bold'>
                                <h2 className='text-xl'>WishList</h2>
                            </div>


                            {
                                wishlist.map(wishlist => <WishList key={wishlist.product_id} wishlist={wishlist}></WishList>)
                            }
                        </div>
                        
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Dashboard;