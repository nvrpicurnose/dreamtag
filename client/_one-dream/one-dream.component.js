angular.module('DreamTag').directive('one-dream', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/one-dream/one-dream.html',
		controllerAs: 'one-dream',
		controller: function($scope, $reative, $stateParams){
			$reactive(this).attach($scope);
			this.dreamId = $stateParams.dreamId;
			this.subscribe('unlocked-dreams');

			this.helpers({
				dream: ()=> {
					return Dreams.findOne({_id: $stateParams.dreamId})
				}
			})
		}
	}
})