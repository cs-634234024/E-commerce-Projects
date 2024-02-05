import React from "react";
import { useCartContext } from "../contexts";
import { CardInCart } from "../components/card/CardInCart";

const Cart = () => {
  const { dataInCart } = useCartContext();
  return (
    <div className="container mx-auto grid grid-cols-3 gap-5 mt-2">
      <div className="col-span-2 rounded-md ">
        <div className="px-20 flex flex-col">
          <h1 className="font-bold text-3xl mb-2"> Cart </h1>
          <hr className="mb-3" />
          <div className="flex flex-col w-[100%]">
            {dataInCart.map((val, idx) => (
              <>
                <div key={idx}>
                  <CardInCart
                    id={val.id}
                    title={val.title}
                    image={val.image}
                    price={val.price}
                    rating={val.rating}
                    detail={val.detail}
                    qty={val.qty}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 border border-gray-300 rounded-md h-[500px] p-3">
        <h1 className="font-bold text-3xl mb-2"> Details </h1>
        <hr className="mb-3" />
        {dataInCart.map((val, idx) => (
          <>
            <div key={idx}>{val.price * val.qty}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Cart;
