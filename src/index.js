import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from './context/StateContext';

ReactDOM.render(
	<StateProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</StateProvider>,
	document.getElementById('root')
);

reportWebVitals();
