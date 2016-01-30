angular.module('DreamTag').directive('oneDream', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_oneDream/oneDream.html',
		controllerAs: 'oneDream',
		controller: function($scope, $reactive, $stateParams){
			$reactive(this).attach($scope);
			this.subscribe('locked-dreams-mine');
			this.subscribe('unlocked-dreams-mine');

			this.helpers({
				dream: ()=> {
					return Dreams.findOne({_id: $stateParams.dreamId})
				}
			})
		}
	}
})