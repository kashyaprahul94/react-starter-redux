import { Actions } from "../constants/index";

export const incrementCounter = by => ({
	type: Actions.CounterIncrement, payload: by
});
export const decrementCounter = by => ({
	type: Actions.CounterDecrement, payload: by
});