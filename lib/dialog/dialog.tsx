import * as React from "react";
import {Fragment, ReactElement} from 'react';
import './dialog.scss'

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  clickCloseMask?: boolean;
}

function f (pre: string) {
  return function (name?: string) {
    return [pre, name].filter(Boolean).join('-');
  }
}

const localClass = f('rui-dialog');
const lc = localClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose:React.MouseEventHandler = (e) => {
    props.onClose(e)
  };
  const onClickMask:React.MouseEventHandler = (e) => {
    props.clickCloseMask && props.onClose(e)
  };
  return (
    <div>
      {props.visible ?
        <Fragment>
          <div
            className={ lc('mask') }
            onClick={ onClickMask }
          />
          <div className={ lc() }>
            <div
              className={ lc('close') }
              onClick={ onClickClose }
            >
              X
            </div>
            <header className={lc('header')}>标题</header>
            <main className={lc('main')}>
              { props.children }
            </main>
            <footer className={lc('footer')}>
              {
                props.buttons && props.buttons.map((button, index) => {
                  return React.cloneElement(button, { key: index })
                })
              }
            </footer>
          </div>
        </Fragment> :
        null}
    </div>
  )
};

export default Dialog;