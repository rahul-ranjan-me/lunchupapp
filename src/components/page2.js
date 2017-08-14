import React from 'react';
import { Link } from 'react-router';
import '../css/style.css';

const App = () => (
	<div>
		<Link to={'/'}>App component</Link>
		<h2>Page 2</h2>
	</div>
);

export default App;