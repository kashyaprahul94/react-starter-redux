import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";

import { RootView, AppStore, AppHistory } from "./@modules/_root";


ReactDOM.render(
	<RootView store={ AppStore } history={ AppHistory } />,
	document.getElementById( "root" )
);

registerServiceWorker();