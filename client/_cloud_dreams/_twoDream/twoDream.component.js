angular.module('DreamTag').directive('twoDream', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_cloud_dreams/_twoDream/twoDream.html',
		controllerAs: 'twoDream',
		controller: function($scope, $reactive, $stateParams){
			$reactive(this).attach($scope);

			this.helpers({
				dream: ()=> {
					return Dreams.findOne({_id: $stateParams.dreamId})
				}
			});
		}
	}
})