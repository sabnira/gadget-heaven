import toast from "react-hot-toast"


//get all CART from local storage
const getAllCarts = () => {

    const all = localStorage.getItem('carts')

    if(all){
        const carts = JSON.parse(all)
        return carts
    } else {
        return []
    }
}


//add a CART to local storage
const addCart = id => {

    const carts = getAllCarts();

    carts.push(id);

    localStorage.setItem('carts', JSON.stringify(carts))
    toast.success('Adding item to Cart!')
}



//remove a coffee from local storage
const removeCart = id => {
    //get all previously saved coffee data
    const carts = getAllCarts()
    const remaining = carts.filter(cartId => cartId != id)

    localStorage.setItem('carts', JSON.stringify(remaining))
    toast.error('Remove item from Cart!');
}


//get all wishlist from local storage
const getAllWishlist = () => {

    const all = localStorage.getItem('wishlists')

    if(all){
        const wishlists = JSON.parse(all)
        return wishlists
    } else {
        return []
    }
}


//add a wishlist to local storage
const addWishlist = id => {

    const wishlists = getAllWishlist();

    wishlists.push(id);

    localStorage.setItem('wishlists', JSON.stringify(wishlists))
    toast.success('Adding item to Wishlist!')
}

const removeWishlist = id => {
    const wishlists = getAllWishlist()
    const remaining = wishlists.filter(wishId => wishId !== id)
    localStorage.setItem('wishlists', JSON.stringify(remaining))
    toast.error('Removed item from Wishlist!');
}



export {getAllCarts, addCart, getAllWishlist, addWishlist, removeCart, removeWishlist}