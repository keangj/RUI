import * as React from "react";
import {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
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
        {
          props.buttons && props.buttons.length > 0 &&
          <footer className={lc('footer')}>
            {
              props.buttons && props.buttons.map((button, index) => {
                return React.cloneElement(button, { key: index })
              })
            }
          </footer>
        }
      </div>
    </Fragment> :
    null;
  return ReactDOM.createPortal(dialog, document.body);
};

// 添加 clickCloseMask 默认值
Dialog.defaultProps = { clickCloseMask: false };

const alert = (content: string) => {
  const component = (
    <Dialog
      onClose={() => {
        // 设置 visible 为 false
        ReactDOM.render(React.cloneElement(component, { visible: false }), container);
        // 删除 container 元素
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
      }}
      visible={ true }>
      { content }
    </Dialog>
  );
  const container = document.createElement('div');
  document.body.append(container);
  ReactDOM.render(component, container);
};

const confirm = (content: string, confirm?: () => void, cancel?: () => void) => {
  const onConfirm = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), container);
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    confirm && confirm()
  };
  const onCancel = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), container);
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    cancel && cancel()
  };
  const component = (
    <Dialog
      onClose={() => {
        // 设置 visible 为 false
        ReactDOM.render(React.cloneElement(component, { visible: false }), container);
        // 删除 container 元素
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
      }}
      buttons={[
        <button onClick={ onConfirm }>yes</button>,
        <button onClick={ onCancel }>no</button>
      ]}
      visible={ true }>
      { content }
    </Dialog>
  );
  const container = document.createElement('div');
  document.body.append(container);
  ReactDOM.render(component, container);
};

const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    // 设置 visible 为 false
    ReactDOM.render(React.cloneElement(component, { visible: false }), container);
    // 删除 container 元素
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };
  const component = (
    <Dialog
      onClose={ onClose }
      visible={ true }>
      { content }
    </Dialog>
  );
  const container = document.createElement('div');
  document.body.append(container);
  ReactDOM.render(component, container);
  return onClose;
};

export { alert, confirm, modal };
export default Dialog;