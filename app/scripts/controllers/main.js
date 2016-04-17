'use strict';

/**
 * @ngdoc function
 * @name imaxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imaxApp
 */
angular.module('imaxApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.niome = {name:'jjfsjskkjks', address: 'jhsdka jdksj jdkjd'};
  });
