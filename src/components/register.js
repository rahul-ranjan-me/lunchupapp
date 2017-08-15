import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import $ from 'jquery'
import Form from './form'
import config from '../config'

import '../css/formPage.css'
import '../css/requestInvite.css'

export default class Register extends Component{
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
			},
      {
				'id' : 'firstName',
				'label' : 'FirstName',
				'type' : 'text',
				'value': ''
			},
      {
				'id' : 'lastName',
				'label' : 'LastName',
				'type' : 'text',
				'value': ''
			},
      {
				'id' : 'gender',
				'label' : 'Gender',
				'type' : 'text',
				'value': ''
			},
      {
				'id' : 'mobile',
				'label' : 'Mobile',
				'type' : 'text',
				'value': ''
			},
      {
				'id' : 'email',
				'label' : 'Email',
				'type' : 'text',
				'value': ''
			},
      {
				'id' : 'location',
				'label' : 'Location',
				'type' : 'text',
				'value': ''
			}
		];

    this.dataStructure = {
			username: '',
			password: '',
      firstName: '',
      lastName: '',
      gender: '',
      mobile: '',
      email: '',
      location: ''
		};
	}

  submitData(data){
    $.ajax({
			url: config.register,
			method: 'post',
			dataType : 'JSON',
			data: data,
			success: (response) => {
				this.setState({message: 'Request Completed Successfully'})
        browserHistory.push('/login')
			},
      error: (err) => {
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
              <h3>Registration</h3>
              {message ? <div className="status">{message}</div> : undefined}
              <Form 
                  metadata={this.metadata} 
                  onSubmitData={this.submitData} 
                  dataFormat = {this.dataStructure} 
                  cssClassName="form-horizontal" /> 
            </div>
          </div>
				</div>
			</div>
		)
	}
}