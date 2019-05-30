import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import classes from "../helpers/classes";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={ classes('rui-button', className)}
      { ...rest }
    >{ children }</button>
  )
};

export default Button;
