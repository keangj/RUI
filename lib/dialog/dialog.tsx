import * as React from "react";
import {Fragment, ReactElement} from 'react';
import './dialog.scss'
import ReactDOM from 'react-dom';

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
  const dialog = props.visible ?
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
    null;
  return ReactDOM.createPortal(dialog, document.body);
};

// 添加 clickCloseMask 默认值
Dialog.defaultProps = { clickCloseMask: false };

const alert = (content: string) => {
  const component = <Dialog
    onClose={() => {
      // 设置 visible 为 false
      ReactDOM.render(React.cloneElement(component, { visible: false }), container);
      // 删除 container 元素
      ReactDOM.unmountComponentAtNode(container);
      container.remove();
    }}
    visible={ true }>
    content
  </Dialog>;
  const container = document.createElement('div');
  document.body.append(container);
  ReactDOM.render(component, container);
};

export { alert };
export default Dialog;