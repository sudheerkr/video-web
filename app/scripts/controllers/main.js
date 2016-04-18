'use strict';

/**
 * @ngdoc function
 * @name imaxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imaxApp
 */
angular.module('imaxApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.niome = {name:'jjfsjskkjks', address: 'jhsdka jdksj jdkjd'};
    $scope.format = 'M/d/yy h:mm:ss a';
    $scope.message ='';
    $scope.hideDilog = function(message){
    	$scope.message  = message;
    	$scope.dilogIsHidden = true;
    	$timeout(function(){
    		$scope.message = '';
    		$scope.dilogIsHidden = false;
    	}, 2000);
    };
  });
