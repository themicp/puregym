import React from 'react';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import App from './App';
import Home from './Home';
import Place from './Place';

import createHistory from 'history/lib/createBrowserHistory';

const history = useRouterHistory(createHistory)();

export default (
    <Router history={history}>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/place' component={Place} />
        </Route>
    </Router>
);
