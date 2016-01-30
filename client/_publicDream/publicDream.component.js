angular.module('DreamTag').directive('publicDream', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_publicDream/publicDream.html',
		controllerAs: 'publicDream',
		controller: function($scope, $reactive, $stateParams){
			$reactive(this).attach($scope);
			this.subscribe('locked-dreams-public');
			this.subscribe('unlocked-dreams-public');

			this.helpers({
				dream: ()=> {
					return Dreams.findOne({_id: $stateParams.dreamId})
				}
			});
		}
	}
})