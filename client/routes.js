angular.module("DreamTag")
  .config(function($urlRouterProvider, $stateProvider){

    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          template: '<dashboard></dashboard>'
        })
        .state('vault', {
          url: '/vault',
          template: '<dream-vault></dream-vault>'
        })
        .state('bonds', {
          url: '/bonds',
          template: '<friend-land></friend-land>'
        });

    $urlRouterProvider.otherwise("/dashboard");
  });