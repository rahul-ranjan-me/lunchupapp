import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import Layout from './layout';
import Login from './components/login';
import Register from './components/register';
import RequestInvite from './components/requestInvite';
import InviteList from './components/inviteList';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={ Layout }>
				<IndexRoute component={ InviteList } />
				<Route path="register" component={ Register } />
				<Route path="login" component={ Login } />
				<Route path="requestInvite" component={ RequestInvite } />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root'));

registerServiceWorker();
