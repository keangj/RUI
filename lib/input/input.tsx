import * as React from "react";
import './input.scss';
import { InputHTMLAttributes } from "react";
import classes from "../helpers/classes";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FunctionComponent<InputProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <input
      className={classes("rui-input", className)}
      { ...restProps }
    />
  )
};

export default Input;