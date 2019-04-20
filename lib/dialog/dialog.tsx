import * as React from "react";
import { Fragment } from 'react';
import './dialog.scss'

interface Props {
  visible: boolean
}

function f (pre: string) {
  return function (name?: string) {
    return [pre, name].filter(Boolean).join('-');
  }
}

const localClass = f('rui-dialog');
const lc = localClass;

const Dialog: React.FunctionComponent<Props> = (props) => {

  return (
    <div>
      {props.visible ?
        <Fragment>
          <div className={ lc('mask') }/>
          <div className={ lc() }>
            <header className={lc('header')}>标题</header>
            <main className={lc('main')}>
              { props.children }
            </main>
            <footer className={lc('footer')}>
              <button>确认</button>
              <button>取消</button>
            </footer>
          </div>
        </Fragment> :
        null}
    </div>
  )
};

export default Dialog;