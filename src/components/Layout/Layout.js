import React, { useContext } from 'react';
import { stateContext } from '../../context/StateContext';

function Layout() {
	const { user, userDispatch, userLoggedIn } = useContext(stateContext);
	console.log(user);
	const handleClick = () => {
		userDispatch({ type: 'LOG_IN' });
	};
	return (
		<div>
			<button className="btn btn-danger" onClick={handleClick}>
				Click
			</button>
		</div>
	);
}

export default Layout;
