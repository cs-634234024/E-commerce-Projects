import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext";
import { ProductContext } from "./productContext/productContextProvider";
import { CartContext } from "./cartContext/CartContextProvider";

export {default as AuthContextProvider} from "./authContext/AuthContext"
export {default as ProductContextProvider} from "./productContext/productContextProvider"
export {default as CartContextProvider} from './cartContext/CartContextProvider'


export const useAuthContext = () => useContext(AuthContext) 
export const useProductContext = () => useContext(ProductContext) 
export const useCartContext = () => useContext(CartContext) 