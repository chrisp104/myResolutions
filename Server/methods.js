Meteor.methods({
	
	addResolution(resolution) {
		check(resolution, String);	// MAKES SURE A STRING IS PASSED IN - can use aldeed-simple-schema
		// don't let non users enter stuff
		if(!Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		Resolutions.insert({
			text: resolution,
			complete: false,
			createdAt: new Date(),
			user: Meteor.userId()
		});
	},		// MAKE SURE THIS COMMA IS THERE

	toggleResolution(resolution) {
		check(resolution, Object);
		if(Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('not-authorized');
		}
		Resolutions.update(resolution._id, {
			$set: {complete: !resolution.complete}
		})
	},

	deleteResolution(resolution) {
		check(resolution, Object);
		if(Meteor.userId() !== resolution.user){
			throw new Meteor.Error('not-authorized');
		}
		Resolutions.remove(resolution._id);
	}
	
});