import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Login() {
	return (
		<form className="loginForm" autoComplete="off">
			<TextField label="Username" variant="outlined" />
			<TextField label="Password" type="password" variant="outlined" />
			<Button variant="contained" color="primary">
				Login
			</Button>
		</form>
	);
}
