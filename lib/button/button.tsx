import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import classes from "../helpers/classes";
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'danger' | 'normal'
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, className, level, ...rest } = props;
  return (
    <button
      className={ classes('rui-button', `rui-button-${level}`, className)}
      { ...rest }
    >{ children }</button>
  )
};

Button.defaultProps = {
  level: 'normal'
};

export default Button;
