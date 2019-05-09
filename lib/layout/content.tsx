import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('rui-layout');

const Content: React.FunctionComponent = () => {
  return (
    <main className={sc('content')}>
      content
    </main>
  )
};

export default Content;