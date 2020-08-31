import React from 'react';

import css from './Converter.module.css';

function Converter() {
	return (
		<div
			className={css.block}
			style={{
				backgroundImage:
					'url(https://storge.pic2.me/c/1360x800/299/5a9ee783c3f3a.jpg)',
			}}
			id='about'
		></div>
	);
}

export default Converter;
