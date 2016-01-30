angular.module('DreamTag').directive('cloud', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_cloud/cloud.html',
		controllerAs: 'cloud',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.subscribe('locked-dreams-public');
			this.subscribe('unlocked-dreams-public');

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
				}
			});

		}
	}
});