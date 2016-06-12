import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 	// this is a react component to wrap around our stuff

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionsSingle from './ResolutionsSingle.jsx';
import SearchBar from './SearchBar.jsx';

//Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {		// only use TrackerReact when pulling in data

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

	resolutions() {
		return Resolutions.find().fetch();	// find returns cursor and fetch return query
	}

	render() {

		return (
			// we can only have one wrapper here so wrap everything in one div if multiple
			<div>
				<h1>My Resolutions</h1>
				<ResolutionsForm />		{/* REMEMBER WE CAN JUST USE COMPONENTS IN AN HTML TAG */}
				<ReactCSSTransitionGroup
					component="ul"
					className="resolutions"
					transitionName="resolutionLoad"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={400}>
					{this.resolutions().map( (resolution) => {
						return <ResolutionsSingle key={resolution._id} resolution={resolution} />	
						{/* purple resolution is a prop that was set in component file */}
					})}
				</ReactCSSTransitionGroup>
				<SearchBar />
			</div>
		)
	}
}

