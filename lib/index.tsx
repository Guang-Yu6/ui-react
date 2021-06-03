import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(<div>
  <Icon name='wx' onClick={fn}/>
  <Icon name='zfb' onClick={fn}/>
  <Icon name='bd' onClick={fn}/>
</div>, document.querySelector('#root'));
