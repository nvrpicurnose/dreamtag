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
          .state('one-dream', {
              url: '/vault/:dreamId',
              template: '<one-dream></one-dream>'
            })
        .state('connect', {
          url: '/connect',
          template: '<connect></connect>'
        });

    $urlRouterProvider.otherwise("/dashboard");
  });