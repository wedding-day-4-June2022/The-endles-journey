import React from 'react';

export default {
	name: 'Египет',
	partOfTheWorld: 'afrika',
	cardImg:
		'https://migtour.ru/wp-content/uploads/2019/05/egypt-e1577520557743-1024x623.jpg',
	cardImgDescribe: 'Страна песков, пирамид и восхитительных каралловых пляжей',
	mapOfCounty: (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610049.559018193!2d21.856659345987513!3d26.61943941976208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2z0JXQs9C40L_QtdGC!5e0!3m2!1sru!2sby!4v1602584470881!5m2!1sru!2sby'
			title={new Date().getMilliseconds()}
			aria-hidden='false'
		></iframe>
	),

	flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
	sities: [
		{
			name: 'Шарм-эль-шейх',
			title:
				'Курортный город в Египте, расположенный между пустыней Синайского полуострова и Красным морем. Шарм-эль-Шейх славится своими тихими песчаными пляжами, чистой водой и коралловыми рифами.',
			attractions: [
				{
					nameAttractions: 'Залив Наама',
					describeAttraction:
						'Наама Бэй - это природная бухта на курорте Шарм-эль-Шейх, которая считается главным туристическим центром города, так как славится своими кафе, ресторанами, отелями и базарами.',
					imgAttractions:
						'https://media-cdn.tripadvisor.com/media/photo-s/08/58/74/33/caption.jpg',
					mapOfModal: (
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14102.912141087023!2d34.32445698172921!3d27.910318073330824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145337874a9d678b%3A0x5196877e0aa024d0!2z0JfQsNC70LjQsiDQndCw0LDQvNCw!5e0!3m2!1sru!2sby!4v1602584282211!5m2!1sru!2sby'
							title={new Date().getMilliseconds()}
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'Залив Наама - самая старая и благоустроенная часть Шарм Эль Шейха. Отели здесь располагаются в несколько линий вдоль залива. Отели на первой линии отделены от пляжей пешеходной улицей длиной 3 км. На этой улице (променад) находятся рестораны, кафе, магазины (супермаркеты, сувениры, дайв) и стойки экскурсионных бюро, клубы и дискотеки. Самая известная и недешевая дискотека Pasha – Bus Stop. Её несложно найти: вход на дискотеку стилизован под вход в красный автобус. Дискотека Black House находится в отеле Tropicana Rosetta. Среди кафе стоит отметить – Panarama (кафе на возвышении, несколько ярусов, живая музыка, кальян и свежевыжатые соки, панорама на Нааму), Хард Рок Кафе, Back in USSR. Здесь же есть большой торговый центр в несколько этажей. Есть казино.',
							imgDescribeAttraction:
								'https://media-cdn.tripadvisor.com/media/photo-s/0e/7f/c7/0a/caption.jpg',
						},
						{
							describeAttraction:
								'Пляжи в Наама-бей песчаные, с расчищенным от кораллов дном (не везде и не идеально). Для удобства вход в море на глубину предусмотрен по понтонам. В центре бухты есть небольшой общественный пляж. На живых приотельных коралловых рифах Hilton Fayrouz, Novotel, Marroitt, Sofitel можно полюбоваться рыбками. Пляжи в Наама-бей проходные, а это значит, что никто не помешает Вам поплавать среди рыбок, даже если Вы живёте в другом соседнем отеле. Но, так как пляжи частные, расположится на лежаке на чужом пляже нельзя.',
							imgDescribeAttraction:
								'https://turizm.world/wp-content/uploads/2015/11/snorkeling-naama-bay-egypt.jpg',
						},
						{
							describeAttraction:
								'Отелей в Наама Бей полтора десятка, большинство из них на первой линии от пляжа, но есть и расположенные на шоссе. Бухта Наама Бей - единственное место в Шарм Эль Шейхе, где разрешены моторизированные водные развлечения.',
							imgDescribeAttraction:
								'https://static.tonkosti.ru/tonkosti/table_img/g142/d8d8/57235868.jpg',
						},
					],
					accordion: [
						'https://ms1.relax.by/images/07d5b2c4e6f0d23bf9ff9c6413fa94c1/resize/w%3D1200%2Ch%3D800%2Cq%3D80/product_photo/98/66/91/98669161d7ef3449b4c200373f253366.jpg',
						'https://1001beach.ru/img/posts/4244/1200/naama_bay-1.jpg',
						'https://pictures.novatours.eu/img_srv/hotels/ssh/egstropnam/800xN/EGSTROPNAM_NAAM-TOP-Main-pool-4.jpg?market=EENOV&p=hotel_main',
						'https://mapio.net/images-p/4093519.jpg',
						'https://www.ola.ua/pageImage/egypt_170820120604_1_1722.jpg?width=600&height=400',
						'https://media-cdn.tripadvisor.com/media/photo-s/08/d7/d6/ea/na-ama-bay.jpg',
						'https://www.belfresh.by/BF_freeUploadDir/files/EGYPT/Naama-bay-egypt-tour-belfresh.jpg',
					],
				}, // Залив Наама
				{
					nameAttractions: '',
					describeAttraction: '',
					imgAttractions:
						'https://i.pinimg.com/originals/11/63/2e/11632e73f205293b70058e4b2fd2648f.jpg',
					mapOfModal: (
						<iframe
							title={new Date().getMilliseconds()}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.1269483631702!2d-21.928737983728595!3d64.14202288359316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674cca0432db5%3A0xf7af28c4489daaef!2z0KXQsNGC0LvRjNCz0YDQuNC80YHQutC40YDQutGM0Y8!5e0!3m2!1sru!2sby!4v1599321762867!5m2!1sru!2sby'
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction: '',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2019/09/17/12/01/hallgrimskirkja-4483332_960_720.jpg',
						},
						{
							describeAttraction: '',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2016/08/17/19/32/reykjavik-1601314_960_720.jpg',
						},
						{
							describeAttraction: '',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2016/08/13/18/08/reykjavik-1591254_960_720.jpg',
						},
					],
					accordion: ['', '', '', '', '', '', ''],
				}, //
				{
					nameAttractions: '',
					describeAttraction: '',
					imgAttractions:
						'https://i.pinimg.com/originals/11/63/2e/11632e73f205293b70058e4b2fd2648f.jpg',
					mapOfModal: (
						<iframe
							title={new Date().getMilliseconds()}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.1269483631702!2d-21.928737983728595!3d64.14202288359316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674cca0432db5%3A0xf7af28c4489daaef!2z0KXQsNGC0LvRjNCz0YDQuNC80YHQutC40YDQutGM0Y8!5e0!3m2!1sru!2sby!4v1599321762867!5m2!1sru!2sby'
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction: '',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2019/09/17/12/01/hallgrimskirkja-4483332_960_720.jpg',
						},
						{
							describeAttraction: '',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2016/08/17/19/32/reykjavik-1601314_960_720.jpg',
						},
						{
							describeAttraction: '',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2016/08/13/18/08/reykjavik-1591254_960_720.jpg',
						},
					],
					accordion: ['', '', '', '', '', '', ''],
				}, //
			],
		},
	],
}; //island
