Dreams = new Mongo.Collection('dreams');

Dreams.allow({
	insert: function(userId, dream){
		return userId;
	},
	update: function(){
		// to edit dream
	},
	remove: function(userId, dream){
		return userId && dream.owner == userId;
	}
});