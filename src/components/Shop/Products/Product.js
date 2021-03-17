import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { GrCart, GrBlog } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './Products.scss';
function Product({ league }) {
	const { idLeague, strLeague, strLeagueAlternate, strSport } = league;
	return (
		<div>
			<Card className=" products" style={{ width: '18rem' }}>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Card.Body>
					<Card.Title>{strLeague}</Card.Title>
					<Card.Text>{strLeagueAlternate || 'dummy'}</Card.Text>
					<Card.Text>{strSport}</Card.Text>
					{/* <Button variant="primary">
						Add Bag <GrCart />
					</Button> */}
					<Link to={`/teams/${idLeague}`}>
						<GrBlog />
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Product;
