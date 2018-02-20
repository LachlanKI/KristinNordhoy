// lachlan kosaniuk innes - bigger in japan - biggerjapan@gmail.com

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';
import App from './app.js';
import Contact from './contact.js';
import Works from './works.js';
import Exhibitions from './exhibitions.js';
import Home from './home.js';
import About from './about.js';

const router = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/contact' component={Contact} />
            <Route path='/works' component={Works} />
            <Route path='/exhibitions' component={Exhibitions} />
            <Route path='/about' component={About} />
            <IndexRoute component={Home} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

ReactDOM.render(router, document.querySelector('main'));
