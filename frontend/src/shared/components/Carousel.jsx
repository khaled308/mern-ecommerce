/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Carousel = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [slides.length]);

  return (
    slides.length > 0 && (
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === activeSlide ? "opacity-100" : "hidden opacity-0"
              }`}
              data-carousel-item={index}
            >
              <img
                src={slide.img}
                className="absolute inset-0 object-cover w-full h-full "
                alt={slide.alt}
                crossOrigin="anonymous"
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeSlide ? "bg-black" : "bg-black/50"
              } focus:outline-none`}
              data-carousel-item-to={index}
              data-carousel-item-to-active={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-1/2 left-4 z-30 flex items-center justify-center h-10 w-10 text-white bg-black bg-opacity-30 rounded-full transform -translate-y-1/2 focus:outline-none"
          data-carousel-prev
          onClick={() =>
            setActiveSlide((prevSlide) =>
              prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            )
          }
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-4 z-30 flex items-center justify-center h-10 w-10 text-white bg-black bg-opacity-30 rounded-full transform -translate-y-1/2 focus:outline-none"
          data-carousel-next
          onClick={() =>
            setActiveSlide((prevSlide) =>
              prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            )
          }
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    )
  );
};

// default props
Carousel.defaultProps = {
  slides: [],
};

export default Carousel;
