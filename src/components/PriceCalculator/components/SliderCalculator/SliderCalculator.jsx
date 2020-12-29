import React from "react";
import Slider from "@material-ui/core/Slider";
import s from "./SliderCalculator.module.scss";

const SliderCalculator = ({
  value,
  handleSliderChange,
  valuetext,
  min,
  max,
}) => {
  return (
    <>
      <Slider
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="range-slider"
        valueLabelFormat={valuetext}
        min={min}
        max={max}
        valueLabelDisplay="on"
        classes={{
          root: s.newClass,
          rail: s.newRail,
          track: s.newTrack,
          thumb: s.newThumb,
          valueLabel: s.newLabel,
        }}
      />
    </>
  );
};

export default SliderCalculator;
