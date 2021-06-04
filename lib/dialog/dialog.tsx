import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import Icon from '../icon/icon';

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
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
            {props.buttons.map((button, index) =>
              React.cloneElement(button, {key: index}))}
          </footer>
        </div>
      </Fragment>
      :
      null;
  return (
    ReactDOM.createPortal(w,document.body)
  );
};

Dialog.defaultProps = {
  onMask: false
};

export default Dialog;
