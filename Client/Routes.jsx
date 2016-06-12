import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './Layouts/MainLayout.jsx';
import ResolutionsWrapper from './Resolutions/ResolutionsWrapper.jsx';		// don't need brackets since App is the default export
import About from './About.jsx';
import ResolutionDetail from './Resolutions/ResolutionDetail.jsx';

FlowRouter.route('/', {	// forward slash is just the homepage
	action() {
		mount(MainLayout, {
			content: (<ResolutionsWrapper />)	// passing in the component as content
		})
	}
})

FlowRouter.route('/about', {	
	action() {
		mount(MainLayout, {
			content: (<About />)	
		})
	}
})

FlowRouter.route('/resolutions/:id', {	// route comes in with resolutions and id
	action(params) {		// id gets passed thru params
		mount(MainLayout, {
			content: (<ResolutionDetail id={params.id} />)	// id gets passed in as a prop of resolution detail
		})
	}
})