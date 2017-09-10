import React, {Component} from 'react';
import Footer from './structure/footer';

require('./css/common.css');

export default class Layout extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="main-container">
				<div className="content-container">
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}