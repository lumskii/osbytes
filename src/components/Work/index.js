import React from 'react'
import { TopLineFour } from '../Experience/ExperienceElements';
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import "./WorkStyle.css";

const Work = () => {

  return (
    <div className="container" id="work">
      <TopLineFour>Things I've Done</TopLineFour>
      <ImageSlider slides={SliderData} />
    </div>
  )
}

export default Work