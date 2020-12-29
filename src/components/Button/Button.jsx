import React from "react";
import s from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ReactComponent as Arrow } from "../../images/icons/arrow-right.svg";

const Button = ({
  type,
  children,
  styled,
  onClick,
  path,
  className,
  withIcon,
}) => {
  const classes = classNames(
    s.btn,
    {
      [s.primary]: styled === "primary",
      [s.secondary]: styled === "secondary",
      [s.outlinedDark]: styled === "outlined-dark",
      [s.outlinedLight]: styled === "outlined-light",
      [s.outlinedFilled]: styled === "outlined-filled",
      [s.filledBlue]: styled === "filled-blue",
      [s.outlinedDarkBold]: styled === "outlined-dark-bold",
    },
    className
  );
  return (
    <>
      {type === "button" && (
        <button className={classes} onClick={onClick}>
          {children}
        </button>
      )}
      {type === "nav-link" && (
        <Link to={path} className={classes}>
          {children}
          {withIcon && <Arrow />}
        </Link>
      )}
      {type === "link" && (
        <a
          href={path}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
          {withIcon && <Arrow />}
        </a>
      )}
    </>
  );
};

export default Button;
