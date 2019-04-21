import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example'
import DialogExample from './lib/dialog/dialog.example'
import './lib/index.scss'

ReactDOM.render((
  <Router>
    <div>
      <aside>
        <ul>
          <li>
            <Link to="/icon">Icon</Link>
            <Link to="/dialog">Dialog</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Route path="/icon" component={IconExample}/>
        <Route path="/dialog" component={DialogExample}/>
      </main>
    </div>
  </Router>
), document.querySelector('#root'));
