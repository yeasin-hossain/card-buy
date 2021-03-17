import { createContext, useEffect, useReducer, useState } from 'react';
import { userReducer } from './UserReducer';

export const stateContext = createContext();

export const StateProvider = (props) => {
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	const [user, userDispatch] = useReducer(userReducer, {});

	useEffect(() => {
		user.isLoggedIn ? setUserLoggedIn(true) : setUserLoggedIn(false);
	}, [user]);

	const AllContext = {
		userLoggedIn,
		setUserLoggedIn,
		user,
		userDispatch,
	};
	return (
		<stateContext.Provider value={AllContext}>
			{props.children}
		</stateContext.Provider>
	);
};
