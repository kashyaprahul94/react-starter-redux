import React, { Component } from "react";
import { connect } from "react-redux";

import { AppStore } from "../../app/state";

import { incrementCounter, decrementCounter } from "../state/actions";
import "../styles/app.css";
import { CounterView } from "../views";


class HomeContainer extends Component {
	
	constructor ( props ) {
		
		super( props );
		
		this.counter = this.props.counter || 0;
		
		AppStore.subscribe(	()  => {
			this.counter = AppStore.getState().CounterReducer.counter;
		});
	}
	
	componentWillMount() {
		console.info( "In Home Container" );
	}
	
	
	
	increaseCounter = () => {
		setImmediate( () => {
			this.props.incrementCounter( 1 );
		});
	};
	
	decreaseCounter = () => {
		setImmediate( () => {
			this.props.decrementCounter( 1 );
		});
	};

	
	
	render () {
		return (
			<CounterView counter={ this.counter } increaseCounter={ this.increaseCounter } decreaseCounter={ this.decreaseCounter } />
		);
	}
}


const mapStateToProps = state => ({
	counter: state.CounterReducer.counter
});

const mapDispatchToProps = dispatch => {
	return {
		incrementCounter: value => dispatch( incrementCounter( value ) ),
		decrementCounter: value => dispatch( decrementCounter( value ) ),
	}
};

export default connect( mapStateToProps, mapDispatchToProps )( HomeContainer );