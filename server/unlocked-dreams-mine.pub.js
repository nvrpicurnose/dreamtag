Meteor.publish("unlocked-dreams-mine", function(){
	return Dreams.find(
		{$and: [
			{"timeLock":{"$lte": new Date()}}, 
			{"owner":this.userId}
		]}
	);
});