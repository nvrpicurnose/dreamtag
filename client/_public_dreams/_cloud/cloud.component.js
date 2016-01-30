angular.module('DreamTag').directive('cloud', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_public_dreams/_cloud/cloud.html',
		controllerAs: 'cloud',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.PubPriv_toggle = true;

			this.togglePubPriv = (tf) => {
				this.PubPriv_toggle = tf;
			}
		}
	}
});