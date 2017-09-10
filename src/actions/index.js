export const inviteListGet = (inviteList) => {
	return {
		type: 'INVITES_GET',
		payload : inviteList
	}
};

export const newInviteSet = (invite) => {
	return {
		type: 'NEW_INVITE',
		payload : invite
	}
};