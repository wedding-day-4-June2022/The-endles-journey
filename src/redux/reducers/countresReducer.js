import React from 'react';

const initialState = [
	{
		name: 'Island',
		cardImg: require('../../img/Island/Island.jpg'),
		cardImgDescribe: 'Исландия страна льдов и океана',
		mapOfCounty: `<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011216.232477233!2d-28.179117449263412!3d64.59444444560536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2z0JjRgdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sby!4v1599321688554!5m2!1sru!2sby'
				width='600'
				height='450'
				frameborder='0'
				style='border:0;'
				allowfullscreen=''
				aria-hidden='false'
				tabindex='0'
			></iframe>`,

		flag: require('../../img/Island/Flag.jpg'),
		sities: [
			{
				name: 'Рейкявик',
				attractions: [
					{
						nameAttractions: 'Хадльгримскиркья',
						describeAttraction:
							'Хадльгримскиркья — лютеранская церковь в Рейкьявике, столице Исландии. Это здание — четвёртое по высоте здание в Исландии, после длинноволновой радиомачты Хеллисандур, Эйларского длинноволнового радиопередатчика и Смараторгской башни. Церковь названа в честь поэта и духовного лидера Хадльгримюра Пьетурссона, автора книги «Passion hymns».',
						imgAttractions:
							'https://i.pinimg.com/originals/11/63/2e/11632e73f205293b70058e4b2fd2648f.jpg',
						mapOfModal: `<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.1269483631702!2d-21.928737983728595!3d64.14202288359316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674cca0432db5%3A0xf7af28c4489daaef!2z0KXQsNGC0LvRjNCz0YDQuNC80YHQutC40YDQutGM0Y8!5e0!3m2!1sru!2sby!4v1599321762867!5m2!1sru!2sby'
								width='600'
								height='450'
								frameborder='0'
								style='border:0;'
								allowfullscreen=''
								aria-hidden='false'
								tabindex='0'
							></iframe>`,
						modal: [
							{
								describeSity:
									'Мощное, донельзя футуристическое и грубо протыкающее небосвод здание лютеранской церкви Хадльгримскиркья органичнее бы смотрелось в сериале «Вавилон-5», нежели в центре одной из столиц Старого Света. Немудрено, что у большей части ортодоксально настроенных туристов такой внешний вид храма вызывает как минимум недоумение, а то и культурный шок. Тем интереснее узнать дату постройку Хадльгримскиркья. Удивительно, но этот собор — вовсе не образец ультра-современного искусства, ему не 5 и даже не 10 лет. Эскиз храма был разработан аж в 1937 г. гениальным и, без сомнения, смелым архитектором Гудйоуном Самуэльсоном. Однако возведение церкви затянулось на 38 лет: строительные работы начались в победном 1945, а вот закончились лишь в 1986.',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/hadlgrimskiri9Modal/1.jpg'),
							},
							{
								describeSity:
									'Мягко говоря необычное по архитектуре здание видно практически из любой точки Рейкьявика, более того, это одновременно и самая большая церковь, и четвертое по высоте здание в стране. Увенчанная 73-метровой башней с массивными «крыльями», которые словно базальтовые колонны попирают твердь земную, Хадльгримскиркья производит фантастическое впечатление. Кажется, будто стоишь у инопланетного корабля или перенесся лет так на 50 в будущее, где живут суровые люди-гиганты.',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/hadlgrimskiri9Modal/2.jpg'),
							},
							{
								describeSity:
									'Всем любителям органной музыки рекомендуем в обязательном порядке побывать на концерте в Хадльгримскиркья, подробное расписание можно посмотреть на сайте церкви hallgrimskirkja.is. Здесь, кстати, помимо музыкальных концертов, периодически проводятся светские мероприятия — вплоть до спектаклей. Оно и понятно: храм вмещает 1200 человек, это одна из крупнейших культурных площадок города.',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/hadlgrimskiri9Modal/3.jpg'),
							},
						],
						accordion: [
							require('../../img/Island/attractions/reykjavík/hadlgrimskiri9FotoAccordeon/1a.jpg'),
							require('../../img/Island/attractions/reykjavík/hadlgrimskiri9FotoAccordeon/2a.jpg'),
							require('../../img/Island/attractions/reykjavík/hadlgrimskiri9FotoAccordeon/3a.jpg'),
							require('../../img/Island/attractions/reykjavík/hadlgrimskiri9FotoAccordeon/4a.jpg'),
							require('../../img/Island/attractions/reykjavík/hadlgrimskiri9FotoAccordeon/5a.jpg'),
							require('../../img/Island/attractions/reykjavík/hadlgrimskiri9FotoAccordeon/6a.jpg'),
							require('../../img/Island/attractions/reykjavík/hadlgrimskiri9FotoAccordeon/7a.jpg'),
						],
					},
					{
						nameAttractions: 'Харпа',
						describeAttraction:
							'«Харпа» — концертный зал и конференц-центр в Рейкьявике.',
						imgAttractions: require('../../img/Island/attractions/reykjavík/Харпа.jpg'),
						mapOfModal: `<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.6022026819523!2d-21.934648984055443!3d64.15039662254047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674d3023a19c7%3A0xdbbf050da40f5d28!2zSGFycGFuLCAxMDEgUmV5a2phdsOtaywg0JjRgdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sby!4v1599321868282!5m2!1sru!2sby'
								width='600'
								height='450'
								frameborder='0'
								style='border:0;'
								allowfullscreen=''
								aria-hidden='false'
								tabindex='0'
							></iframe>`,
						modal: [
							{
								describeSity:
									'Концертный зал "Harpa" открыл свои двери для посетителей в мае 2011 года. Именно там проходят концерты и репетиции исландского симфонического оркестра и исландской оперы. Здание построено по проекту художника Olafur Eliasson в сотрудничестве с датской компанией Henning Larsen Architects. Строительство здания обошлось в 150 млн. долларов. Ночью это чудо архитектуры переливается отсветами неоновых ламп, подсвечивающих стеклянные стены здания.',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/HarpaModal/1.jpg'),
							},
							{
								describeSity:
									'В основу проекта легла простая геометрия линий в двух и в трех плоскостях. Внешние стены здания представляют собой стеклянные панели в стальных рамках. Некоторые панели из цветного стекла - свето-желтых и светло-голубых тонов. Стеклянная стена днем тоже переливается в отсветах солнца. Стеклянные стены здания напоминают базальтовые колонны, которыми так знаменита Исландия.',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/HarpaModal/2.jpg'),
							},
							{
								describeSity:
									'Харпа - перовое в Исландии здание, которое построили специально для музыкальных концертов. Считается, что там необыкновенно хорошая акустика. В Харпе - 4 зала, самый большой расчитан на 1800 зрителей. Недалеко от здания находится ещё одна достопримечательность - скульптура Sólfar ("Солнечный вояжер" или "Солнечный корабль") исландского скульптора по имени Jón Gunnar Árnason (1931 - 1989). Эта скульптура - корабль мечты, ода солнцу, в которой таятся мечты о прогрессе и свободе. В 1986 год городские власти объявили конкурс скульптур к двухсотлетию Рейкьявика, и "Солнечный корабль" его выиграл. Скульптуру установили на набережной в 1990 году.',
								imgDescribeSity: require('../../img/Island/attractions/reykjavík/HarpaModal/3.jpg'),
							},
						],
						accordion: [
							require('../../img/Island/attractions/reykjavík/HarpaFotoAccordeon/1a.jpg'),
							require('../../img/Island/attractions/reykjavík/HarpaFotoAccordeon/2a.jpg'),
							require('../../img/Island/attractions/reykjavík/HarpaFotoAccordeon/3a.jpg'),
							require('../../img/Island/attractions/reykjavík/HarpaFotoAccordeon/4a.jpg'),
							require('../../img/Island/attractions/reykjavík/HarpaFotoAccordeon/5a.jpg'),
							require('../../img/Island/attractions/reykjavík/HarpaFotoAccordeon/6a.jpg'),
							require('../../img/Island/attractions/reykjavík/HarpaFotoAccordeon/7a.jpg'),
						],
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
