import React from "react";
import Button from "../Button/Button";
import TabletImage from "../../images/reasonable-pricing.jpg";
import s from "./ReasonablePricing.module.scss";

const ReasonablePricing = () => {
  return (
    <section className={s.reasonablePricing}>
      <div className="container">
        <h3 className={s.title}>Reasonable Pricing</h3>
        <p className={s.description}>
          We hire developers on the market, vet them for you and you pay their
          hourly rate plus our coaching fee. You can hire a developer either
          part time (80 hrs a month) or full time (160 hrs a month).
        </p>
        <Button
          className={s.link}
          type="nav-link"
          styled="outlined-dark-bold"
          path="/"
          withIcon
        >
          How we vet developers?
        </Button>
        <Button
          className={s.link}
          type="nav-link"
          styled="outlined-dark-bold"
          path="/"
          withIcon
        >
          Why would you need a coach?
        </Button>
        <img
          className={s.tabletImg}
          src={TabletImage}
          alt="Reasonable Pricing"
        />
      </div>
    </section>
  );
};

export default ReasonablePricing;
