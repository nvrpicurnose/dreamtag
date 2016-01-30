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
          .state('publicDream', {
              url: '/cloud/:dreamId',
              template: '<public-Dream></public-Dream>'
            });

    $urlRouterProvider.otherwise("/dashboard");
  });