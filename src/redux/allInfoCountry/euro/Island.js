import React from 'react';

export default {
	name: 'Исландия',
	partOfTheWorld: 'euro',
	cardImg:
		'https://images.pexels.com/photos/831056/pexels-photo-831056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	cardImgDescribe: 'Исландия страна льдов и океана',
	mapOfCounty: (
		<iframe
			title={new Date().getMilliseconds()}
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011216.232477233!2d-28.179117449263412!3d64.59444444560536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2z0JjRgdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sby!4v1599321688554!5m2!1sru!2sby'
			aria-hidden='false'
		></iframe>
	),

	flag:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1200px-Flag_of_Iceland.svg.png',
	sities: [
		{
			name: 'Рейкявик',
			title:
				'Рейкьявик – столица и крупнейший город островного государства Исландия.',
			attractions: [
				{
					nameAttractions: 'Хадльгримскиркья',
					describeAttraction:
						'Хадльгримскиркья — лютеранская церковь в Рейкьявике, столице Исландии. ',
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
							describeAttraction:
								'Мощное, донельзя футуристическое и грубо протыкающее небосвод здание лютеранской церкви Хадльгримскиркья органичнее бы смотрелось в сериале «Вавилон-5», нежели в центре одной из столиц Старого Света. Немудрено, что у большей части ортодоксально настроенных туристов такой внешний вид храма вызывает как минимум недоумение, а то и культурный шок. Тем интереснее узнать дату постройку Хадльгримскиркья. Удивительно, но этот собор — вовсе не образец ультра-современного искусства, ему не 5 и даже не 10 лет. Эскиз храма был разработан аж в 1937 г. гениальным и, без сомнения, смелым архитектором Гудйоуном Самуэльсоном. Однако возведение церкви затянулось на 38 лет: строительные работы начались в победном 1945, а вот закончились лишь в 1986.',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2019/09/17/12/01/hallgrimskirkja-4483332_960_720.jpg',
						},
						{
							describeAttraction:
								'Мягко говоря необычное по архитектуре здание видно практически из любой точки Рейкьявика, более того, это одновременно и самая большая церковь, и четвертое по высоте здание в стране. Увенчанная 73-метровой башней с массивными «крыльями», которые словно базальтовые колонны попирают твердь земную, Хадльгримскиркья производит фантастическое впечатление. Кажется, будто стоишь у инопланетного корабля или перенесся лет так на 50 в будущее, где живут суровые люди-гиганты.',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2016/08/17/19/32/reykjavik-1601314_960_720.jpg',
						},
						{
							describeAttraction:
								'Всем любителям органной музыки рекомендуем в обязательном порядке побывать на концерте в Хадльгримскиркья, подробное расписание можно посмотреть на сайте церкви hallgrimskirkja.is. Здесь, кстати, помимо музыкальных концертов, периодически проводятся светские мероприятия — вплоть до спектаклей. Оно и понятно: храм вмещает 1200 человек, это одна из крупнейших культурных площадок города.',
							imgDescribeAttraction:
								'https://cdn.pixabay.com/photo/2016/08/13/18/08/reykjavik-1591254_960_720.jpg',
						},
					],
					accordion: [
						'https://cdn.pixabay.com/photo/2019/08/28/13/26/iceland-4436790_960_720.jpg',
						'https://cdn.pixabay.com/photo/2016/08/17/19/27/reykjavik-1601304_960_720.jpg',
						'https://cdn.pixabay.com/photo/2016/09/27/15/05/reykjavik-1698578_960_720.jpg',
						'https://cdn.pixabay.com/photo/2016/04/03/22/55/hallgrimskirkja-1305850_960_720.jpg',
						'https://cdn.pixabay.com/photo/2016/08/13/18/08/reykjavik-1591254_960_720.jpg',
						'https://cdn.pixabay.com/photo/2017/05/09/15/44/reykjavik-2298592_960_720.jpg',
					],
				}, // Хадльгримскиркья

				{
					nameAttractions: 'Перлан',
					describeAttraction:
						'Перлан (исл. Perlan — «жемчужина») — городская котельная, здание с голубой полусферической крышей-куполом',
					imgAttractions:
						'https://static.esosedi.org/fiber/194555/fit/900x600/perlan.png',

					mapOfModal: (
						<iframe
							title={new Date().getMilliseconds()}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.929642039279!2d-21.921239383729144!3d64.12921258358739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d60b4cb9a4739d%3A0x720effd6596f3f29!2z0J_QtdGA0LvQsNC9!5e0!3m2!1sru!2sby!4v1600072079466!5m2!1sru!2sby'
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'Внутри расположен искусственный гейзер, который фонтанирует с промежутками в несколько минут. Общая высота здания 25, 7 метров. Несмотря на необычный внешний вид, это всего лишь городская котельная, однако дополнительно оборудованная внутри. Когда-то в резервуарах хранилась горячая вода для обогрева города, всего в 6 цистернах помещалось 4 млн. тонн воды. Сегодня резервуары переоборудованы под купол с рестораном.',
							imgDescribeAttraction:
								'https://vikatravel.ru/wp-content/uploads/2018/03/2222.jpg',
						},
						{
							describeAttraction:
								'С южной стороны холм спускается прямо к фьорду с бухтой, именно сюда сбрасываются излишки воды из котельной. Посреди бухты из песка просматривается нечто, похожее на огромную кастрюлю, куда избытки воды и выливаются, поэтому вода во время отлива в бухте очень теплая, это хорошо ощущается. Желающие могут прийти на городской пляж и сами попробовать окунуться.Название холма произошло от названия самого здания, Перлан переводится как жемчуг, внешне оно напоминает ромашку, каждый лепесток которой представляет собой резервуар с горячей водой. Особенность сооружения в том, что вода становится горячей благодаря подогреву термальными водами, над месторождениями которых и было построено это чудо-здание.',
							imgDescribeAttraction:
								'https://ru.oddviser.com/photo/place/1600/308.jpg',
						},
						{
							describeAttraction:
								'Первый этаж здания Перлан занимает зимний сад, представляющий собой выставочное пространство общей площадью порядка 10 тысяч куб. м. Тут проводятся концерты, ярмарки и выставки. Четвертый этаж здания занимает смотровая башня, где находятся панорамные телескопы, по одному в каждом из 6 углов. Над башней возвышается купол, а в куполе работает ресторан с вращающимся полом и коктейль-бар. За 2 часа эта часть сооружения делает полный оборот вокруг оси. В ночное время здесь особенно красиво, благодаря подсветке купола из тысячи маленьких огней.Часть здания Перлан занимают магазины, среди которых есть продовольственный, рождественский и сувенирный, все они находятся также на 4 этаже здания. Один из бывших резервуаров занимает Музей Саги, который представляет коллекцию забавных восковых фигур, рассказывающих о жизни и культуре народа страны.',
							imgDescribeAttraction:
								'https://lh3.googleusercontent.com/proxy/Nkita88X4vUHQgW-JlPZ6opSrDuYLCK0R533_DbFQrULlQzZWVOpad3Kfkd_cD2y1srsR04DBUZezfzHBrS5ZilKHrprWsuvKKMn54bK7VToZiO2zsVo',
						},
					],
					accordion: [
						'https://wikiway.com/upload/hl-photo/15b/ff1/perlan_31.jpg',
						'https://tripplanet.ru/wp-content/uploads/europe/iceland/reykjavik/perlan.jpg',
						'https://img.pac.ru/landmarks/363734/big/B974D1F27F0001016F042CCCBBBA644D.jpg',
						'https://needguide.ru/Europe/Iceland/Reykjavik/Perlan/img_2.jpg',
						'https://www.tourprom.ru/site_media/images/poiphoto/perlan_interjer_1.jpg',
						'https://lh3.googleusercontent.com/proxy/Nkita88X4vUHQgW-JlPZ6opSrDuYLCK0R533_DbFQrULlQzZWVOpad3Kfkd_cD2y1srsR04DBUZezfzHBrS5ZilKHrprWsuvKKMn54bK7VToZiO2zsVo',
						'https://static.esosedi.org/fiber/194556/fit/1400x1000/perlan.png',
					],
				}, // Перлан

				{
					nameAttractions: 'Харпа',
					describeAttraction:
						'«Харпа» — концертный зал и конференц-центр в Рейкьявике.',
					imgAttractions:
						'https://cdn.pixabay.com/photo/2019/10/03/20/17/harpa-4524297_960_720.jpg',

					mapOfModal: (
						<iframe
							title={new Date().getMilliseconds()}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.6022026819523!2d-21.934648984055443!3d64.15039662254047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674d3023a19c7%3A0xdbbf050da40f5d28!2zSGFycGFuLCAxMDEgUmV5a2phdsOtaywg0JjRgdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sby!4v1599321868282!5m2!1sru!2sby'
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'Концертный зал "Harpa" открыл свои двери для посетителей в мае 2011 года. Именно там проходят концерты и репетиции исландского симфонического оркестра и исландской оперы. Здание построено по проекту художника Olafur Eliasson в сотрудничестве с датской компанией Henning Larsen Architects. Строительство здания обошлось в 150 млн. долларов. Ночью это чудо архитектуры переливается отсветами неоновых ламп, подсвечивающих стеклянные стены здания.',
							imgDescribeAttraction:
								'https://vse-v-pohod.ru/wp-content/uploads/2019/06/harpa_concert_hall_reykjavik_iceland.jpg',
						},
						{
							describeAttraction:
								'В основу проекта легла простая геометрия линий в двух и в трех плоскостях. Внешние стены здания представляют собой стеклянные панели в стальных рамках. Некоторые панели из цветного стекла - свето-желтых и светло-голубых тонов. Стеклянная стена днем тоже переливается в отсветах солнца. Стеклянные стены здания напоминают базальтовые колонны, которыми так знаменита Исландия.',
							imgDescribeAttraction:
								'https://lh5.googleusercontent.com/-gkLLGFcHMgc/UivzJQHzhII/AAAAAAAAS14/6T4niaH1Yfo/s900/IMG_5349.jpg',
						},
						{
							describeAttraction:
								'Харпа - перовое в Исландии здание, которое построили специально для музыкальных концертов. Считается, что там необыкновенно хорошая акустика. В Харпе - 4 зала, самый большой расчитан на 1800 зрителей. Недалеко от здания находится ещё одна достопримечательность - скульптура Sólfar ("Солнечный вояжер" или "Солнечный корабль") исландского скульптора по имени Jón Gunnar Árnason (1931 - 1989). Эта скульптура - корабль мечты, ода солнцу, в которой таятся мечты о прогрессе и свободе. В 1986 год городские власти объявили конкурс скульптур к двухсотлетию Рейкьявика, и "Солнечный корабль" его выиграл. Скульптуру установили на набережной в 1990 году.',
							imgDescribeAttraction: 'https://i.archi.ru/i/650/101822.jpg',
						},
					],
					accordion: [
						'https://avatars.mds.yandex.net/get-zen_doc/95163/pub_5a8825aa00b3dd6ce18234b0_5a9530568139ba9d2e859049/scale_1200',
						'https://s2.best-wallpaper.net/wallpaper/1680x1050/1807/Reykjavik-Harpa-Iceland-concert-hall_1680x1050.jpg',
						'https://oboinastol.net/katalog_kartinok/tom02/057/skachat_oboi_800x480.jpg',
						'https://nyc3.digitaloceanspaces.com/ur-media2/photos/images/000/085/040/153cfc0bb6f4f1a4ff60e0117578029d9a43ba93_big.jpg?1396858375',
						'https://topgid.net/uploads/posts/2020-05/5eb803fba2bde-7982-harpan.jpeg',
						'https://img.account.travel/xeIPag8qPphy3z_mBa50wwSr8q1nc0YfSwEAsfVP0kQ/resize:fill:0:370:0/gravity:ce/dpr:1/aHR0cHM6Ly9hc3NldHMuYXRsYXNvYnNjdXJhLmNvbS9tZWRpYS9XMXNpWmlJc0luVndiRzloWkhNdmNHeGhZMlZmYVcxaFoyVnpMekJtT0RnM1lUQXhMVEZsWWpJdE5HSmtZaTFoWVdZNExUSmtPR1EzTmpsaVpUQXhPV0ptTVdJd1pqWTFNV0V6WVRNMVpUY3hNbDg0TVY5U1pYbHJhbUYyYVdzdVNsQkhJbDBzV3lKd0lpd2lkR2gxYldJaUxDSXhNakF3ZUQ0aVhTeGJJbkFpTENKamIyNTJaWEowSWl3aUxYRjFZV3hwZEhrZ09ERWdMV0YxZEc4dGIzSnBaVzUwSWwxZC84MV9SZXlramF2aWsuSlBH.jpg',
						'https://topgid.net/uploads/posts/2020-05/5eb80400e941f-7982-harpan.jpeg',
					],
				}, // Харпа

				{
					nameAttractions: 'Солнечный странник',
					describeAttraction:
						'Солнечный странник - памятник, который символизирует надежду на новую жизнь, мечту о далеких странах и неизведанных горизонтах, стремление к свободе.',
					imgAttractions:
						'https://cs3.livemaster.ru/zhurnalfoto/3/d/c/140715133033.jpg',

					mapOfModal: (
						<iframe
							title={new Date().getMilliseconds()}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.775542383398!2d-21.92447328372838!3d64.1476305835957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd87b3a7b999ca6a8!2sSun%20Voyager!5e0!3m2!1sru!2sby!4v1600072686859!5m2!1sru!2sby'
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'«Солнечный странник» или «солнечный путешественник» — именно так на русский язык переводится одна из самых незамысловатых, простых и оттого гениальных скульптур в мире. Созданный в 1990 г. по эскизам талантливого исландского художника Йона Гуннара Арнасона, Sun Voyager был установлен на набережной Рейкьявика в честь крайне знаменательной для жителей страны даты. Именно в этом году отмечали 200-летие столицы Исландии, и именно этой романтичной скульптурой украсили «юбиляра». Увы, автор памятника не дожил до этого, определенно, важного события в его жизни. Йон Гуннар болел лейкемией, и даже эскиз «Вояжера» рисовал уже тяжело больным и скончался ровно за год до открытия памятника. Так что Sun Voyager стал не только одним из последних его творений, но и, безусловно, самым известным.',
							imgDescribeAttraction:
								'https://pp.userapi.com/c849028/v849028716/cca00/v5rkcam34zs.jpg',
						},
						{
							describeAttraction:
								'Что же олицетворяет собой стальная громадина, расположенная у моря близ того самого дома Хёвди, где в свое время останавливались и Марлен Дитрих, и гениальный Черчилль, и была окончена, кстати, холодная война? С первого взгляда кажется, будто это дань памяти и уважения героическому прошлому страны, рыжебородым сынам Исландии — мужественным викингам. Ведь Sun Voyager удивительно напоминает остов корабля этих славных воинов. Однако это заблуждение. Автор утверждал, что его «солнечный странник», так напоминающий по виду корабль, это символ стремления к мечте, это надежда на новые открытия, неизведанные земли, неразгаданные тайны. Это бесконечный бег за горизонт в поисках немыслимого и оттого ужасно интересного.',
							imgDescribeAttraction:
								'https://lh3.googleusercontent.com/-lLlj3d8EIdw/V4ybWY2pg9I/AAAAAAAAS_M/j3Umq3M8p2oR5L0KKo6lxv9CDZ59jCdCQCCo/s1024/IMG_7247f2.jpg',
						},
						{
							describeAttraction:
								'Стоит ли говорить, что столь романтичная фигура считается одним из самых популярных мест у туристов и, куда же без них, влюбленных парочек? К слову, размеры у этой махины нешуточные — добрые 4 м в длину и 3 м в высоту.',
							imgDescribeAttraction:
								'https://topgid.net/uploads/posts/2020-05/1589129560_skulptura-solnechnyj-strannik1.jpg',
						},
					],
					accordion: [
						'https://img5.goodfon.ru/wallpaper/big/f/32/islandiia-skulptura-reikiavik-solnechnyi-strannik-ion-gunnar.jpg',
						'https://cdn22.img.ria.ru/images/156147/22/1561472270_594:0:2641:2047_1920x0_80_0_0_a684f4b43d7e3b75f6eaf7d7c3ecee4c.jpg',
						'https://topgid.net/uploads/posts/2020-05/1589129827_skulptura-solnechnyj-strannik5.jpg',
						'https://media-cdn.tripadvisor.com/media/photo-s/16/9c/a9/00/this-sculpture-is-quite.jpg',
						'https://m.bwreisen.de/dynamic/photos/2279_35_reykjavik.jpg',
						'https://11journeys.files.wordpress.com/2017/05/4.jpg?w=1040',
						'https://vln2ykabww2byyypvkvwe8xi0suvyezz.cdn-freehost.com.ua/wp-content/uploads/2017/01/Sun_voyager2-1024x768.jpg',
					],
				}, // Солнечный странник
				{
					nameAttractions: 'Фаллологический музей',
					describeAttraction:
						'Исландский музей фаллосов — уникальный музей в Рейкьявике, посвященный исключительно изучению пенисов млекопитающих.',
					imgAttractions:
						'https://farm6.staticflickr.com/5762/21841040156_71e573cd8b_b.jpg',

					mapOfModal: (
						<iframe
							title={new Date().getMilliseconds()}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.7250895013628!2d-21.937720083728344!3d64.148435683596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48cd42159e4b2c3b%3A0x4dae8a9fbb2fe4a0!2z0KTQsNC70LvQvtC70L7Qs9C40YfQtdGB0LrQuNC5INC80YPQt9C10Lk!5e0!3m2!1sru!2sby!4v1600074929462!5m2!1sru!2sby'
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'Музей был основан в 1997 году вышедшим на пенсию учителем Сигурдуром Хъяртарссоном. Интерес к членам у него проснулся еще в детстве, после того как ему подарили хлыст из члена быка. С тех пор он собирал органы всех исландских млекопитающих.Самый большой экземпляр в коллекции - член синего кита. Его размеры составляют 170 см и 70 кг – причем это только головка. Весь орган охватывает длину около 5 метров и весит 350-450 кг. Местные жители даже прозвали его «настоящий Моби Дик» («Дик» по английски «член»). Самый маленький экземпляр в коллекции - половой органа хомяка (2 мм). Рассмотреть его можно только при помощи увеличительного стекла.',
							imgDescribeAttraction:
								'https://info-maniac.com/wp-content/uploads/2019/07/170502175906-phallus-museum.jpg',
						},
						{
							describeAttraction:
								'Всего Исландский фаллологический музей в Рейкьявике насчитывает 280 членов (pun intended) от 93 видов животных. 55 пенисов добыли у китов, 36 у тюленей, и еще 118 – у наземных млекопитающих. В коллекции также есть член хульдуфоулка (скрытого жителя или эльфа). Член, очевидно, не менее скрытный, чем его владелец. С этим экземляром есть некоторые споры - поскольку эльфы невидимы - как можно увидеть его орган? Однако Сигурдур утверждает, что член вполне себе присутствует, и более того - это один из самых любимых экземпляров в его коллекции.',
							imgDescribeAttraction:
								'https://avatars.mds.yandex.net/get-zen_doc/197791/pub_5b38f1aa7aa92600aa96e08b_5b38f2527d663500a99b9cd7/scale_600',
						},
						{
							describeAttraction:
								'Сначала коллекция располагалась в офисе Сигурдура в колледже, где он преподавал. Когда учитель вышел на пенсию, то более в шутку, чем всерьез решил публично выставить свою коллекцию в Рейкьявике. Какого же было его удивление, когда муниципалитет пожертвовал ему 200 тысяч исландских крон на организацию музея. Буквально через пару лет музей уже привлекал 5000 человек в год, из них 4000 – из за границы. Тем не менее денег не хватало, и в 2003 году Сигурдур решил  продать музей. Он также предложил его в подарок городу Рейкьявик. Однако ни то, ни другое не осуществилось, и бывший учитель перевез коллекцию в Хусавик. Музей расположили в бывшем здании ресторана, и отметили вход гигантским деревянным членом и каменным фаллосом. Жители Хусавика скептически отнеслись к новому образованию в их городе, однако в итоге решили, что ничего порнографического в музее нет, так что почему бы и нет)',
							imgDescribeAttraction:
								'https://travellan.ru/upload/News%20of%20Travel/The%20Icelandic%20Phallological%20Museum_900x657.jpg',
						},
					],
					accordion: [
						'https://www.jazztour.ru/blog/wp-content/uploads/Hi%C3%B0-%C3%ADslenzka-re%C3%B0asafn.jpg',
						'https://upload.wikimedia.org/wikipedia/commons/3/33/Husavik_Phallusmuseum.jpg',
						'https://webplus.info/images/wpi.images/art_meta_345.jpg',
						'https://storage.yvision.kz/images/user/jackara/Y6O0ufKenIw3awpI90sK0c4WOeEshF.jpg',
						'https://s1.travelask.ru/system/images/files/000/299/622/wysiwyg/meguro_parasitological_museum_06.jpg?1496829163',
						'https://storage.yvision.kz/images/user/jackara/FonSbD1cK8YNvR7NNZ8RfjT0ev78i8.jpg',
						'https://wiki-turizm.ru/public/images/52/b2ap3_thumbnail_16_20130804-170559_1.jpg',
					],
				}, // Фаллологический музей
			],
		}, // Рейкявик

		{
			name: 'Акюрейри',
			title:
				'Городок, расположенный на далеком севере Исландии — Акюрейри, разместился у подножия фьорда Эйя-фьорд, между горными грядами. Климат, благодаря такому положению местности, здесь более напоминает континентальный, нежели прибрежный.',
			attractions: [
				{
					nameAttractions: 'Церковь Акюрейри',
					describeAttraction:
						'Лютеранская церковь в городе Акюрейри на севере Исландии.',
					imgAttractions:
						'https://planetofhotels.com/sites/default/files/atttaction-images/7804002.jpg',

					mapOfModal: (
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.1423256097019!2d-18.0929697836632!3d65.67991208431162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d28f0ef826d6e9%3A0x1948071dfe6f8920!2z0KbQtdGA0LrQvtCy0Ywg0JDQutGO0YDQtdC50YDQuA!5e0!3m2!1sru!2sby!4v1601280461939!5m2!1sru!2sby'
							title={new Date().getMilliseconds()}
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'Высокое и горделивое здание лютеранской церкви возвышается на холме в центре города так, что с любой точки города заметны ее монументальные шпили. Длинная лестница с множеством ступеней ведет к центральному входу к церкви. Местные жители из походов по ступенькам даже создали своеобразное развлечение — забеги, которые сопровождаются шутками и вручением грамот победителям или самым выносливым.',
							imgDescribeAttraction:
								'https://s12.stc.all.kpcdn.net/share/i/4/1176988/wx720.jpg',
						},
						{
							describeAttraction:
								'Несмотря на то, что проект церкви был предложен исландским архитектором и принят городскими властями в начале XX века, строительство храма, возведенного в традициях местной архитектуры, было закончено только в 1940 году. Архитектурный стиль здания выбран не случайно - витиеватые барочные или строгие готические купола в такой местности явно были бы не подходящими, таким образом архитектор решил возвести здание в форме кирхи, придерживаясь стиля модерн.',
							imgDescribeAttraction:
								'https://img.tourister.ru/files/2/0/6/1/3/7/6/0/original.jpg',
						},
						{
							describeAttraction:
								'Внутри помещения особый интерес представляет витраж, доставленный в город прямиком из уничтоженного немцами во время бомбардировок Великобритании Собора в Ковентри. Не меньший интерес представляет и орган, установленный в храме – он знаменит 3200 трубами и миниатюрной копией корабля, подвешенной между сводчатыми арками потолка. Оказаться внутри собора достаточно сложно – он открывается только на время проведения службы, но, если вы все-таки войдете в помещение, на вас опуститься благоговейная полутьма, а красная ковровая дорожка заглушит шаги, что вызовет ощущение чистоты и покоя.',
							imgDescribeAttraction:
								'https://guidetoiceland.imgix.net/265518/x/0/akureyri-church-air-iceland-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4',
						},
					],
					accordion: [
						'https://planetofhotels.com/sites/default/files/atttaction-images/6428121.jpg',
						'https://planetofhotels.com/sites/default/files/atttaction-images/4076554.jpg',
						'https://planetofhotels.com/sites/default/files/atttaction-images/7804002.jpg',
						'https://vpoisketurov.ru/800/600/http/www.openarium.ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B8%D1%81%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F/%D1%81%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D1%8F_%D0%B8%D1%81%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C-%D0%B0%D0%BA%D1%83%D1%80%D0%B5%D0%B9%D1%80%D0%B0%D0%BA%D0%B8%D1%80%D0%BA%D1%8C%D1%8F.jpg',
						'https://sun1-17.userapi.com/c830400/v830400532/14b073/TGg0RzIW5og.jpg',
						'https://planetofhotels.com/sites/default/files/atttaction-images/4076566.jpg',
						'https://planetofhotels.com/sites/default/files/atttaction-images/76937996.jpg',
					],
				}, //церковь  Акюрейри

				{
					nameAttractions: 'Ботанический сад Акюрейри',
					describeAttraction:
						'Ботанический сад в Акюрейри основан в 1909 году по инициативе женщин из Дании.',
					imgAttractions:
						'https://pokatashkin.com/wp-content/uploads/2013/04/cafe_botanical_gardens_2.jpg',

					mapOfModal: (
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.4457598530116!2d-18.095601283663406!3d65.67513018430932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d28f10097bae63%3A0x44227d7e2f101ffc!2z0JHQvtGC0LDQvdC40YfQtdGB0LrQuNC5INGB0LDQtCDQkNC60Y7RgNC10LnRgNC4!5e0!3m2!1sru!2sby!4v1601304864092!5m2!1sru!2sby'
							title={new Date().getMilliseconds()}
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'Самый северный в мире ботанический сад находится в городе Акюрейри, на севере Исландии. Сам город расположен во глубине Эйяфьорда, и окружён горами. Климат здесь ближе к континентальному, чем к морскому. Летом температура поднимается порой до 27 градусов, но зимы холоднее, чем во всей Исландии. При этом почвы вокруг города на удивление плодородные. Не случайно, город носит такое название: с исландского Акюрейри можно перевести, как «поле на косе». Здесь издавна выращивают картофель и плодовые деревья.',
							imgDescribeAttraction:
								'https://s3-eu-west-1.amazonaws.com/media.agentika.com/user/aaf1ee8c-4284-4d7d-bfc6-5e24698b284a.png',
						},
						{
							describeAttraction:
								'И вполне естественно, что ботанический сад в Акюрейри считается лучшим в Исландии. Он был основан в 1909 году на площади 1,2 га по инициативе четырёх женщин из Дании, и с осени 1912 года отрыт для посещения. В 1957 году территория его была расширена в 3 раза, сейчас он занимает около 3,7 га. В саду собраны почти все растения, произрастающие на острове, а также около 4000 видов растений из других мест, даже таких отдалённых, как Испания или Новая Зеландия. При этом все они находятся в природных условиях - в саду нет ни парников, ни оранжерей. Здесь даже цветут голубые маки.',
							imgDescribeAttraction:
								'https://photos.wikimapia.org/p/00/06/46/79/13_big.jpg',
						},
						{
							describeAttraction:
								'Ботанический сад Акюрейри не является научным учреждением, а создан и существует лишь на радость горожанам и их гостям. Он расположен на холме, с которого открываются живописные виды окрестностей. На его территории есть кафе, построенное в честь столетия сада. Архитекторы создали его таким, чтобы оно само радовало глаз, не затмевая красоты окружения. Ботанический сад Акюрейри является гордостью Исландии.',
							imgDescribeAttraction:
								'https://www.amatodenver.com/wp-content/uploads/2017/08/TRACYS-WEDDING-2017-113-846x563.jpg',
						},
					],
					accordion: [
						'https://media-cdn.tripadvisor.com/media/photo-s/05/65/35/3d/arctic-botanical-gardens.jpg',
						'https://www.votpusk.ru/gallery/mobile/116638.jpg',
						'https://s3-eu-west-1.amazonaws.com/media.agentika.com/user/aaf1ee8c-4284-4d7d-bfc6-5e24698b284a.png',
						'https://img.lookmytrips.com/images/look7lkv/5742b7eeff936723fb0565b4-5a7aa81baea66-1d7la0r.jpg',
						'https://img1.advisor.travel/1314x680px-Akureyri_Botanical_Garden_1.jpg',
						'https://pokatashkin.com/wp-content/uploads/2013/04/cafe_botanical_gardens_4.jpg',
						'https://incomartour.com.ua/mediafiles/images/places/20181210164035/botanicalakureyri%20(16).jpg',
					],
				}, //Ботанический сад Акюрейри
				{
					nameAttractions: 'Церковь Глерауркиркья',
					describeAttraction:
						'Глерауркья — лютеранская церковь в городе Акюрейри на севере Исландии. Здание является одной из главных достопримечательностей города. Храм принадлежит пробству Эйяфьярдарпроувастсдайми.',
					imgAttractions: 'https://www.votpusk.ru/gallery/mobile/116666.jpg',

					mapOfModal: (
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52552.68853046905!2d-18.16568389964791!3d65.69363439141559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8fce09f10f1ff588!2z0JPQu9C10YDQsNGD0YDQutC40YDQutGM0Y8!5e0!3m2!1sru!2sby!4v1602163304873!5m2!1sru!2sby'
							title={new Date().getMilliseconds()}
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'В городе Акюрейри, на севере Исландии, помимо знаменитой Акюрейраркиркьи, которая безусловно является шедевром архитектуры и украшением города, есть ещё одна, не менее замечательная лютеранская церковь – Глерауркиркья, церковь на реке Глерау. Глерау протекает через Акюрейри, унося талые воды ледников полуострова Тролля, Трётласкаги, в Норвежское море. Название её переводится как стеклянная река. Иногда, ошибочно, Глерауркиркью называют стеклянной церковью, но это неправильно. Она построена из бетона в стиле модерн, с высоким шпилем, и своим обликом напоминает выброс гейзера или недавно образовавшийся совсем молодой вулкан, ещё не подвергшийся разрушительному действию эрозии.',
							imgDescribeAttraction:
								'https://s3-eu-west-1.amazonaws.com/media.agentika.com/user/9b809651-77cc-4159-b42c-d9b9110f8e33.png',
						},
						{
							describeAttraction:
								'Идея создание этой церкви родилась ещё в 60-х годах 20-го столетия и впервые строительный комитет собрался для решения её судьбы в конце 1969 года. Но первый камень в фундамент будущего здания был заложен только в 1981 г. Вначале строительства главные споры вызывал выбор местоположения церкви. Многих смущало близость строения к океану, специалисты опасались, что фундамент будет неустойчивым, а укрепление его станет слишком затратным для города. И когда переговоры по этому вопросу окончательно зашли в тупик, известный архитектор Эрик Сван подключился к проекту. Он не побоялся взять на себя ответственность и нашёл смелое и эффективное решение для укрепления фундамента.',
							imgDescribeAttraction:
								'https://lh3.googleusercontent.com/proxy/YfhMvV6FLT3RPjpaBmtuG-_6LqJPbXcGwvCASfkqgyTlpLNvfZoogcQiKHFXieq5NLqwGSuxrP3D_m3E3WKSemTj7pS5riGeM6oedKBcXYMP6PKqGJV3gLpDHPeNBY2_6bi6HjDSQr3ZrmUfD2rTjGOVwZaCGw',
						},
						{
							describeAttraction:
								'Церковь продолжала строиться, но нескончаемые споры вокруг неё не прекращались, теперь уже по поводу дизайна и архитектуры здания. строительство грозило затянуться ещё на много лет. Но тут случилось то, что в корне изменило историю церкви и её значение – в процесс вмешался народ. 7 июня 1986 года была открыта часовня и в ещё недостроенном храме было проведено первое богослужение. Это так воодушевило местных жителей, что нашлось сразу около 300 добровольцев, вызвавшихся достроить церковь. Ими была выполнена большая часть работ и в конце 1987 года церковь была почти готова.',
							imgDescribeAttraction:
								'https://www.votpusk.ru/gallery/mobile/116666.jpg',
						},
					],
					accordion: [
						'https://s3-eu-west-1.amazonaws.com/media.agentika.com/user/28e54055-5090-4a82-9867-e8b17ae765f1.png',
						'https://www.glerarkirkja.is/static/news/lg/gkirkja400x400.jpg',
						'https://pp.userapi.com/c848532/v848532244/20347/_F34RBCWKDc.jpg',
						'https://s3-eu-west-1.amazonaws.com/media.agentika.com/user/e23b9bff-06c7-4353-ac30-a212a98b9808.png',
						'https://pp.userapi.com/c848532/v848532244/2038e/4kVj2ajP9tQ.jpg',
						'https://s3-eu-west-1.amazonaws.com/media.agentika.com/user/1cdf6068-b0bf-4fd5-856d-6bb868970212.png',
					],
				}, //Церковь Глерауркиркья
				{
					nameAttractions: 'Водопад Годафосс',
					describeAttraction:
						'Годафосс — один из самых известных водопадов Исландии, в регионе Нордюрланд-Эйстра. Находится на севере острова недалеко от Акюрейри, на реке Скьяульвандафльоут.',
					imgAttractions:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Go%C3%B0afoss_Island.jpg/1200px-Go%C3%B0afoss_Island.jpg',

					mapOfModal: (
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.9156058956464!2d-17.55470536953687!3d65.68281993725216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48cd7e6a481f369f%3A0x7ebbcdaa4e0d1d3b!2z0JPQvtC00LDRhNC-0YHRgQ!5e0!3m2!1sru!2sby!4v1601366084929!5m2!1sru!2sby'
							title={new Date().getMilliseconds()}
							aria-hidden='false'
						></iframe>
					),
					modal: [
						{
							describeAttraction:
								'На севере Исландии недалеко от Акюрейри, на реке Скьяульфандафльоут, что можно перевести как «река с дрожащим дыханием», находится один из знаменитый водопадов Исландии - Годафосс, «водопад Бога». Когда-то вокруг него возвышались фигурки языческих богов Скандинавии: Одина, Тора, Локи и других. Но позже, когда на полях Тинга было принято решение о переходе в христианство, прежние боги были повержены в пучину водопада. В честь какого бога носит своё имя Годафосс теперь точно сказать трудно. Но нет сомнения, что это «водопад Бога», так он могуч, величественен и красив.',
							imgDescribeAttraction:
								'https://img.lookmytrips.com/images/look7lkv/big-5742b7eeff936723fb0565b4-59c5094244ceb-1csa2a2.jpg',
						},
						{
							describeAttraction:
								'Годафосс - не самый высокий водопад Исландии, всего 12 м высотой и шириной около 30 м. Он имеет форму полумесяца и посередине разделён на два почти равных потока, между которыми две базальтовые колонны создают каменное русло для ещё одного узкого и наиболее интенсивного центрального потока.',
							imgDescribeAttraction:
								'https://planetofhotels.com/sites/default/files/atttaction-images/58088117.jpg',
						},
						{
							describeAttraction:
								'Водопад изумляет своей хрустальной чистотой и буйством красок окружающего ландшафта. Облако брызг вокруг него делает его заметным издалека. А в холодную зиму ниспадающие потоки воды замерзают, не достигнув дна, и всё вокруг превращается в заколдованное зимнее царство.',
							imgDescribeAttraction:
								'https://image.freepik.com/free-photo/_31965-5578.jpg',
						},
					],
					accordion: [
						'https://viking-travel.ru/files/12347/YgcEX5JxXr0DmvfDGp8I37CnTtdm3lC6.jpg',
						'https://vislandii.ru/images/attractions/godafoss/godafoss-iceland_03.JPG',
						'https://i2.wp.com/fountravel.ru/wp-content/uploads/2018/12/Go-afoss-Iceland-8.jpg?resize=702%2C486&ssl=1',
						'https://zakharkiv-travel.ru/wp-content/uploads/2020/05/%D0%B2%D0%BE%D0%B4%D0%BE%D0%BF%D0%B0%D0%B4-%D0%B3%D0%BE%D0%B4%D0%B0%D1%84%D0%BE%D1%81%D1%81-%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9.jpg',
						'https://avatars.mds.yandex.net/get-zen_doc/1899873/pub_5d98c5a50a451800b092d300_5d98cfb56d29c100ade3a410/scale_1200',
						'https://theplanetsworld.com/bucket-list/11-top-waterfalls-in-iceland-4.jpg',
						'https://wikiway.com/upload/resize_cache/iblock/6f8/1024_420_1/Vodopad-Godafoss.jpg',
					],
				}, //Водопад Годафосс
			],
		}, // Акурейри
	],
	quiz: [
		{
			question: 'Столица Исландии?',
			answer: ['Акурейри', 'Рейк-явик', 'Годафосс', 'Санмарино'],
			rightAnswer: 'Рейк-явик',
		},
		{
			question: 'Самая высокая температура зафиксированная а Исландии?',
			answer: ['+7 градусов', '+30 градусов', '+24 градуса', '+18 градусов'],
			rightAnswer: '+30 градусов',
		},
	],
}; //island
