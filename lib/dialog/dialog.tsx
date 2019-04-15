import * as React from "react";

interface Props {
  visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.visible ?
        <div>dialog</div> :
        null}
    </div>
  )
};

export default Dialog;