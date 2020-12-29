import React from "react";
import HowCoachingWorks from "./HowCoachingWorks/HowCoachingWorks";
import PriceCalculator from "./PriceCalculator/PriceCalculator";
import ReasonablePricing from "./ReasonablePricing/ReasonablePricing";
import WorkingMode from "./WorkingMode/WorkingMode";


const PricingPage = () => {
  return (
    <>
      <ReasonablePricing/>
			<WorkingMode/>
			<HowCoachingWorks/>
			<PriceCalculator/>
    </>
  );
};

export default PricingPage;
