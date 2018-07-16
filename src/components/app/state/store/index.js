import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";


import { AppReducer as Base } from "../reducers";
import { CounterReducer } from "../../../home/state";

export const History = createHistory();

const Reducers = combineReducers({
	Base, CounterReducer
});

const Enhancers = [];

const Middlewares = [ thunk, routerMiddleware( History ) ];

// if (process.env.NODE_ENV === "development") {
// 	const devToolsExtension = window.devToolsExtension
//
// 	if (typeof devToolsExtension === "function") {
// 		Enhancers.push(devToolsExtension())
// 	}
// }

const ComposedEnhancers = compose ( applyMiddleware( ...Middlewares ), ...Enhancers );

export const AppStore = createStore( Reducers, {}, ComposedEnhancers );