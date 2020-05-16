import React from 'react';

export default function Friend(props) {
	return (
		<div>
			<h3>Name: {props.name}</h3>
			<p> Id: {props.id}</p>
			<p> Age: {props.age}</p>
			<p> Email: {props.email}</p>
		</div>
	);
}
