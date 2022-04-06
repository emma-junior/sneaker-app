import React, {useState} from 'react'
import imageOne from '../images/image-product-1.jpg'
import imageTwo from '../images/image-product-2.jpg'
import imageThree from '../images/image-product-3.jpg'
import imageFour from '../images/image-product-4.jpg'
import cartIcon from "../images/icon-cart.svg";
import next from "../images/icon-next.svg"
import previous from "../images/icon-previous.svg"

const Content = () => {
    const images = [imageOne, imageTwo, imageThree, imageFour]
    const [currentImage, setCurrentImage] = useState(0)

    const [counter, setCounter] = useState(0)
  return (
    <div className="lg:p-10 p-1 lg:flex">
      <div className="lg:w-1/2 relative ">
        {/* for mobile view */}
        <div className="lg:hidden w-76 block">
          <img
            className="lg:rounded-lg"
            src={images[currentImage]}
            alt="image"
          />
        </div>
        <p
          onClick={() => {
            currentImage < images.length - 1 &&
              setCurrentImage(currentImage + 1);
          }}
          className="border-solid border-2 border-white absolute top-32 left-[270px] lg:top-28 lg:left-56  bg-white rounded-full p-1 px-[5px] block lg:hidden"
        >
          <img className="w-2" src={next} alt="next" />
        </p>
        <p
          onClick={() => {
            currentImage > 0 && setCurrentImage(currentImage - 1);
          }}
          className="border-solid border-2 border-white absolute top-32 left-3 bg-white rounded-full p-1 px-[5px] block lg:hidden"
        >
          <img className="w-2" src={previous} alt="previous" />
        </p>

        {/* for laptop view */}
        <div className="lg:w-64 w-76 hidden lg:block ">
          <img
            className="lg:rounded-lg"
            src={images[currentImage]}
            alt="image"
          />
        </div>
        <div className="lg:flex ml-2 mt-4 hidden ">
          <img
            className="w-[50px] mr-4 rounded-lg cursor-pointer"
            onClick={() => setCurrentImage(0)}
            src={imageOne}
            alt="imageOne"
          />
          <img
            className="w-[50px] mr-4 rounded-lg cursor-pointer"
            onClick={() => setCurrentImage(1)}
            src={imageTwo}
            alt="imageTwo"
          />
          <img
            className="w-[50px] mr-4 rounded-lg cursor-pointer"
            onClick={() => setCurrentImage(2)}
            src={imageThree}
            alt="imageThree"
          />
          <img
            className="w-[50px] rounded-lg cursor-pointer"
            onClick={() => setCurrentImage(3)}
            src={imageFour}
            alt="imageFour"
          />
        </div>
      </div>
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
          <p className="text-orange-500 bg-orange-200 p-1 rounded-md">50%</p>
        </div>
        <h2 className="text-[#777] line-through mb-3">$250.00</h2>
        <div className="lg:flex block">
          <div className="flex bg-indigo-100 lg:w-28 lg:p-2 py-3 px-7 mb-3 rounded-md mr-3">
            <button
              onClick={() => setCounter(counter - 1)}
              className="lg:mr-6 mr-24 ml-2 text-orange-500 font-bold "
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
          <button className="bg-orange-500 py-3 px-[92px] lg:pt-2 lg:px-12 text-white lg:h-10 rounded-lg flex">
            <img
              className="h-4 mr-3 text-white mt-1"
              src={cartIcon}
              alt="cartIcon"
            />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content