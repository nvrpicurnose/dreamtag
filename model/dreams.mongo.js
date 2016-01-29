Dreams = new Mongo.Collection('dreams');

Dreams.allow({
	insert: function(dream){
		return true;
	},
	update: function(){
		// to edit dream
	},
	remove: function(dream){
		return true;
	}
});