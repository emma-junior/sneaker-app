import React, {useState} from 'react'
import imageOne from '../images/image-product-1.jpg'
import imageTwo from '../images/image-product-2.jpg'
import imageThree from '../images/image-product-3.jpg'
import imageFour from '../images/image-product-4.jpg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const PictursDiv = () => {
    const images = [imageOne, imageTwo, imageThree, imageFour]
    const [currentImage, setCurrentImage] = useState(0)

    
  return (
      <div className="lg:w-1/2 relative ">
        {/* for mobile view */}
        <div className="lg:hidden w-76 block">
          <img
            className="lg:rounded-lg"
            src={images[currentImage]}
            alt="pic"
          />
        </div>
        <p
          onClick={() => {
            currentImage < images.length - 1 &&
              setCurrentImage(currentImage + 1);
          }}
          className="absolute top-32 left-[230px] lg:top-28 lg:left-56  md:top-72 md:left-[650px] block lg:hidden"
        >
          {/* <img className="w-[10px] md:w-7" src={next} alt="next" /> */}
          <h2 className='text-2xl text-white'><BsFillArrowRightCircleFill /></h2>
        </p>
        <p
          onClick={() => {
            currentImage > 0 && setCurrentImage(currentImage - 1);
          }}
          className="absolute top-32 left-3 rounded-full block md:top-72 md:left-7 lg:hidden"
        >
          {/* <img className="w-2 md:w-6" src={previous} alt="previous" /> */}
          <h2 className='text-2xl text-white'><BsFillArrowLeftCircleFill /></h2>
        </p>

        {/* for laptop view */}
        <div className="lg:w-64 hidden lg:block">
          <img
            className="lg:rounded-lg"
            src={images[currentImage]}
            alt="pic"
          />
        </div>
        <div className="lg:flex ml-2 mt-4 hidden ">
          {currentImage === 0 ? (
            <div className="bg-indigo-500 opacity-25 relative z-10 rounded-lg w-[50px] mr-4">
              <img
                className="w-[50px] mr-4 rounded-lg cursor-pointer "
                onClick={() => setCurrentImage(0)}
                src={imageOne}
                alt="imageOne"
              />
            </div>
          ) : (
            <img
              className="w-[50px] mr-4 rounded-lg cursor-pointer "
              onClick={() => setCurrentImage(0)}
              src={imageOne}
              alt="imageOne"
            />
          )}
          {currentImage === 1 ? (
            <div className="bg-indigo-500 opacity-25 relative z-10 rounded-lg w-[50px] mr-4">
              <img
                className="w-[50px] mr-4 rounded-lg cursor-pointer "
                onClick={() => setCurrentImage(1)}
                src={imageTwo}
                alt="imageTwo"
              />
            </div>
          ) : (
            <img
              className="w-[50px] mr-4 rounded-lg cursor-pointer "
              onClick={() => setCurrentImage(1)}
              src={imageTwo}
              alt="imageTwo"
            />
          )}
          {currentImage === 2 ? (
            <div className="bg-indigo-500 opacity-25 relative z-10 rounded-lg w-[50px] mr-4">
              <img
                className="w-[50px] mr-4 rounded-lg cursor-pointer "
                onClick={() => setCurrentImage(2)}
                src={imageThree}
                alt="imageThree"
              />
            </div>
          ) : (
            <img
              className="w-[50px] mr-4 rounded-lg cursor-pointer "
              onClick={() => setCurrentImage(2)}
              src={imageThree}
              alt="imageThree"
            />
          )}
          {currentImage === 3 ? (
            <div className="bg-indigo-500 opacity-25 relative z-10 rounded-lg w-[50px] mr-4">
              <img
                className="w-[50px] mr-4 rounded-lg cursor-pointer "
                onClick={() => setCurrentImage(3)}
                src={imageFour}
                alt="imageFour"
              />
            </div>
          ) : (
            <img
              className="w-[50px] mr-4 rounded-lg cursor-pointer "
              onClick={() => setCurrentImage(3)}
              src={imageFour}
              alt="imageFour"
            />
          )}
        </div>
      </div>
  );
}

export default PictursDiv