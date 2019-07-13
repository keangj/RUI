import * as React from "react";
import classes from "../helpers/classes";
import './button.scss'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLElement> {

}

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={classes('rui-button-group', className)}
      { ...rest }
    >
      { props.children }
    </div>
  )
};

export default ButtonGroup;
