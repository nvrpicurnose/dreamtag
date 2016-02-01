angular.module('DreamTag').directive('dream', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_dream/dream.html',
		controllerAs: 'dream',
		controller: function($scope, $reactive, $stateParams){
			$reactive(this).attach($scope);
			this.subscribe("unlocked-cloud");
			this.subscribe("unlocked-vault");

			this.test = "test string";

			this.helpers({
				currentDream: ()=> {
					return Dreams.findOne({_id: $stateParams.dreamId})
				}
			});

			this.originalPoster=()=>{
				return this.currentDream.owner == Meteor.user()._id ;
			};

			this.deleteDream = (dream)=>{
				var confirmation = confirm("Are you sure you want to delete this dream?");
				if (confirmation){
					Dreams.remove({_id: dream._id});
					window.location.assign("/");
				}
			};
		}
	}
});