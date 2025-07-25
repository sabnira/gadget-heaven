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
}



//remove a CART from local storage



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

    localStorage.setItem('carts', JSON.stringify(wishlists))
}

export {getAllCarts, addCart, getAllWishlist, addWishlist}