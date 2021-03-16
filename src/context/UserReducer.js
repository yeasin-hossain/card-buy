import {
	initializeFirebase,
	LoginWIthGoogleIcon,
} from '../firebase/firebaseutility';
initializeFirebase();

export const userReducer = (state, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return LoginWIthGoogleIcon().then((res) => {
				console.log(res.user);
			});

		case 'LOG_OUT':
			return false;
		case 'IS_VERIFIED':
			return true;
		default:
			return state;
	}
};
