import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import $ from 'jquery'
import Form from './form'
import config from '../config'

import '../css/formPage.css'
import '../css/requestInvite.css'

export default class RequestInvite extends Component{
	constructor(props){
		super(props)

    this.submitData = this.submitData.bind(this)

    this.state = {
      message : undefined
    }
		
    this.metadata = [
			{
				'id' : 'location',
				'label' : 'Location',
				'type' : 'text',
				'value': ''
			},
			{
				'id' : 'type',
				'label' : 'Type',
				'type' : 'text',
				'value': ''
			},
      {
				'id' : 'discussionTopic',
				'label' : 'Discussion Topic',
				'type' : 'text',
				'value': ''
			},
      {
				'id' : 'date',
				'label' : 'Date',
				'type' : 'text',
				'value': ''
			}
		];

    this.dataStructure = {
			userId: '',
			location: '',
      type: '',
      discussionTopic: '',
      date: ''
		};
	}

	componentDidMount(){userId
		const userId = window.sessionStorage.getItem('userId')
		if(userId){
			this.dataStructure.userId = userId
		}else{
			browserHistory.push('/login')
		}		
	}

  submitData(data){
    $.ajax({
			url: config.invite,
			headers : {
				"x-access-token": window.sessionStorage.getItem('token')
			},
			method: 'post',
			dataType : 'JSON',
			data: data,
			success: (response) => {
				this.setState({message: 'Request Completed Successfully'})
				//browserHistory.push('/login')
			},
      error: (err) => {
				console.log(err)
        this.setState({message: err.responseJSON.err ? err.responseJSON.err.message : err.responseJSON.message})
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
              <h3>Request Invite</h3>
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