angular.module('DreamTag').directive('lockedCloud', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_public_dreams/_locked_cloud/locked_cloud.html',
		controllerAs: 'lockedCloud',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.subscribe('locked-dreams-public');
			this.subscribe('users');

			this.helpers({
				locked_dreams_public: () => {
					return Dreams.find( 
						{$and: [
							{"timeLock":{"$gt": new Date()}}, 
							{"public":true}
						]},
						{sort: {date:-1}}
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
		          return "Anonymous";
		        }

		        if (Meteor.userId() !== null && owner._id === Meteor.userId()) {
		          return 'me';
		        }

		        return owner.profile.name;
		    };
		}
	}
});