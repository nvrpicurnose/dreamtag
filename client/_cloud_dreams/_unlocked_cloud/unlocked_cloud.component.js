angular.module('DreamTag').directive('unlockedCloud', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_cloud_dreams/_unlocked_cloud/unlocked_cloud.html',
		controllerAs: 'unlockedCloud',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.perPage = 4;
			this.page = 1;

			this.subscribe('users');
			this.subscribe('unlocked-cloud', () => {
				return [{
					limit: parseInt(this.perPage),
					skip: parseInt((this.getReactively('page') -1)*this.perPage)
				}]
			});

			this.helpers({
				unlocked_dreams_public: () => {
					return Dreams.find( 
						{$and: [
							{"timeLock":{"$lte": new Date()}}, 
							{"public":true}
						]},
						{sort: {date:1}}
					);
				},
				isLoggedIn: () => {
					return Meteor.userId() !== null;
				},
				user: () =>{
					return Meteor.users.find();
				},
				dreamsCount: () => {
					return Counts.get('numberOfDreams');
				}
			});

			this.getDreamCreator = function(dream){
		        if (!dream) {
		          return '';
		        }

		        let owner = Meteor.users.findOne(dream.owner);

		        if (!owner) {
		          return dream.owner;
		        }

		        if (Meteor.userId() !== null && owner._id === Meteor.userId()) {
		          return 'me';
		        }

		        return owner.profile.name;
		    };

		    this.pageChanged = (newPage) => {
		    	this.page = newPage;
		    }
		}
	}
});