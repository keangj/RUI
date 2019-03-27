import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';
// import Button from './button';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(<div>
  <Icon
    name='qq'
    onClick={fn}
    onMouseEnter={()=> { console.log('mouse'); }}
    onMouseLeave={()=> { console.log('me'); }}
  />
</div>, document.querySelector('#root'));