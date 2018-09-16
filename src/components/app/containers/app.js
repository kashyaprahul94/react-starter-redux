import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { AppStore } from "../state/store";
import { AppActions } from "../state/actions";

import "../styles/app.css";
import { AppView } from "../views";


class AppContainer extends Component {
	
	constructor ( props ) {
		
		super( props );
		
		console.info( "Initial_Store_State - ", AppStore.getState() );
		
		AppStore.subscribe(	()  => {
			console.info( "Updated_Store_State - ", AppStore.getState() );
		});
	}
	
	componentWillMount() {
		console.info( "In App Container" );
	}
	
	gotoHome () {
		console.log( this.props );
	}

	render () {
		return (
			<AppView toHome={ ( e ) => this.gotoHome( e ) } />
		);
	}
}

const mapStateToProps = ( state, props ) => ({

});

const mapDispatchToProps = dispatch => bindActionCreators( AppActions.navigate.to, dispatch );

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( AppContainer ) );