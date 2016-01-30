angular.module('DreamTag').directive('cloud', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_cloud/cloud.html',
		controllerAs: 'cloud',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.subscribe('locked-dreams-public');
			this.subscribe('unlocked-dreams-public');
			this.subscribe('users');

			this.helpers({
				unlocked_dreams_public: () => {
					return Dreams.find( 
						{$and: [
							{"timeLock":{"$lte": new Date()}}, 
							{"public":true}
						]},
						{sort: {date:-1}}
					);
				},
				locked_dreams_public: () => {
					return Dreams.find(
						{$and: [
							{"timeLock":{"$gt": new Date()}}, 
							{"public":true}
						]}, 
						{title:1, date:1, timeLock:1},
						{sort: {timeLock:-1}}
					);
				},
				isLoggedIn: () => {
					return Meteor.userId() !== null;
				},
				user: () =>{
					return Meteor.users.find();
				}
			});

			this.getDreamCreator = function(dream){
		        if (!dream) {
		          return '';
		        }

		        let owner = Meteor.users.findOne(dream.owner);

		        if (!owner) {
		          return 'user';
		        }

		        if (Meteor.userId() !== null && owner._id === Meteor.userId()) {
		          return 'me';
		        }

		        return owner.profile.name;
		    };
		}
	}
});