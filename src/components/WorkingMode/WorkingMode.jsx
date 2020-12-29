import React from "react";
import s from "./WorkingMode.module.scss";
import FullTimeImage from "../../images/working-mode-full.jpg";
import PartTimeImage from "../../images/working-mode-part.jpg";
import Button from "../Button/Button";

const WorkingMode = () => {
  return (
    <div className={s.workingMode}>
      <div className="container">
        <h3 className={s.title}>Part time vs full time</h3>
        <p className={s.description}>
          Your startup has its pace and monthly budget and sometimes you either
          can’t afford to hire a full time developer or you feel like you could
          not keep up with a full time developer balancing your customer
          discovery activity and product development activity. In such a case a
          part time developer is the way to go.
        </p>
        <div className={s.wrap}>
          <div className={s.mode}>
            <div className={s.header}>
              <div className={s.content}>
                <h5>Full time</h5>
                <span className={s.price}>
                  <sup>$</sup>1,000 <sub>coaching fee</sub>
                </span>
              </div>
              <img src={FullTimeImage} alt="full time" />
            </div>
            <ul className={s.advantages}>
              <li>
                <span>160</span> hours
              </li>
              <li>
                <span>~12</span> user stories
              </li>
            </ul>

            <Button type="nav-link" path="/" className={s.btn} styled="primary">
              Browse developers
            </Button>
          </div>

          <div className={s.mode}>
            <div className={s.header}>
              <div className={s.content}>
                <h5>Part time</h5>
                <span className={s.price}>
                  <sup>$</sup>600 <sub>coaching fee</sub>
                </span>
              </div>
              <img src={PartTimeImage} alt="part time" />
            </div>
            <ul className={s.advantages}>
              <li>
                <span>80</span> hours
              </li>
              <li>
                <span>~5</span> user stories
              </li>
            </ul>

            <Button type="nav-link" path="/" className={s.btn} styled="primary">
              Browse developers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingMode;
