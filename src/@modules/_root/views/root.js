import React from "react";
import { Provider } from "react-redux";

import { RouterView } from "./router";



import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/app.css";



export const RootView = ({ store, history }) => (
	<Provider store={ store }>
		<div className="wrapper">
			<RouterView history={ history } />
		</div>
	</Provider>
);