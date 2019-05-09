import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('rui-layout');

const Header: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <header className={sc('header', {extra: className})} {...rest}>
      {props.children}
    </header>
  )
};

export default Header;