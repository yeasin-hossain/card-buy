import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
function Products() {
	const [leagues, setLeagues] = useState([]);
	useEffect(
		() =>
			(async () => {
				const getData = await axios.get(
					`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
				);
				console.log(getData.data.leagues);
				setLeagues(getData.data.leagues);
			})(),
		[]
	);
	return (
		<div className="d-flex justify-content-center flex-wrap ">
			{leagues.map((league, index) => (
				<Product key={index} league={league} />
			))}
		</div>
	);
}

export default Products;
