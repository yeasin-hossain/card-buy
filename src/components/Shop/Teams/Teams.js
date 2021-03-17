import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Image, Jumbotron } from 'react-bootstrap';
function Teams() {
	const { team } = useParams();
	const [teamDetails, setTeamDetails] = useState({});
	const {
		dateFirstEvent,
		strLeagueAlternate,
		idCup,
		intFormedYear,
		strBanner,
		strCountry,
		strLogo,
	} = teamDetails;
	console.log(teamDetails);
	useEffect(() => {
		axios(
			`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${team}`
		).then((res) => setTeamDetails(res.data.leagues[0]));
	}, [team]);
	return (
		<div className="team">
			<Jumbotron className="d-block m-auto">
				<Image src={strBanner} fluid />
				<h1>{strLeagueAlternate}</h1>
				<h6>Country:- {strCountry}</h6>
				<h6>Established:- {intFormedYear}</h6>
				<h6>Cup:- {idCup}</h6>
				<h6>First Event:- {dateFirstEvent}</h6>
				<img className="teamLogo" src={strLogo} alt="" />
			</Jumbotron>
		</div>
	);
}

export default Teams;
