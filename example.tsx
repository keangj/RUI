import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example'
import DialogExample from './lib/dialog/dialog.example'
import LayoutExample from './lib/layout/layout.example'
import FormExample from './lib/form/form.example'
import ButtonExample from './lib/button/button.example'
import './lib/index.scss'

ReactDOM.render((
  <Router>
    <div>
      <aside>
        <ul>
          <li>
            <Link to="/icon">Icon</Link>
            <Link to="/button">Button</Link>
            <Link to="/dialog">Dialog</Link>
            <Link to="/layout">Layout</Link>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Route path="/icon" component={IconExample}/>
        <Route path="/button" component={ButtonExample}/>
        <Route path="/dialog" component={DialogExample}/>
        <Route path="/layout" component={LayoutExample}/>
        <Route path="/form" component={FormExample}/>
      </main>
    </div>
  </Router>
), document.querySelector('#root'));
