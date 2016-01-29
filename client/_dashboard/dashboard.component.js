angular.module('DreamTag').directive('dashboard', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_dashboard/dashboard.html',
		controllerAs: 'dashboard',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);
			this.subscribe('');
			this.currentDream = {"date":new Date(), "timeLock": new Date()};

			this.addDream = () => {
				Dreams.insert(this.currentDream);
				this.currentDream = {"date":new Date(), "timeLock":new Date(), "tags":""};
			};
		}
	}
});