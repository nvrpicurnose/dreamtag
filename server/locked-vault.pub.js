Meteor.publish("locked-vault", function(options){
	
	let selector = {
		$and: [
			{"timeLock":{"$gt": new Date()}}, 
			{"owner":this.userId}
		]
	};

	let projection = {
		fields:{		
			title:1,
			date:1,
			timeLock:1,
		}
	};
	
	// Counts is part of an installed API that allows us to count the total # of records that match our query without having to go through the entire Dreams db
	Counts.publish(this, 'numberOfDreams', Dreams.find(selector), {noReady:true});
	return Dreams.find(selector, options);
});
