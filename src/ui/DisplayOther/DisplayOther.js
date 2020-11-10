import React from 'react';

import { connect } from 'react-redux';

import css from './DisplayOther.module.css';

function DisplayOther({ data, setNum }) {
	return (
		<div className={css.container}>
			<div className={css.block}>
				{data.questionsEng.map((el, index) => {
					return (
						<div
							className={css.card}
							id={`${el.path}`}
							key={index}
							onClick={(e) => {
								setNum(index);
							}}
						>
							<div>
								<h3>{el.name}</h3>

								<div>
									{el.path === 'game' ? (
										<div>
											<div className={css.f}>Ваши сохраненные:</div>{' '}
											{Array.from(data.yourSaveCountres).map(
												(country, index) => {
													return (
														<>
															<div className={css.f} key={index}>
																<div className={css.p}>{country}</div>
															</div>
														</>
													);
												}
											)}
										</div>
									) : null}
								</div>
							</div>
							<p>descr</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(DisplayOther);
