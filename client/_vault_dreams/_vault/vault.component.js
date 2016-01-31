angular.module('DreamTag').directive('vault', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_vault_dreams/_vault/vault.html',
		controllerAs: 'vault',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);
			
			this.helpers({
				isLoggedIn: () => {
					return Meteor.userId() !== null;
				}
			});

			this.PubPriv_toggle = false;

			this.togglePubPriv = (tf) => {
				this.PubPriv_toggle = tf;
			}
		}
	}
});