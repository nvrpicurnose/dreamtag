Dreams = new Mongo.Collection('dreams');

Dreams.allow({
	insert: function(userId, dream){
		return userId;
	},
	update: function(){
		return userId && dream.owner == userId;
	},
	remove: function(userId, dream){
		return userId && dream.owner == userId;
	}
});