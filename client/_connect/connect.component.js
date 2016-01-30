angular.module('DreamTag').directive('connect', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_connect/connect.html',
		controllerAs: 'connect',
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
						]}
					);
				},
				locked_dreams_public: () => {
					return Dreams.find(
						{$and: [
							{"timeLock":{"$gt": new Date()}}, 
							{"public":true}
						]}, 
						{title:1, date:1, timeLock:1});
				},
				isLoggedIn: () => {
					return Meteor.userId() !== null;
				}
			});

		}
	}
});