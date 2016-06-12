import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionDetail extends TrackerReact(Component) {

	constructor() {
		super();	// if we need to pass in props put it in the super

		this.state = {	// this state is only within this component
			subscription: {
				resolutions: Meteor.subscribe("userResolutions")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.resolutions.stop();		// make sure we stop subscription when we are done with it
	}

	resolution() {
		return Resolutions.findOne(this.props.id);	// don't put this.props.id in {} since it's not an object
	}

	render() {
		let res = this.resolution();
		if(!res) {
			return(<div>Loading...</div>);
		}

		return (
			<div>
				<h1>{res.text}</h1>
			</div>
		)
	}
}