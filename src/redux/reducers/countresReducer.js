const initialState = [
	{
		name: 'Island',
		cardImg: require('../../img/Island.jpg'),
		cardImgDescribe: 'Исландия страна льдов и океана',
		sities: [
			{
				name: 'Рейкявик',
				attractions: [
					{
						nameAttractions: 'Батуты',
						imgAttractions: require('../../img/reyk9vicAttractions.jpg'),
					},
					{
						nameAttractions: 'Гимнастика',
						imgAttractions: require('../../img/Gimnastika.jpg'),
					},
					{
						nameAttractions: 'riririr',
						imgAttractions: require('../../img/Gimnastika.jpg'),
					},
				],
				describeSity:
					'За долгие годы своего существования, Исландия входит в топ самых крассивых холодных стран',
			},
			{
				name: 'Poya',
				attractions: [
					{
						nameAttractions: 'Акробатика',
						imgAttractions: require('../../img/reyk9vicAttractions.jpg'),
					},
					{
						nameAttractions: 'Аэробика',
						imgAttractions: require('../../img/Gimnastika.jpg'),
					},
				],
				describeSity:
					'За долгие годы своего существования, Исландия входит в топ самых крассивых холодных стран',
			},
		],
	},
];

export const countrysReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
