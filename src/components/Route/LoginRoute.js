import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { stateContext } from '../../context/StateContext';

function LoginRoute({ children, ...rest }) {
	const { userLoggedIn } = useContext(stateContext);

	return (
		<Route
			{...rest}
			render={() =>
				!userLoggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				)
			}
		/>
	);
}

export default LoginRoute;
