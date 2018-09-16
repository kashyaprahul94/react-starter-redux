import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { AppStore } from "@modules/_root/state";



import "../styles/home.css";

import { CounterView } from "../views";

import { increaseCounter, decreaseCounter } from "../state/actions";


class HomeComponent extends Component {
	
	constructor ( props ) {
		
		super( props );
		
		this.counter = props.counter;
		
		this.increaseCounter = this.increaseCounter.bind( this );
		this.decreaseCounter = this.decreaseCounter.bind( this );
		
		
		AppStore.subscribe( this.onStateChange );
	}
	
	onStateChange = () => {
	
	};
	
	
	
	increaseCounter ( byValue = 1 ) {
		setImmediate( () => {
			this.props.increaseCounter( byValue );
		});
	};
	
	decreaseCounter ( byValue = 1 ) {
		setImmediate( () => {
			this.props.decreaseCounter( byValue );
		});
	};
	
	
	
	render () {
		return (
			<div className="home">
				<CounterView counter={ this.props.counter } increaseCounter={ this.increaseCounter } decreaseCounter={ this.decreaseCounter } />
			</div>
		);
	}
}


const mapStateToProps = state => ({
	counter: state.CounterReducer.counter
});

const mapDispatchToProps = dispatch => {
	return {
		increaseCounter: by => dispatch( increaseCounter( by ) ),
		decreaseCounter: by => dispatch( decreaseCounter( by ) ),
	}
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( HomeComponent ) );