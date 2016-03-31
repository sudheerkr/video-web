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
.module('imaxApp', ['ngRoute','ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
