import { ADD_COUNTRES_ARR } from '../actions/actionType';

const initialState = {
	questionsEng: [
		{
			name: 'Игры на знание стран',
			bgc: '',
			path: 'game',
		},
		{ name: 'Вспомнить Английский', bgc: '', path: 'english' },
		{ name: 'Сохраненные вами страны', bgc: '', path: 'yourCountres' },
	],
	countresOnCard: null,
	yourSaveCountres: new Set(),
	quizEng: [
		{
			question: 'I have ___ apples right now!',
			answer: ['one', 'tree', 'a', 'an'],
			rightAnswer: 'tree',
		},
		{
			question: 'What ___ of letter do you like?',
			answer: ['more', 'kindow', 'sort', 'have'],
			rightAnswer: 'sort',
		},
		{
			question: 'I ___ two beer please! Give me it please',
			answer: ['hope', 'want', 'like', 'am'],
			rightAnswer: 'want',
		},
	],
	quizFlag: [
		{
			question: 'Какой национальный язык в Украине?',
			answer: ['Русский', 'Туркменский', 'Иранский', 'Украинский'],
			rightAnswer: 'Украинский',
		},
		{
			question: 'Что изображено на флаге Испании?',
			answer: ['Замок', 'Щит', 'Корону', 'Трость и шуба'],
			rightAnswer: 'Замок',
		},
		{
			question: 'Где изобрели первое в мире радио?',
			answer: ['Германия', 'США', 'Украина', 'Польша'],
			rightAnswer: 'Украина',
		},
	],
};

export function otherReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_COUNTRES_ARR:
			return {
				questionsEng: state.questionsEng,
				countresOnCard: (state.countresOnCard = action.payload),
				yourSaveCountres: state.yourSaveCountres.add(state.countresOnCard),
				quizEng: state.quizEng,
			};

		default:
			return state;
	}
}
