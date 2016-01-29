Meteor.publish("locked-dreams", function(){
	return Dreams.find({timeLock:{"$gt": new Date()}}, {title:1, date:1, timeLock:1});
});
