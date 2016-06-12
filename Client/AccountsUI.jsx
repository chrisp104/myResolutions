import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AccountsUI extends Component {

	componentDidMount() {
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container));			
			// getting the blaze template of login buttons and rendering it in container 
	}

	componentWillUnMount() {
		Blaze.remove(this.view);
	}

	render() {
		return <span ref="container" />		// container will contain Blaze
	}
}
