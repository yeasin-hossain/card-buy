import { useContext } from 'react';
import { stateContext } from '../../context/StateContext';
import Cart from '../Order/Cart';
import Products from '../Shop/Products/Products';

function Layout() {
	const { user } = useContext(stateContext);

	return (
		<div className="row">
			<div className="col-md-9">
				<Products />
			</div>
			<div className="col-md-3">
				<Cart />
			</div>
		</div>
	);
}

export default Layout;
