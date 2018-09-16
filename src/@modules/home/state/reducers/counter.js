import { Actions } from "../constants";

const InitialState = {
	counter: 0,
};

export const CounterReducer = ( state = InitialState, action ) => {
	switch ( action.type ) {
		case Actions.Counter.Increase:
			return {
				...state,
				counter: parseInt( state.counter + action.payload, 10 )
			};
		case Actions.Counter.Decrease:
			return {
				...state,
				counter: parseInt( state.counter - action.payload, 10 )
			};
		default:
			return state;
	}
};