Meteor.publish("unlocked-dreams-public", function(){
	return Dreams.find(
		{$and:[
			{"public":true}, 
			{"timeLock":{"$lte": new Date()}}
		]}
	);
});
