angular.module('DreamTag').directive('dashboard', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_dashboard/dashboard.html',
		controllerAs: 'dashboard',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);
			this.subscribe('');

			this.timeLock = new Date();
				this.now = new Date();
				this.daysAway = 7;

			this.timeNowIs = moment(this.now).format('h:mm a');
			this.dateNowIs = moment(this.now).format('MMM Do YYYY');

			this.currentDream = {"date":new Date(), "timeLock": this.timeLock, "tags":"", "public":false};

			this.helpers({
				isLoggedIn: () => {
					return Meteor.userId() !== null;
				},
				currentUser: () => {
					return Meteor.userId();
				}
			})

			this.addDream = () => {
				if (Meteor.userId() !== null){
					this.currentDream.owner = Meteor.user()._id;
				}else{
					this.currentDream.owner = "Anonymous";
				}
				this.currentDream.timeLock = this.timeLock;
				console.log(this.currentDream);
				Dreams.insert(this.currentDream);
				this.timeLock = new Date();
				this.now = new Date();
				this.currentDream = {"date":new Date(), "tags":"", "public":false};
			};
		}
	}
});