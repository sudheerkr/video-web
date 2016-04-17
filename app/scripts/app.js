'use strict';

/**
 * @ngdoc overview
 * @name imaxApp
 * @description
 * # imaxApp
 *
 * Main module of the application.
 */
angular
.module('imaxApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/state1');
    $stateProvider
      .state('state1', {
        url: '/state1',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('state2', {
        url: '/state2',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  })
  .directive('myCustomer', function(){
    return {
      restrict: 'E',
      scope: {
        customerInfo: '=info'
      },
      templateUrl: 'views/myCustomer.html'
    };
  });
