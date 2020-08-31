import React from 'react';

import css from './Accordion.module.css';

function Accordion() {
	return (
		<div>
			<div className={css.wraper}>
				<ul className={css.accordion}>
					<li>
						{' '}
						<img
							src='https://kaifolog.ru/uploads/posts/2018-06/1528600115_002.jpg'
							alt=''
						/>{' '}
					</li>
					<li>
						{' '}
						<img
							src='https://www.ejin.ru/wp-content/uploads/2017/09/1-999.jpg'
							alt=''
						/>{' '}
					</li>
					<li>
						{' '}
						<img
							src='https://lh3.googleusercontent.com/proxy/SapYRCsO1-NVcdtQNsDfRk7ZfExmExhX34SfjNduw0DDrfsKxuioRysMfFHeT9cWpMqf3__HANOdrrK-VtDVcy21g3vcVL-G0js'
							alt=''
						/>{' '}
					</li>
					<li>
						{' '}
						<img src='https://www.dw.com/image/41012441_303.jpg' alt='' />{' '}
					</li>
					<li>
						{' '}
						<img
							src='https://www.etoday.ru/uploads/2011/07/26/michaelpoliza18_.jpg'
							alt=''
						/>{' '}
					</li>
					<li>
						{' '}
						<img
							src='https://www.ejin.ru/wp-content/uploads/2017/09/1-887.jpg'
							alt=''
						/>{' '}
					</li>
					<li>
						{' '}
						<img
							src='https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469544_purple-sunset-over-the-lake.jpg'
							alt=''
						/>{' '}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Accordion;
