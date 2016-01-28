Meteor.publish("dreams-pub", function(){

	return Dreams.find();
});