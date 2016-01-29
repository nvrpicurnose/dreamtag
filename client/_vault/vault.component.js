angular.module('DreamTag').directive('vault', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_vault/vault.html',
		controllerAs: 'vault',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);
			this.subscribe('unlocked-dreams');
			this.subscribe('locked-dreams');

			this.helpers({
				unlocked_dreams: () => {
					return Dreams.find({"timeLock": {"$lte": new Date()}});
				},
				locked_dreams: () => {
					return Dreams.find({timeLock:{"$gt": new Date()}}, {title:1, date:1, timeLock:1});
				}
			});

			this.deleteDream = function(dream){
				Dreams.remove({_id: dream._id});
			};
		}
	}
});