import React, {Component} from 'react'
import { browserHistory, Link } from 'react-router'
import '../css/footer.css'

export default class Footer extends Component {
	constructor(props){
		super(props);
		this.goToLink = this.goToLink.bind(this)
		this.footerLinks = [
			{
				label: 'Invite List'
			,	icon: 'home'
			,	hash: '/'
			}
		,	{
				label: 'Request Invite'
			,	icon: 'requestInvite'
			,	hash: 'requestInvite'	
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

	componentWillReceiveProps(nextProps){
		this.token = window.sessionStorage.getItem('token')
		this.setState({
			token : this.token 
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
			<div>
			{this.state.token !== 'null' ? 
				<div className="footer">
					<ul>
						{ footerLinkContent }
						<li onClick={() => { this.goToAuth() }}>Logout</li>
					</ul>
				</div> : null }
			</div>
		)
	}
}