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
          .state('oneDream', {
              url: '/vault/:dreamId',
              template: '<one-Dream></one-Dream>'
            })
        .state('cloud', {
          url: '/cloud',
          template: '<cloud></cloud>'
        })
          .state('twoDream', {
              url: '/cloud/:dreamId',
              template: '<two-Dream></two-Dream>'
            });

    $urlRouterProvider.otherwise("/dashboard");
  });