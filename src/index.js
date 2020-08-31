import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// const LoggerMidleware = (store) => {
// 	return (next) => {
// 		return () => {
// 			return (action) => {
// 				const result = next(action);
// 				console.log(store.getState(), 'getState()');
// 				return result;
// 			};
// 		};
// 	};
// };

const store = createStore(rootReducer);

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
