import React from 'react';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import App from './App';
import Home from './Home';
import Place from './Place';
import PowerPlate from './PowerPlate';
import Kinesis from './Kinesis';
import Trx from './Trx';
import Pilates from './Pilates';
import Programs from './Programs';

import createHistory from 'history/lib/createBrowserHistory';

const history = useRouterHistory(createHistory)();

export default (
    <Router history={history}>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/place' component={Place} />
            <Route path='/power-plate' component={PowerPlate} />
            <Route path='/kinesis' component={Kinesis} />
            <Route path='/trx' component={Trx} />
            <Route path='/pilates' component={Pilates} />
            <Route path='/programs' component={Programs} />
        </Route>
    </Router>
);
