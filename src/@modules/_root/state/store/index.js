import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";


import { Reducers } from "../reducers";



export const AppHistory = createHistory();


const middlewares = [ thunk, routerMiddleware( AppHistory ) ];
const enhancers = [];


export const AppStore = createStore(
	Reducers,
	{},
	compose( applyMiddleware( ...middlewares ), ...enhancers )
);