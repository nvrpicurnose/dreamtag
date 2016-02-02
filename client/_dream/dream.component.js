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

			this.save=()=>{
				console.log("saving...");
				Dreams.update({_id: $stateParams.dreamId}, {
		          $set: {
		            "public": this.currentDream.public,
		            "timeLock": this.currentDream.timeLock
		          }
		        }, (error) => {
		          if (error) {
		            console.log('Oops, unable to update the dream...');
		          }
		          else {
		            console.log('Done!');
		          }
		        });
		        this.back();
			};

			this.originalPoster = () =>{
				return this.currentDream.owner = Meteor.user()._id;
			}

			this.deleteDream = (dream)=>{
				var confirmation = confirm("Are you sure you want to delete this dream?");
				if (confirmation){
					Dreams.remove({_id: dream._id});
					this.back();
				}
			};

			this.back = () =>{
				console.log("attempting to go back");
				window.history.back();
			}
		}
	}
});