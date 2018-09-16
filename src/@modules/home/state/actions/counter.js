import { Actions } from "../constants";


export const increaseCounter = by => {
	return dispatch => {
		dispatch({
			type: Actions.Counter.Increase, payload: by
		});
	};
};

export const decreaseCounter = by => {
	return dispatch => {
		dispatch({
			type: Actions.Counter.Decrease, payload: by
		});
	};
};