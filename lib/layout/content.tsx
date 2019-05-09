import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('rui-layout');

const Content: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <main className={sc('content', {extra: className})} {...rest}>
      {props.children}
    </main>
  )
};

export default Content;