import React from "react";
import { Provider } from "react-redux";

import { RouterView } from "./router";

export const RootView = ({ store, history }) => (
	<Provider store={ store }>
		<div className="wrapper">
			<RouterView />
		</div>
	</Provider>
);