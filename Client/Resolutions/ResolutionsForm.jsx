import React, {Component} from 'react';

export default class ResolutionsForm extends Component {
	
	addResolution(event) {
		event.preventDefault();
		var text = this.refs.resolution.value.trim();		// this path was seen in the console log for the object
		if(text) {		// put it in here so that a blank submission won't do anything
			Meteor.call('addResolution', text, (error, data) => {
				if(error) {
					Bert.alert('Please login', 'danger', 'fixed-top', 'fa-frown-o');
				} else {
					this.refs.resolution.value = "";
				}
			});
		}	
	}

	render() {
		return (
			<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
			{/* this is what is input into the form */}
				<input 
					type="text" 
					ref="resolution"	// This is the ref property of the object that is created when passed to mongo
					placeholder="Finish React Meteor Series"
				/>
			</form>
		)
	}
}