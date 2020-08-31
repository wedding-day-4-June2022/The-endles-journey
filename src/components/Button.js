import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({ url, style, title }) {
	return (
		<NavLink to={url} style={style}>
			{title}
		</NavLink>
	);
}

export default Button;
