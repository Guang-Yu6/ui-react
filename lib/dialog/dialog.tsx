import React, {Fragment} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';

interface Props {
  visible: boolean
}

function x (name?:string) {
  return `mui-dialog${name ? '-' + name : ''}`;
}


const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className={x('mask')}>
        </div>

        <div className={x()}>
          <div className={x('close')}>
            <Icon name='gb'/>
          </div>

          <header className={x('header')}>
            提示
          </header>

          <main className={x('main')}>
            {props.children}
          </main>

          <footer className={x('footer')}>
            <button>ok</button>
            <button>关闭</button>
          </footer>
        </div>
      </Fragment>
      :
      null
  );
};

export default Dialog;
