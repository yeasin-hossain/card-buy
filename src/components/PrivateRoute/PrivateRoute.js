import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { stateContext } from '../../context/StateContext';

function PrivateRoute({ children, ...rest }) {
	const { userLoggedIn } = useContext(stateContext);
	// const location = useLocation();
	return (
		<Route
			{...rest}
			render={() =>
				userLoggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							// state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
