import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';
import TokenContext from './context/TokenContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
	const tokenTools = useLocalStorage('authToken', null);

	return (
		<div className="App">
			<TokenContext.Provider value={tokenTools}>
				<Router>
					<Logout />
					<Route exact path="/login" component={Login} />
					<PrivateRoute
						exact
						path="/"
						render={() => {
							return <h1> Hello World !</h1>;
						}}
					/>
				</Router>
			</TokenContext.Provider>
		</div>
	);
}

export default App;
