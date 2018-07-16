import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";

import { RootView } from "./components/root";
import { AppStore, History } from "./components/app/state";

ReactDOM.render(
	<RootView store={ AppStore } history={ History } />,
	document.getElementById("root")
);
registerServiceWorker();