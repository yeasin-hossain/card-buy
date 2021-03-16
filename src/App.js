import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Layout from './components/Layout/Layout';
import CartPreview from './components/Order/CartPreview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/User/Profile';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Layout />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<PrivateRoute>
					<Route path="/preview">
						<CartPreview />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
				</PrivateRoute>
			</Switch>
		</Router>
	);
}

export default App;
