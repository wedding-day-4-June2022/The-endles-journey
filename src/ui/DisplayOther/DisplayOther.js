import React from 'react';

import { connect } from 'react-redux';

import css from './DisplayOther.module.css';

function DisplayOther({ data, setNum }) {
	return (
		<div className={css.container}>
			<div className={css.block}>
				{data.map((el, index) => {
					return (
						<div
							className={css.card}
							id={`${el.path}`}
							key={index}
							onClick={(e) => {
								setNum(index);
							}}
						>
							<h3>{el.name}</h3>
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
