import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {
	
	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible', true);		// We have access to this session and other session vars everywhere
		// To see session variables open the Mongo console ctrl-m and click on the thing i want
	}

	render() {
		return (
			<ReactCSSTransitionGroup
					component="div"
					transitionName="route"
					transitionName="resolutionLoad"
					transitionEnterTimeout={600}
					transitionAppearTimeout={600}
					transitionLeaveTimeout={400}
					transitionAppear={true}>
				<h1>About Us</h1>
				<p>Hipster Ipsum</p>
				<button onClick={this.setVar}>Sign Up</button>
			</ReactCSSTransitionGroup>
		)
	}
}