import firebaseConfig from './firebase.config';
import firebase from 'firebase/app';
import 'firebase/auth';

export const initializeFirebase = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
};

const userInfo = (info) => {
	const { displayName, email, photoURL, uid, emailVerified } = info?.user;
	const UserInfo = {
		isLoggedIn: true,
		name: displayName,
		email: email,
		image: photoURL,
		uuid: uid,
		emailVerified: emailVerified,
	};
	return UserInfo;
};

export const LoginWIthGoogleIcon = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => {
			return userInfo(res);
		});
};

export const LoginWIthFbIcon = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => {
			console.log(res);
			return userInfo(res);
		})
		.catch((err) => console.log(err));
};

export const SignOut = () => {
	return firebase
		.auth()
		.signOut()
		.then(() => true)
		.catch(() => false);
};
