import React,{useState} from 'react'
import cartIcon from "../images/icon-cart.svg";

const ContentDiv = () => {
    const [counter, setCounter] = useState(0);
  return (
      <div className="lg:w-1/2 mt-5">
        <h2 className="text-orange-400 text-sm">SNEAKER COMPANY</h2>
        <h2 className="font-bold text-3xl my-5">
          Fall Limited Edition Sneakers
        </h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
        <div className="flex mt-2">
          <h2 className="mr-5 text-xl font-bold">$125.00</h2>
          <h2 className="text-xs text-orange-500 h-5 w-8 mt-1 bg-orange-200 rounded-md">
            <p className="font-bold pl-1">50%</p>
          </h2>
        </div>
        <h2 className="text-[#777] line-through mb-3">$250.00</h2>
        <div className="lg:flex block">
          <div className="flex bg-indigo-100 lg:w-28 lg:p-2 py-3 px-5 mb-3 rounded-md mr-3 w-full">
            <button
              onClick={() => {
                counter > 0 && setCounter(counter - 1);
              }}
              className="lg:mr-6 mr-24 ml-2 text-orange-500 font-bold md:ml-52 lg:ml-2 "
            >
              -
            </button>
            <h2 className="lg:mr-6 mr-24 font-bold">{counter}</h2>
            <button
              className="text-orange-500 font-bold"
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-orange-500 py-3 lg:pt-2 lg:px-12 text-white lg:h-10 rounded-lg w-full lg:w-52">
            <div className='flex ml-[85px] lg:ml-[1px]'>
              <img
                className="h-4 mr-3 text-white mt-1 "
                src={cartIcon}
                alt="cartIcon"
              />
              <p>Add to cart</p>
            </div>
          </button>
        </div>
      </div>
  );
}

export default ContentDiv