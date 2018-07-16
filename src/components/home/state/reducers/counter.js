import { Actions } from "../constants";

const InitialState = {
	counter: 0
};

export const CounterReducer = ( state = InitialState, action ) => {
	switch ( action.type ) {
		case Actions.CounterIncrement:
			return { ...state, ...{ counter: ( state.counter + action.payload ) } };
		case Actions.CounterDecrement:
			return { ...state, ...{ counter: ( state.counter - action.payload ) } };
		default:
			return state;
	}
};