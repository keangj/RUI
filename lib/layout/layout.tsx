import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";
import './layout.scss'

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('rui-layout');

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <section className={sc('', {extra: className})} {...rest}>
      {props.children}
    </section>
  )
};

export default Layout;