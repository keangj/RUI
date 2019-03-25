import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
// import Button from './button';

const fn = () => {
  console.log('fn');
};

ReactDOM.render(<div>
  <Icon name='qq' onClick={fn}/>
</div>, document.querySelector('#root'));