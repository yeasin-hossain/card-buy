import firebaseConfig from './firebase.config';
import firebase from 'firebase/app';
import 'firebase/auth';

export const initializeFirebase = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
};

export const LoginWIthGoogleIcon = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => {
			return res;
		});
};
