import React from "react";
import { Link } from "react-router-dom";
import { useCartContext, useProductContext } from "../../contexts";

const CardProduct = (props) => {
  const {tag} = useProductContext()
  const {addCart} = useCartContext()
  return (
    <div className="border border-gray-300 rounded-md w-[350px] h-[500px]">
        <figure className="bg-gray-100 flex items-center justify-center"><img className="" src={`./images/products/${props.image}.png`} alt="Shoes" width={200} /></figure>
        <div className="card-body">
    <h2 className="card-title mb-5">
      {props.title}
      <div style={{backgroundColor: tag.color}} className="badge text-white">{tag.title}</div>
    </h2>
    <div className="card-actions justify-start mb-7">
      <div className="badge badge-outline">{props.detail}</div> 
      <div className="badge badge-outline">{props.price} Bath</div> 
      <div className="badge badge-outline">Rating {props.rating}</div>
    </div>
    <div className="card-actions justify-center mt-5 font-bold">
    <div onClick={()=>{
      const data = {image: props.image , title : props.title , price : props.price , rating : props.rating}
      addCart({data})
    }}  className="btn btn-warning text-white hover:bg-yellow-500"> Add to Cart </div> 
    </div>
  </div>
    </div>
  );
};

export default CardProduct;
