import React, { useState } from "react";
import SliderCalculator from "./components/SliderCalculator/SliderCalculator";
import CalculatorCard from "./components/CalculatorCard/CalculatorCard";
import s from "./PriceCalculator.module.scss";

const PriceCalculator = () => {
  const [value, setValue] = useState(20);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const min = 15;
  const max = 45;

  function valuetext(value) {
    return `$${value}`;
  }

  return (
    <section className={s.priceCalculator}>
      <div className={"container"}>
        <h3 className={s.title}>Price calculator</h3>
        <p className={s.description}>
          Developer hourly rate varies from <span>${min}/hr</span> to{" "}
          <span>${max}/hr</span>. Play with the price calculator to see how your
          monthly bill can look like:
        </p>

        <div className={s.calculatorContainer}>
          <div className={s.slider}>
            <h6 className={s.sliderTitle}>Developer hourly rate</h6>
            <SliderCalculator
              value={value}
              handleSliderChange={handleSliderChange}
              valuetext={valuetext}
              min={min}
              max={max}
            />
            <div className={s.slederPoints}>
              <span className={s.point}>${min}</span>
              <span className={s.point}>${max}</span>
            </div>
          </div>

          <div className={s.CalculatorCards}>
            <div className={s.cardWrap}>
              <CalculatorCard type="full" value={value} />
            </div>

            <div className={s.cardWrap}>
              <CalculatorCard type="part" value={value} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
