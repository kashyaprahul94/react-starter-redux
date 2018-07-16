import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { AppContainer } from "./app/containers";
import { HomeContainer } from "./home/containers";

export const RouterView = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={ AppContainer } />
			<Route path="/home" component={ HomeContainer } />
		</Switch>
	</Router>
);