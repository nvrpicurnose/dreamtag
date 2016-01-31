angular.module('DreamTag').directive('oneDream', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_vault_dreams/_oneDream/oneDream.html',
		controllerAs: 'oneDream',
		controller: function($scope, $reactive, $stateParams){
			$reactive(this).attach($scope);

			this.helpers({
				dream: ()=> {
					return Dreams.findOne({_id: $stateParams.dreamId})
				}
			})
		}
	}
})