import React from "react";
import ReactDOM from "react-dom";

import AppView from "../views/app";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<AppView />, div);
	ReactDOM.unmountComponentAtNode(div);
});