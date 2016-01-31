angular.module("DreamTag")
  .config(function($urlRouterProvider, $stateProvider){

    $stateProvider

        .state('dashboard', {
          url: '/dashboard',
          template: '<dashboard></dashboard>'
        })


        .state('vault', {
          url: '/vault',
          template: '<vault></vault>'
          })
          .state('vault.lockedVault', {
              url: '/lockedVault',
              template: '<locked-vault></locked-vault>'
            })
          .state('vault.unlockedVault', {
              url: '/unlockedVault',
              template: '<unlocked-vault></unlocked-vault>'
            })
              .state('vault.unlockedVault.oneDream', {
                  url: '/:dreamId',
                  template: '<one-Dream></one-Dream>'
                })


        .state('cloud', {
          url: '/cloud',
          template: '<cloud></cloud>'
        })
          .state('cloud.lockedCloud', {
              url: '/lockedCloud',
              template: '<locked-cloud></locked-cloud>'
            })
          .state('cloud.unlockedCloud', {
              url: '/unlockedCloud',
              template: '<unlocked-cloud></unlocked-cloud>'
            })
              .state('cloud.unlockedCloud.twoDream', {
                  url: '/:dreamId',
                  templateUrl: 'client/_cloud_dreams/_twoDream/twoDream.html'
                });

    $urlRouterProvider.otherwise("/dashboard");
  });