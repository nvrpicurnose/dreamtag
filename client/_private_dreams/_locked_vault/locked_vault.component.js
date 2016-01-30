angular.module('DreamTag').directive('lockedVault', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_private_dreams/_locked_vault/locked_vault.html',
		controllerAs: 'lockedVault',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);
			this.subscribe('locked-dreams-mine');

			this.helpers({
				locked_dreams_mine: () => {
					return Dreams.find(
						{$and: [
							{"timeLock":{"$gt": new Date()}}, 
							{"owner":Meteor.user()._id}
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