import React, {Component} from 'react';
import Header from './structure/header';


require('./css/common.css');

export default class Layout extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Header />
				<div className="main-container clearfix">
					{this.props.children}
				</div>
			</div>
		);
	}
}