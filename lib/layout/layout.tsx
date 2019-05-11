import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";
import {ReactElement} from "react";
import './layout.scss'
import Sider from "./sider";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const sc = scopedClassMaker('rui-layout');

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;
  // const hasSider = children.some(item => item.type === Sider);
  const hasSider = children.reduce((result, item) => result || Sider === item.type, false);
  return (
    <section className={sc({'': true, hasSider}, {extra: className})} {...rest}>
      {props.children}
    </section>
  )
};

export default Layout;