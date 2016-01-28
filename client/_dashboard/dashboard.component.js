angular.module('DreamTag').directive('dashboard', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_dashboard/dashboard.html',
		controllerAs: 'dashboard',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);
			this.subscribe('dreams-pub');

			this.helpers({
				dreamslisting: () => {
					return Dreams.find();
				}
			});

			this.currentDream = {"date":moment(), "timeLock":moment("1970-01-01")};

			this.addDream = () => {
				Dreams.insert(this.currentDream);
				this.currentDream = {"date":moment(), "timeLock":moment("1970-01-01")};
			};

			this.deleteDream = function(dream){
				Dreams.remove({_id: dream._id});
			};
		}
	}
});