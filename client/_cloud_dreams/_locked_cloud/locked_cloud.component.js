angular.module('DreamTag').directive('lockedCloud', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_cloud_dreams/_locked_cloud/locked_cloud.html',
		controllerAs: 'lockedCloud',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.perPage = 2;
			this.page = 1;

			this.searchText = '';

			this.subscribe('users');
			this.subscribe('locked-cloud', () => {
				return [
					{
						limit: parseInt(this.perPage),
						skip: parseInt((this.getReactively('page') -1)*this.perPage)
					}
				]
			});

			this.helpers({
				locked_dreams_public: () => {
					return Dreams.find( 
						{$and: [
							{"timeLock":{"$gt": new Date()}}, 
							{"public":true}
						]},
						{date:-1}
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
		          return "Anonymous";
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