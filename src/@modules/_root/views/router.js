import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { HomeComponent } from "@modules/home";

export const RouterView = ({ history }) => (
	<Router>
		<Switch>
			<Route exact path="/" component={ HomeComponent } />
		</Switch>
	</Router>
);