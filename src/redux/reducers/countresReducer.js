const initialState = [
	{
		name: 'Island',
		cardImg: require('../../img/Island/Island.jpg'),
		cardImgDescribe: 'Исландия страна льдов и океана',
		sities: [
			{
				name: 'Рейкявик',
				attractions: [
					{
						nameAttractions: 'Хадльгримскиркья',
						describeAttraction:
							'Хадльгримскиркья — лютеранская церковь в Рейкьявике, столице Исландии. Это здание — четвёртое по высоте здание в Исландии, после длинноволновой радиомачты Хеллисандур, Эйларского длинноволнового радиопередатчика и Смараторгской башни. Церковь названа в честь поэта и духовного лидера Хадльгримюра Пьетурссона, автора книги «Passion hymns».',
						imgAttractions: require('../../img/Island/attractions/reykjavík/Хатльгримскиркья.jpg'),
						modal: [
							{
								describeSity:
									'Хадльгримскиркья — лютеранская церковь в Рейкьявике, столице Исландии. Это здание — четвёртое по высоте здание в Исландии, после длинноволновой радиомачты Хеллисандур, Эйларского длинноволнового радиопередатчика и Смараторгской башни. Церковь названа в честь поэта и духовного лидера Хадльгримюра Пьетурссона, автора книги «Passion hymns',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/hadlgrimskiri9Modal/1.jpg'),
							},
							{
								describeSity:
									'Хадльгримскиркья — лютеранская церковь в Рейкьявике, столице Исландии. Это здание — четвёртое по высоте здание в Исландии, после длинноволновой радиомачты Хеллисандур, Эйларского длинноволнового радиопередатчика и Смараторгской башни. Церковь названа в честь поэта и духовного лидера Хадльгримюра Пьетурссона, автора книги «Passion hymns',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/hadlgrimskiri9Modal/2.jpg'),
							},
							{
								describeSity:
									'Хадльгримскиркья — лютеранская церковь в Рейкьявике, столице Исландии. Это здание — четвёртое по высоте здание в Исландии, после длинноволновой радиомачты Хеллисандур, Эйларского длинноволнового радиопередатчика и Смараторгской башни. Церковь названа в честь поэта и духовного лидера Хадльгримюра Пьетурссона, автора книги «Passion hymns',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/hadlgrimskiri9Modal/3.jpg'),
							},
						],
					},
					{
						nameAttractions: 'Харпа',
						describeAttraction: 'Концертный зал и конференц-центр в Рейкьявике',
						imgAttractions: require('../../img/Island/attractions/reykjavík/Харпа.jpg'),
					},
				],
			},
		],
	},
];

export const countresReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
