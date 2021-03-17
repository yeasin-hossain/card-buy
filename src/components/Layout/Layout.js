import { useContext } from 'react';
import { stateContext } from '../../context/StateContext';

function Layout() {
	const { user } = useContext(stateContext);
	console.log(user);
	return (
		<div>
			<h1>HI</h1>
		</div>
	);
}

export default Layout;
