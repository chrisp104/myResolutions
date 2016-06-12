Resolutions = new Mongo.Collection("resolutions");

console.log(Meteor.settings.private.ptest);	// since this is on server it will output to terminal

if(Meteor.isServer){
	Meteor.publish("allResolutions", function() {
		return Resolutions.find();
	});
}

if(Meteor.isServer){
	Meteor.publish("userResolutions", function() {
		return Resolutions.find({user: this.userId});	// only publish those with the current userId
	});
}