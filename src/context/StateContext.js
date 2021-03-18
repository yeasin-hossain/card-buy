import { createContext, useEffect, useReducer, useState } from 'react';
import { userReducer } from './UserReducer';

export const stateContext = createContext();

export const StateProvider = (props) => {
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [allLeague, setAllLeague] = useState([]);
	const [user, userDispatch] = useReducer(userReducer, {});

	useEffect(() => {
		user.isLoggedIn ? setUserLoggedIn(true) : setUserLoggedIn(false);
	}, [user]);
	useEffect(() => {
		fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.leagues);
				setAllLeague(res.leagues);
			});
	}, []);
	const AllContext = {
		userLoggedIn,
		setUserLoggedIn,
		user,
		userDispatch,
		allLeague,
	};
	return (
		<stateContext.Provider value={AllContext}>
			{props.children}
		</stateContext.Provider>
	);
};
