import { createContext } from "react";
import { useState } from "react";
import { notify } from "../../utils/notify";


export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [dataInCart , setDataInCart] = useState([])

    const removeCart = () => {
        
    }

    const addCart = ({data}) => {
        setDataInCart([...dataInCart , {data}])
        notify("success" , "Add Product in Cart Success")
        console.log(dataInCart);
        window.scrollTo(0, 0)
    }
    const carttest ='carttest'
    return(<CartContext.Provider value={{carttest , dataInCart , addCart , removeCart}}>
        {children}
    </CartContext.Provider>)
}
export default CartContextProvider