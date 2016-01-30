Dreams = new Mongo.Collection('dreams');

Dreams.allow({
	insert: function(dream){
		return true;
	},
	update: function(){
		// to edit dream
	},
	remove: function(userId, dream){
		return userId && dream.owner == userId;
	}
});