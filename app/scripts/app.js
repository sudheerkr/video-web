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
  })
  .directive('timeNow', ['$interval', '$filter', function($interval, $filter){
    function link(scope, element, attrs){
      var format, timeoutId;

      var updateTime = function(){
        element.text($filter('date')(new Date(), format));
      };
      // $watch
      scope.$watch(attrs.timeNow, function(value){
        format = value;
        updateTime();
      });
      //
      element.on('$destroy', function(){
        $interval.cancil(timeoutId);
      });

      // start ui update proccess
      timeoutId = $interval(function(){
        updateTime();
      }, 1000);
    }
    return {
      link: link
    };
  }])
  .directive('dilogBox', function(){
    return {
      restrict: 'E',
      scope: {
        close: '&onClose'
      },
      transclude: true,
      templateUrl: 'views/dilogBox.html',
    };
  });
