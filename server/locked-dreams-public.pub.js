Meteor.publish("locked-dreams-public", function(){
	return Dreams.find(
		{$and: [
			{"public":true}, 
			{"timeLock":{"$gt": new Date()}}
		]},
		{title:1, date:1, timeLock:1}
	);
});
