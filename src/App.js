import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Layout from './components/Layout/Layout';
import CartPreview from './components/Order/CartPreview';
import PrivateRoute from './components/Route/PrivateRoute';
import LoginRoute from './components/Route/LoginRoute';
import Profile from './components/User/Profile';
import Header from './components/Nav/Header';
import Teams from './components/Shop/Teams/Teams';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Layout />
				</Route>
				<LoginRoute path="/login">
					<Login />
				</LoginRoute>
				<PrivateRoute path="/profile">
					<Profile />
				</PrivateRoute>
				<PrivateRoute path="/preview">
					<CartPreview />
				</PrivateRoute>
				<PrivateRoute path="/teams/:team">
					<Teams />
				</PrivateRoute>
				<Route path="*">
					<Layout />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
