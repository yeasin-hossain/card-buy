import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { stateContext } from '../../context/StateContext';
import {
	initializeFirebase,
	LoginWIthFbIcon,
	LoginWIthGoogleIcon,
} from '../../firebase/firebaseutility';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import './Login.scss';

function Login() {
	initializeFirebase();
	const { userDispatch } = useContext(stateContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const handleClick = (type) => {
		if (type === 'google') {
			LoginWIthGoogleIcon().then((res) => {
				userDispatch({ type: 'LOG_IN', user: res });
				history.replace(from);
			});
		} else if (type === 'facebook') {
			LoginWIthFbIcon().then((res) => {
				userDispatch({ type: 'LOG_IN', user: res });
				history.replace(from);
			});
		}
	};
	return (
		<div className="Login">
			<h4 className="centerFlex mt-3">Login With Social</h4>
			<div className="centerFlex">
				<button
					className="btn googleIcon"
					onClick={() => handleClick('google')}
				>
					<FcGoogle />
				</button>
				<button className="btn fbIcon" onClick={() => handleClick('facebook')}>
					<SiFacebook />
				</button>
			</div>
		</div>
	);
}

export default Login;
