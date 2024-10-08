/* eslint-disable react/prop-types */
import "./carouselStyle.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ImagesCard from "./ImagesCard";
import { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const extendedImages = [images[images.length-1], ...images, images[0]];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      lastSlide();
    }, 3000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [current]);

  let prevSlide = () => {
   setCurrent((prev)=> (prev === 0 ? extendedImages.length -2 : prev - 1 ) )
    // if (current === 0) setCurrent(extendedImages.length - 2);
    // else setCurrent(current - 1);
  };
  let lastSlide = () => {

    setCurrent((prev)=> (prev === extendedImages.length -1 ? 1 : prev + 1 ) )
    // if (current === extendedImages.length - 1) {
    //   setCurrent(0);
    // }
    // else {setCurrent(current + 1)};
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: current === extendedImages.length -1 || current === extendedImages[1]  ? "none" : "transform 0.4s ease-out",
        }}
      >
        {extendedImages.map((data, index) => (
          <ImagesCard key={data.id || index} images={data} />
        ))}
      </div>
      <div className="shadow absolute top-0 h-full w-full flex justify-between items-center text-white px-5 text-3xl">
        <button
          onClick={prevSlide}
          className="bg-gray-800 bg-opacity-50 p-1 rounded-full hover:bg-opacity-70 transition "
        >
          {" "}
          <BsFillArrowLeftCircleFill />{" "}
        </button>
        <button
          onClick={lastSlide}
          className="bg-gray-800 bg-opacity-50 p-1 rounded-full hover:bg-opacity-70 transition "
        >
          {" "}
          <BsFillArrowRightCircleFill />{" "}
        </button>
      </div>
      <div className="absolute flex justify-center w-full gap-4 bottom-0 py-4">
        {extendedImages.map((item, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 rounded-full cursor-pointer h-2 ${
              i === current ? "bg-gray-800" : "bg-white"
            } `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
