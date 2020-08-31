import React from 'react';

import css from './CountryDescription.module.css';

function CountryDescription() {
	const arr = ['hello', 'goga', 'rototototd', 'fara', 'rogaaa', 'bounty'];

	return (
		<div className={css.block} id='list'>
			<div className={css.countrys}>
				<div className={css.cityCss}>
					{arr.map((city, index) => {
						return <div key={index}>{city}</div>;
					})}
				</div>
			</div>

			<div className={css.imgDescription}>
				{arr.map((imgDescription, index) => {
					return (
						<div
							className={css.blockImgDesc}
							key={Math.random() + Math.random()}
						>
							<div className={css.oneBlockImg}>
								<div className={css.blockImg}>
									<img
										src='https://i.otzovik.com/objects/b/1320000/1316895.png'
										alt=''
									/>
								</div>
								<div className={css.blockP}>
									<p>{imgDescription}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CountryDescription;
