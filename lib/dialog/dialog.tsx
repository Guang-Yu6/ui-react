import React, {cloneElement, Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import Icon from '../icon/icon';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  onMask?: boolean;
}

function x(name?: string) {
  return `mui-dialog${name ? '-' + name : ''}`;
}


const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.onMask) {
      props.onClose(e);
    }
  };

  const w = props.visible ?
    <Fragment>
      <div className={x('mask')} onClick={onClickMask}>
      </div>

      <div className={x()}>
        <div className={x('close')} onClick={onClickClose}>
          <Icon name='gb'/>
        </div>

        <header className={x('header')}>
          提示
        </header>

        <main className={x('main')}>
          {props.children}
        </main>

        <footer className={x('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index}))}
        </footer>
      </div>
    </Fragment>
    :
    null;
  return (
    ReactDOM.createPortal(w, document.body)
  );
};

Dialog.defaultProps = {
  onMask: false
};
// 动态生成
const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component =
    <Dialog
      visible={true}
      buttons={[<button onClick={onClose}>OK</button>]}
      onClose={onClose}>
      {content}
    </Dialog>;

  const div = document.createElement('div');  // 生成
  document.body.append(div);
  ReactDOM.render(component, div);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();  // 如果有yes就调用yes。
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };

  const component = (
    <Dialog visible={true}
            onClose={onNo}
            buttons={[
              <button onClick={onYes}>yes</button>,
              <button onClick={onNo}>no</button>
            ]}>
      {content}
    </Dialog>);
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

// 分割线----------------------------------------------

const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = <Dialog onClose={onClose} visible={true}>
    {content}
  </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return onClose;
};
export {alert, confirm, modal};

export default Dialog;
