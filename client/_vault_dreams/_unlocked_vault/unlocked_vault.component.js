angular.module('DreamTag').directive('unlockedVault', function(){
	return {
		restrict: 'E',
		templateUrl: 'client/_vault_dreams/_unlocked_vault/unlocked_vault.html',
		controllerAs: 'unlockedVault',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.perPage = 4;
			this.page = 1;
			
			this.subscribe('unlocked-vault', ()=>{
				return [
					{
						limit: parseInt(this.perPage),
						skip: parseInt((this.getReactively('page') -1)*this.perPage)
					}
				]
			});

			this.helpers({
				unlocked_dreams_mine: () => {
					return Dreams.find(
						{$and: [
							{"timeLock":{"$lte": new Date()}}, 
							{"owner": Meteor.user()._id}
						]},
						{sort: {date:-1}}
					); 
				},
				isLoggedIn: () => {
					return Meteor.userId() !== null;
				},
				dreamsCount: () => {
					return Counts.get('numberOfDreams');
				}
			});

			this.deleteDream = (dream)=>{
				var confirmation = confirm("Are you sure you want to delete this dream?");
				if (confirmation){
					Dreams.remove({_id: dream._id});
				}
			};

			this.pageChanged = (newPage) => {
		    	this.page = newPage;
		    }
		}
	}
});