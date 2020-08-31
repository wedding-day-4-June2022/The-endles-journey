import React from 'react';

import css from './DescriptionCity.module.css';

function DescriptionCity({ cities, idSity }) {
	return (
		<>
			{idSity
				? cities[idSity].attractions.map((el) => {
						console.log(el, 'element');

						// return(
						// 	<div className={css.oneBlockImg}>
						// 					<div className={css.blockImg}>
						// 						<img
						// 							src={
						// 								idSity ? cities.attractions[idSity].imgAttractions : null
						// 							}
						// 							alt=''
						// 						/>
						// 					</div>
						// 					<div className={css.blockP}>
						// 						<p>
						// 							{idSity ? cities.attractions[idSity].nameAttractions : null}
						// 						</p>
						// 					</div>
						// 				</div>
						// )
				  })
				: 'hello'}
		</>
	);
}

export default DescriptionCity;
