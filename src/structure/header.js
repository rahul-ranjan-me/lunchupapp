import React, {Component} from 'react'
import '../css/header.css'


export default class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<header className="" id="overview">
				<div className="container">
					<h1>Lunchup app</h1>
				</div>
			</header>
		)
	}
}