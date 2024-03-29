import React, { useEffect, useState } from "react";
import { useCartContext } from "../../contexts";
import { AiOutlineDelete } from "react-icons/ai";
export const CardInCart = (props) => {
  const { removeCart, addQty } = useCartContext();
  const [qty, setQty] = useState(1);
  const id = props.id;
  console.log(id);

  useEffect(() => {
    addQty(id, qty);
  }, [qty]);

  return (
    <div className="border border-gray-300 rounded-md w-full my-1">
      <div className="grid grid-cols-4 ">
        <div className="col-span-1  bg-gray-200">
          <img
            className="flex mx-auto "
            src={`./images/products/${props.image}.png`}
            alt="Shoes"
            width={170}
          />
        </div>
        <div className="col-span-2 flex flex-col items-center p-5 font-bold ">
          <h1 className="mb-7 text-2xl">{props.title}</h1>
          <div className="flex ">
            <div className="card-actions justify-start mb-7 ">
              <div className="badge badge-outline text-lg p-2">
                {props.price} Bath
              </div>
              <div className="badge badge-outline text-lg  p-2">
                Rating {props.rating}
              </div>
            </div>
          </div>

          <div className="card-actions flex items-center justify-start mb-7 ">
            <button
              onClick={() =>
                setQty((prevent) => (prevent > 1 ? prevent - 1 : 1))
              }
              className="btn btn-circle mr-5"
            >
              -
            </button>
            <div>{props.qty}</div>
            <button
              onClick={() =>
                setQty((prevent) => (prevent > 0 ? prevent + 1 : 1))
              }
              className="btn btn-circle mx-5"
            >
              +
            </button>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button
            onClick={() => removeCart(id ?? 1)}
            className="btn btn-circle btn-error font-bold text-white m-5 text-2xl"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
