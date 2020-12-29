import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CalculatorCard.module.scss";
import { ReactComponent as FullTime } from "../../../../images/icons/fullTime.svg";
import { ReactComponent as PartTime } from "../../../../images/icons/partTime.svg";
import { ReactComponent as Down } from "../../../../images/icons/chevronDown.svg";

const CalculatorCard = ({ type, value }) => {
  let fee, title, total, Icon;

  if (type === "full") {
    fee = 1000;
    title = "Full";
    Icon = FullTime;
    total = +value * 120 + fee;
  } else {
    fee = 600;
    title = "Part";
    Icon = PartTime;
    total = +value * 60 + fee;
  }

  const [openCounters, setOpenCounters] = useState(false);
  const handleOpen = () => {
    setOpenCounters(!openCounters);
  };

  const formatResult = (number) => {
    if (number < 1000) {
      return number;
    } else {
      return `${number.toString().substr(0, 1)},${number.toString().substr(1)}`;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.question}>?</div>

      <div className={styles.cardTitle}>
        <Icon className={styles.cardIcon} />
        <h6 className={styles.title}>{title} time</h6>
      </div>

      <div className={styles.total}>
        <span>Total</span>
        <span>$ {formatResult(total)}</span>
      </div>

      <div
        className={classNames(styles.devider, {
          [styles.visualDevider]: openCounters,
        })}
      />

      <div
        className={classNames(styles.counters, {
          [styles.visualCounters]: openCounters,
        })}
      >
        <div className={styles.price}>
          <p>Price</p>
          <span>$ {formatResult(total - fee)}</span>
        </div>

        <div className={styles.price}>
          <p>Coaching fee</p>
          <span>$ {formatResult(fee)}</span>
        </div>
      </div>

      <span className={classNames(styles.openCounters)} onClick={handleOpen}>
        <Down
          className={classNames(styles.shevron, {
            [styles.reverce]: openCounters,
          })}
        />
      </span>
    </div>
  );
};

CalculatorCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

CalculatorCard.defaultProps = {
  type: "full",
  value: 15,
};

export default CalculatorCard;
