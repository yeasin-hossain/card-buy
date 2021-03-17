import React, { useContext } from 'react';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { stateContext } from '../../context/StateContext';
import { HiOutlineLogout, HiLogin } from 'react-icons/hi';
import { SignOut } from '../../firebase/firebaseutility';
import './Header.scss';
function Header() {
	const { userLoggedIn } = useContext(stateContext);
	const { userDispatch } = useContext(stateContext);
	const handleSignOut = () => {
		SignOut().then((res) => userDispatch({ type: 'SIGN_OUT', user: {} }));
	};
	return (
		<div className="Header m-2">
			<ul className="nav nav-pills">
				<li className="nav-item">
					<Link className="nav-link active" aria-current="page" to="/">
						<FcHome />
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/profile">
						Profile
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/preview">
						Preview
					</Link>
				</li>
				{userLoggedIn ? (
					<li className="nav-item">
						<button className="btn btn-danger" onClick={handleSignOut}>
							<HiOutlineLogout />
							Log Out
						</button>
					</li>
				) : (
					<li className="nav-item ">
						<Link className="nav-link" to="/login">
							<HiLogin />
							Login
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Header;
