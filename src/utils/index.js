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



//remove a coffee from local storage
const removeCart = id => {
    //get all previously saved coffee data
    const favorites = getAllFavorites()
    const remaining = favorites.filter(coffee => coffee.id != id)

    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('Successfully Removed!');
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
}




export {getAllCarts, addCart, getAllWishlist, addWishlist}