import React from 'react';

const ModalSuccess = ({ MyPageYOffset, nameCountry }) => {
	const widthMy = document.documentElement.clientWidth / 12;

	const objSuccess = {
		backgroundColor: 'rgb(92, 250, 98)',
		position: 'absolute',
		width: '16vw',
		height: '10vh',
		top: `${MyPageYOffset + widthMy}px`,
		right: '5vw',
		zIndex: '111',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		borderRadius: '5px',
	};

	return <div style={objSuccess}>{`Страна '${nameCountry}' добавленна`}</div>;
};

export default ModalSuccess;
