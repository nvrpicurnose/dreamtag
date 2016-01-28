angular.module('DreamTag').directive('aDream', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/add-new-dream-modal/add-new-dream-modal.html',
		controllerAs: 'aDream',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.currentDream = {"date":moment(), "timeLock":moment("1970-01-01")};

			this.addDream = () => {
				Dreams.insert(this.currentDream);
				this.currentDream = {"date":moment(), "timeLock":moment("1970-01-01")};
				$scope.$close();
			};
		}
	}
});