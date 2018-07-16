import { push } from "react-router-redux";

export const AppActions = {
	navigate: {
		to: {
			home: dispatch => {
				dispatch( push( "/home" ) );
			}
		}
	}
};