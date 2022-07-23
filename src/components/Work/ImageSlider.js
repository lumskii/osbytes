import React, { useState } from "react";
import { SliderData } from "./SliderData";
import CarouselIndicators from "./CarouselIndicators";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const switchIndex = (index) => {
    setCurrent(index);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
              {index === current && (
                <img src={slide.img} alt="travel pic" className="image" />
              )}
            <div className="title">{SliderData[index].title}</div>
            <p className="description">{SliderData[index].description}</p>
            <div className="caption">{SliderData[index].caption}</div>
            {/* <div className="shade"></div> */}
            {/* This is the left and right buttons placeholder */}
            <HiOutlineArrowNarrowLeft
              className="left-arrow"
              onClick={prevSlide}
            />
            <HiOutlineArrowNarrowRight
              className="right-arrow"
              onClick={nextSlide}
            />

            {/* This is the carousel indicator placeholder */}
            <CarouselIndicators
              slides={slides}
              currentIndex={current}
              switchIndex={switchIndex}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
