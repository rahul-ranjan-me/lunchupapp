import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { inviteListGet } from '../actions/index';
import $ from 'jquery'
import config from '../config'

import '../css/inviteList.css'

class InviteList extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        $.ajax({
			url: config.invite,
			headers : {
				"x-access-token": window.sessionStorage.getItem('token')
			},
			method: 'get',
			dataType : 'JSON',
			success: (response) => {
                this.props.inviteListGet(response)
			},
            error: (err) => {
                this.setState({message: err.responseJSON.err ? err.responseJSON.err.message : err.responseJSON.message})
            }
        });
    }

    createInvite(invite, index){
        const { discussionTopic, location, type, date } = invite
        return(
            <li key ={ index }>
                <div className="inviteImage"></div>
                <div className="inviteContent">
                    <p>Discussion Topic: <span>{ discussionTopic }</span></p>
                    <p>Location: <span>{ location }</span> on { date }</p>
                    <p>Type: <span>{ location }</span></p>
                </div>
            </li>
        )
    }

    render(){
        const invites = this.props.inviteList.map(this.createInvite.bind(this))
        return(
            <div className="invite-list-container">
                <ul>{ invites }</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
		inviteList : state.inviteList
	}
}


function matchDispatchToProps(dispatch){
	return bindActionCreators({
		inviteListGet : inviteListGet
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(InviteList);