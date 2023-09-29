import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext";
import { ProductContext } from "./productContext/productContextProvider";

export {default as AuthContextProvider} from "./authContext/AuthContext"
export {default as ProductContextProvider} from "./productContext/productContextProvider"


export const useAuthContext = () => useContext(AuthContext) 
export const useProductContext = () => useContext(ProductContext) 