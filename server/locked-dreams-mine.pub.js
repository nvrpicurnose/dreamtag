Meteor.publish("locked-dreams-mine", function(){
	return Dreams.find(
		{$and: [
			{"timeLock":{"$gt": new Date()}}, 
			{"owner":this.userId}
		]}, 
		{title:1, date:1, timeLock:1}
	);
});
