import React from 'react';
import { Link } from 'react-router';
import UserList from '../containers/userList';
import UserDetail from '../containers/userDetail';
import '../css/style.css';

const App = () => (
	<div>
		<Link to={'page2'}>Page 2</Link>
		<h2>Username list</h2>
		<UserList />
		<hr />
		<h2>User details</h2>
		<UserDetail />
	</div>
);

export default App;