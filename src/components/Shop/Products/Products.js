import React, { useContext } from 'react';
import Product from './Product';
import { stateContext } from '../../../context/StateContext';
function Products() {
	const { allLeague } = useContext(stateContext);

	return (
		<div className="d-flex justify-content-center flex-wrap ">
			{allLeague.map((league, index) => (
				<Product key={index} league={league} />
			))}
		</div>
	);
}

export default Products;
