import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example'

ReactDOM.render((
  <Router>
    <div>
      <aside>
        <ul>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Route path="/icon" component={IconExample}/>
      </main>
    </div>
  </Router>
), document.querySelector('#root'));
