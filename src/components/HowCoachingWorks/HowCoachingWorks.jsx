import React from "react";
import s from "./HowCoachingWorks.module.scss";
import HowCoachingWorksImage1 from "../../images/how-coaching-works1.jpg";
import HowCoachingWorksImage2 from "../../images/how-coaching-works2.jpg";

const HowCoachingWorks = () => {
  return (
    <section className={s.howCoachingWorks}>
      <div className="container">
        <h3 className={s.title}>How Coaching Works</h3>
        <div className={s.wrap}>
          <img src={HowCoachingWorksImage1} alt="You & a coach" />
          <div className={s.content}>
            <h5 className={s.subtitle}>You & a coach</h5>
            <p className={s.text}>
              For the coaching fee you have a coach who will make sure you and
              the developer are successfully working together and educates you
              in the software development process. You would have regular
              sessions with a coach where you both would review the progress,
              planning, specification and communication with the developer.
            </p>
          </div>
        </div>

        <div className={s.wrap}>
          <div className={s.content}>
            <h5 className={s.subtitle}>A coach & developer</h5>
            <p className={s.text}>
              From the other side, the coach works with the developer to make
              sure the developer understands requirements, does his best for the
              project, and is not idle.
            </p>
          </div>
          <img src={HowCoachingWorksImage2} alt="Coach & developer" />
        </div>
        <p className={s.description}>
          The coaching fee is <span>$600</span> / month for a part time
          developer and <span>$1,000</span> / month for a full time developer.
        </p>
      </div>
    </section>
  );
};

export default HowCoachingWorks;
