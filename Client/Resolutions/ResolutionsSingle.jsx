import React, { Component } from 'react';

export default class ResolutionSingle extends Component {
	
	toggleChecked() {
		Meteor.call('toggleResolution', this.props.resolution);
		// passing in the last two arguments into toggleResolution
	}

	deleteResolution() {
		Meteor.call('deleteResolution', this.props.resolution);
	}

	render() {
		// make new ternary expression that will change the class of li when checked
		const resolutionClass = this.props.resolution.complete ? "checked" : "";
		const status = this.props.resolution.complete ? <span className="completed">Completed</span> : '';

		return (
			<li className={resolutionClass}>
				<input 
					type="checkbox"
					readOnly={true}
					checked={this.props.resolution.complete}
					onClick={this.toggleChecked.bind(this)}		// bind this when using methods defined in the class
				/>
				
				{/* FOR ES15, YOU CAN WRAP TEXT IN ` ` AND THEN PUT VARS INSIDE THAT IN ${} */}
				<a href={`/resolutions/${this.props.resolution._id}`}>{this.props.resolution.text}</a>
				
				{status}		{/* REFERS TO THE CONDITIONAL WE DEFINED ABOVE */}
				<button 
					className="btn-cancel"
					onClick={this.deleteResolution.bind(this)}>
					&times;
				</button>
			</li>
		)
	}
}