import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('rui-layout');

const Sider: React.FunctionComponent = () => {
  return (
    <aside className={sc('sider')}>
      sider
    </aside>
  )
};

export default Sider;