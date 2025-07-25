import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAllCarts } from '../utils';
import Card from '../components/Card';
import AddToCart from '../components/AddToCart';


const Dashboard = () => {

    const data = useLoaderData();

    const [gadget, setGadget] = useState([])

    useEffect(() => {
        const allCarts = getAllCarts()

        const cartList = data.filter(cart => allCarts.includes(cart.product_id))

        setGadget(cartList)
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
                                <Tab className="border px-10 py-1 rounded-4xl focus:outline-none ![&.react-tabs__tab--selected]:rounded-4xl text-lg ">Cart</Tab>

                                <Tab className="border px-8 py-1 rounded-4xl focus:outline-none  text-lg ![&.react-tabs__tab--selected]:rounded-4xl">Wishlist</Tab>

                            </TabList>
                        </div>

                    </div>
                </div>


                <div className='bg-gray-100 pb-10'>
                <TabPanel>
                    <div className='w-full md:w-6xl mx-auto'>

                        <div className='flex'>
                            <div className=''>
                                <h2>Cart</h2>
                            </div>
                            <div className=''>
                                <h2>Total cost: </h2>
                                <button>Sort By Price</button>
                                <button>Purchase</button>
                            </div>
                        </div>

                        {
                            gadget.map(gadget => <AddToCart key={gadget.product_id} gadget={gadget}></AddToCart>)
                        }
                    </div>

                </TabPanel>

                <TabPanel>
                    <h2>Wishlist</h2>
                </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Dashboard;