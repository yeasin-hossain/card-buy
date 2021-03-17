export const userReducer = (state, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return action.user;
		case 'SIGN_OUT':
			return action.user;

		case 'IS_VERIFIED':
			return true;

		default:
			return state;
	}
};
