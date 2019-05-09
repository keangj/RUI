import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('rui-layout');

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={sc('footer')}>
      footer
    </footer>
  )
};

export default Footer;