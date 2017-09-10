import { combineReducers } from 'redux';
import inviteListReducer from './invite-list';

const allReducers = combineReducers({
	inviteList: inviteListReducer
});

export default allReducers;