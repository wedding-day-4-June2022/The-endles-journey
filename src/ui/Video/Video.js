import React from 'react';
import Blue from './BlueJoy.mp4';

import css from './Video.module.css';

function Video() {
	return (
		<div className={css.block} id='home'>
			<video loop className={css.video} autoPlay muted src={Blue}></video>
			<div className={css.box}>
				<h2 className={css.h2}>The endles journey </h2>
			</div>
		</div>
	);
}

export default Video;
