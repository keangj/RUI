import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('rui-layout');

const Sider: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <aside className={sc('sider', {extra: className})} {...rest}>
      {props.children}
    </aside>
  )
};

export default Sider;