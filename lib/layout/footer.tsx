import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('rui-layout');

const Footer: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <footer className={sc('footer', {extra: className})} {...rest}>
      {props.children}
    </footer>
  )
};

export default Footer;