import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import Layout from './layout';
import App from './components/app';
import Page2 from './components/page2';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={ Layout }>
				<IndexRoute component={ App } />
				<Route path="page2" component={ Page2 } />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root'));

registerServiceWorker();
