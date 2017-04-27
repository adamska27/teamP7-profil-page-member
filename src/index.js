import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Annonces from './views/annonces.jsx';
import ListeUsers from './views/liste.jsx';
import Test from './components/test.jsx';

import './index.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={ListeUsers} />

      <Route  path='/:id' component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
