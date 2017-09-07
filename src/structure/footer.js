import React, {Component} from 'react'
import { browserHistory, Link } from 'react-router'
import '../css/footer.css'

export default class Footer extends Component {
	constructor(props){
		super(props);
		this.goToLink = this.goToLink.bind(this)
		this.footerLinks = [
			{
				label: 'Request Invite'
			,	icon: 'home'
			,	hash: '/'	
			}
		,	{
				label: 'Invite List'
			,	icon: 'home'
			,	hash: 'inviteList'
			}
		]
		this.state = {
			token: 'null'
		}
		this.token = window.sessionStorage.getItem('token')
		
	}

	componentDidMount(){
		const tokenValue = this.token ? this.token : 'null'
		this.setState({
			token : tokenValue 
		}) 
	}

	goToLink(link){
		browserHistory.push(link.hash)
	}

	createFooterLink(link, index){
		return(
			<li key={ index } onClick={() => { this.goToLink(link) }}>{ link.label }</li>
		)
	}

	goToAuth(){
		window.sessionStorage.setItem('token', 'null')
		browserHistory.push('login')
		this.setState({
			token : 'null' 
		}) 
	}

	render(){
		const footerLinkContent = this.footerLinks.map(this.createFooterLink.bind(this))
		return(
			<div className="footer">
				<ul>
					{ footerLinkContent }
					{this.state.token !== 'null' ? 
						<li onClick={() => { this.goToAuth() }}>Logout</li> : null }
				</ul>
			</div>
		)
	}
}