import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('rui-layout');

const Header: React.FunctionComponent = () => {
  return (
    <header className={sc('header')}>
      header
    </header>
  )
};

export default Header;