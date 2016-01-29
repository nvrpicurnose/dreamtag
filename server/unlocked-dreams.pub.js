Meteor.publish("unlocked-dreams", function(){
	return Dreams.find({timeLock: {"$lte": new Date()}});
});