Meteor.publish("unlocked-dreams-public", function(options){

	let selector = {
		$and: [
			{"public":true}, 
			{"timeLock":{"$lte": new Date()}}
		]
	};
	
	// Counts is part of an installed API that allows us to count the total # of records that match our query without having to go through the entire Dreams db
	Counts.publish(this, 'numberOfDreams', Dreams.find(selector), {noReady:true});
	return Dreams.find(selector, options);
});
