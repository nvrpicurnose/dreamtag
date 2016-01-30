angular.module('DreamTag').directive('vault', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_vault/vault.html',
		controllerAs: 'vault',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);
			this.subscribe('locked-dreams-mine');
			this.subscribe('unlocked-dreams-mine');

			this.helpers({
				unlocked_dreams_mine: () => {
					return Dreams.find(
						{$and: [
							{"timeLock":{"$lte": new Date()}}, 
							{"owner": Meteor.user()._id}
						]} 
					); 
				},
				locked_dreams_mine: () => {
					return Dreams.find(
						{$and: [
							{"timeLock":{"$gt": new Date()}}, 
							{"owner":Meteor.user()._id}
						]},
						{title:1, date:1, timeLock:1}
					);
				},
				isLoggedIn: () => {
					return Meteor.userId() !== null;
				}
			});

			this.deleteDream = (dream)=>{
				Dreams.remove({_id: dream._id});
			};
		}
	}
});