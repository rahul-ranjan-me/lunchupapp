import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import $ from 'jquery'
import Form from './form'
import config from '../config'

import '../css/formPage.css'
import '../css/requestInvite.css'

export default class Login extends Component{
	constructor(props){
		super(props)
    this.submitData = this.submitData.bind(this)
    this.state = {
      message : undefined
    }
    this.metadata = [
			{
				'id' : 'username',
				'label' : 'User name',
				'type' : 'text',
				'value': ''
			},
			{
				'id' : 'password',
				'label' : 'Password',
				'type' : 'password',
				'value': ''
			}
		];

    this.dataStructure = {
			username: '',
			password: ''
		};
	}

  submitData(data){
    $.ajax({
		  url: config.login
		, method: 'post'
		, dataType : 'JSON'
		, data: data
		, success: (response) => {
				this.setState({message: 'Request Completed Successfully'})
        window.sessionStorage.setItem('token', response.token);
        window.sessionStorage.setItem('userId', response.id);
        config.userDetails = response.userDetails;
        browserHistory.push('/');
			}
    , error: (err) => {
        this.setState({message: err.responseJSON.err.message})
      }
	  });
  }

	render(){
    const { message } = this.state

		return(
			<div className="form-page-container">
				<h2>Lunchup</h2>
				<div className="form-container">
          <div className="tableDisplay">
            <div className="tableCellDisplay">
              <h3>Login</h3>
              {message ? <div className="status">{message}</div> : undefined}
              <Form 
                  metadata={this.metadata} 
                  onSubmitData={this.submitData} 
                  dataFormat = {this.dataStructure} 
                  cssClassName="form-horizontal" /> 
              <p className="registerLink"><Link to={'/register'}>Not registered? Click here</Link></p>
            </div>
          </div>
				</div>
			</div>
		)
	}
}